const express = require("express")
const cors = require("cors")
const helmet = require("helmet")
const rateLimit = require("express-rate-limit")
const { body, validationResult } = require("express-validator")
const nodemailer = require("nodemailer")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcryptjs")
const { MongoClient } = require("mongodb")
require("dotenv").config()

const app = express()
const PORT = process.env.PORT || 3001

// Middleware
app.use(
  helmet({
    contentSecurityPolicy: {
      directives: {
        defaultSrc: ["'self'"],
        scriptSrc: [
          "'self'",
          "'unsafe-inline'", // Required for Next.js
          "https://vercel.live",
          "https://va.vercel-scripts.com",
        ],
        styleSrc: [
          "'self'",
          "'unsafe-inline'", // Required for styled-components and CSS-in-JS
          "https://fonts.googleapis.com",
        ],
        fontSrc: ["'self'", "https://fonts.gstatic.com", "data:"],
        imgSrc: ["'self'", "data:", "https:", "blob:"],
        connectSrc: ["'self'", "https://vercel.live", "https://va.vercel-scripts.com"],
        frameSrc: ["'none'"],
        objectSrc: ["'none'"],
        baseUri: ["'self'"],
        formAction: ["'self'"],
        upgradeInsecureRequests: [],
      },
    },
    crossOriginEmbedderPolicy: false,
  }),
)
app.use(
  cors({
    origin: process.env.FRONTEND_URL || "https://www.angelkellogg.com/",
    credentials: true,
  }),
)
app.use(express.json({ limit: "10mb" }))
app.use(express.urlencoded({ extended: true }))

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
})
app.use("/api/", limiter)

// Strict rate limiting for forms
const formLimiter = rateLimit({
  windowMs: 60 * 1000, // 1 minute
  max: 5, // limit each IP to 5 form submissions per minute
})

// Database connection
let db
MongoClient.connect(process.env.MONGODB_URI)
  .then((client) => {
    console.log("Connected to MongoDB")
    db = client.db("angel-kellogg")
  })
  .catch((error) => console.error("MongoDB connection error:", error))

// Email transporter
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
})

// Auth middleware
const authenticateToken = (req, res, next) => {
  const authHeader = req.headers["authorization"]
  const token = authHeader && authHeader.split(" ")[1]

  if (!token) {
    return res.status(401).json({ error: "Access token required" })
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) return res.status(403).json({ error: "Invalid token" })
    req.user = user
    next()
  })
}

// Admin middleware
const requireAdmin = (req, res, next) => {
  if (req.user.role !== "admin") {
    return res.status(403).json({ error: "Admin access required" })
  }
  next()
}

// Health check
app.get("/health", (req, res) => {
  res.json({ status: "OK", timestamp: new Date().toISOString() })
})

// Newsletter subscription
app.post(
  "/api/subscribe",
  formLimiter,
  [
    body("email").isEmail().normalizeEmail(),
    body("name").optional().trim().isLength({ min: 1, max: 100 }),
    body("source").optional().trim(),
  ],
  async (req, res) => {
    try {
      const errors = validationResult(req)
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
      }

      const { email, name, source } = req.body

      // Check for existing subscription
      const existing = await db.collection("subscriptions").findOne({ email })
      if (existing) {
        return res.status(409).json({ error: "Email already subscribed" })
      }

      // Add to database
      await db.collection("subscriptions").insertOne({
        email,
        name: name || "",
        source: source || "website",
        status: "active",
        subscribedAt: new Date(),
        preferences: {
          newsletter: true,
          events: true,
          announcements: true,
        },
      })

      // Send welcome email
      await transporter.sendMail({
        from: process.env.EMAIL_FROM,
        to: email,
        subject: "Welcome to Angel Kellogg's Community!",
        html: `
        <h2>Welcome ${name || "Friend"}!</h2>
        <p>Thank you for joining Angel Kellogg's community. You'll receive updates on:</p>
        <ul>
          <li>Latest blog posts and insights</li>
          <li>Upcoming events and speaking engagements</li>
          <li>Exclusive community content</li>
          <li>BRGR Collective updates</li>
        </ul>
        <p>Stay connected and keep building!</p>
      `,
      })

      res.json({ message: "Successfully subscribed!" })
    } catch (error) {
      console.error("Newsletter subscription error:", error)
      res.status(500).json({ error: "Subscription failed" })
    }
  },
)

// Waitlist signup
app.post(
  "/api/waitlist",
  formLimiter,
  [
    body("email").isEmail().normalizeEmail(),
    body("name").trim().isLength({ min: 1, max: 100 }),
    body("interests").optional().isArray(),
    body("notes").optional().trim().isLength({ max: 500 }),
  ],
  async (req, res) => {
    try {
      const errors = validationResult(req)
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
      }

      const { email, name, interests, notes } = req.body

      // Check for existing entry
      const existing = await db.collection("waitlist").findOne({ email })
      if (existing) {
        return res.status(409).json({ error: "Email already on waitlist" })
      }

      await db.collection("waitlist").insertOne({
        email,
        name,
        interests: interests || [],
        notes: notes || "",
        status: "pending",
        joinedAt: new Date(),
        source: "website",
      })

      res.json({ message: "Added to waitlist successfully!" })
    } catch (error) {
      console.error("Waitlist error:", error)
      res.status(500).json({ error: "Failed to join waitlist" })
    }
  },
)

// Contact form
app.post(
  "/api/contact",
  formLimiter,
  [
    body("name").trim().isLength({ min: 1, max: 100 }),
    body("email").isEmail().normalizeEmail(),
    body("subject").trim().isLength({ min: 1, max: 200 }),
    body("message").trim().isLength({ min: 10, max: 2000 }),
    body("type").optional().isIn(["general", "speaking", "media", "partnership"]),
  ],
  async (req, res) => {
    try {
      const errors = validationResult(req)
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
      }

      const { name, email, subject, message, type } = req.body

      // Store in database
      await db.collection("contact_messages").insertOne({
        name,
        email,
        subject,
        message,
        type: type || "general",
        status: "new",
        createdAt: new Date(),
        ip: req.ip,
      })

      // Send notification email
      await transporter.sendMail({
        from: process.env.EMAIL_FROM,
        to: process.env.CONTACT_EMAIL,
        subject: `New Contact: ${subject}`,
        html: `
        <h3>New Contact Form Submission</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Type:</strong> ${type || "general"}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, "<br>")}</p>
      `,
      })

      // Send auto-reply
      await transporter.sendMail({
        from: process.env.EMAIL_FROM,
        to: email,
        subject: "Thank you for reaching out!",
        html: `
        <h2>Thank you ${name}!</h2>
        <p>I've received your message and will get back to you within 24-48 hours.</p>
        <p>In the meantime, feel free to connect with me on social media or check out my latest content.</p>
        <p>Best regards,<br>Angel Kellogg</p>
      `,
      })

      res.json({ message: "Message sent successfully!" })
    } catch (error) {
      console.error("Contact form error:", error)
      res.status(500).json({ error: "Failed to send message" })
    }
  },
)

// Business partner intake
app.post(
  "/api/partners/intake",
  formLimiter,
  [
    body("company").trim().isLength({ min: 1, max: 200 }),
    body("contact").trim().isLength({ min: 1, max: 100 }),
    body("email").isEmail().normalizeEmail(),
    body("phone").optional().trim(),
    body("interests").isArray(),
    body("description").trim().isLength({ min: 10, max: 1000 }),
  ],
  async (req, res) => {
    try {
      const errors = validationResult(req)
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
      }

      const { company, contact, email, phone, interests, description } = req.body

      await db.collection("partner_intake").insertOne({
        company,
        contact,
        email,
        phone: phone || "",
        interests,
        description,
        status: "pending",
        submittedAt: new Date(),
        source: "website",
      })

      // Send notification
      await transporter.sendMail({
        from: process.env.EMAIL_FROM,
        to: process.env.PARTNERSHIPS_EMAIL,
        subject: `New Partnership Inquiry: ${company}`,
        html: `
        <h3>New Partnership Application</h3>
        <p><strong>Company:</strong> ${company}</p>
        <p><strong>Contact:</strong> ${contact}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
        <p><strong>Interests:</strong> ${interests.join(", ")}</p>
        <p><strong>Description:</strong></p>
        <p>${description.replace(/\n/g, "<br>")}</p>
      `,
      })

      res.json({ message: "Partnership application submitted successfully!" })
    } catch (error) {
      console.error("Partnership intake error:", error)
      res.status(500).json({ error: "Failed to submit application" })
    }
  },
)

// Blog posts API
app.get("/api/posts", async (req, res) => {
  try {
    const { page = 1, limit = 10, tag, status = "published" } = req.query
    const skip = (page - 1) * limit

    const filter = { status }
    if (tag) filter.tags = { $in: [tag] }

    const posts = await db
      .collection("posts")
      .find(filter)
      .sort({ publishedAt: -1 })
      .skip(skip)
      .limit(Number.parseInt(limit))
      .toArray()

    const total = await db.collection("posts").countDocuments(filter)

    res.json({
      posts,
      pagination: {
        page: Number.parseInt(page),
        limit: Number.parseInt(limit),
        total,
        pages: Math.ceil(total / limit),
      },
    })
  } catch (error) {
    console.error("Posts fetch error:", error)
    res.status(500).json({ error: "Failed to fetch posts" })
  }
})

app.get("/api/posts/:slug", async (req, res) => {
  try {
    const post = await db.collection("posts").findOne({
      slug: req.params.slug,
      status: "published",
    })

    if (!post) {
      return res.status(404).json({ error: "Post not found" })
    }

    res.json(post)
  } catch (error) {
    console.error("Post fetch error:", error)
    res.status(500).json({ error: "Failed to fetch post" })
  }
})

// Events API
app.get("/api/events", async (req, res) => {
  try {
    const { upcoming = true } = req.query
    const filter = upcoming === "true" ? { startsAt: { $gte: new Date() } } : {}

    const events = await db.collection("events").find(filter).sort({ startsAt: 1 }).toArray()

    res.json(events)
  } catch (error) {
    console.error("Events fetch error:", error)
    res.status(500).json({ error: "Failed to fetch events" })
  }
})

app.post(
  "/api/events/:id/rsvp",
  formLimiter,
  [body("email").isEmail().normalizeEmail(), body("name").trim().isLength({ min: 1, max: 100 })],
  async (req, res) => {
    try {
      const errors = validationResult(req)
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
      }

      const { email, name } = req.body
      const eventId = req.params.id

      // Check if event exists
      const event = await db.collection("events").findOne({ _id: eventId })
      if (!event) {
        return res.status(404).json({ error: "Event not found" })
      }

      // Check for existing RSVP
      const existing = await db.collection("rsvps").findOne({ eventId, email })
      if (existing) {
        return res.status(409).json({ error: "Already registered for this event" })
      }

      await db.collection("rsvps").insertOne({
        eventId,
        email,
        name,
        status: "confirmed",
        rsvpedAt: new Date(),
      })

      res.json({ message: "RSVP confirmed!" })
    } catch (error) {
      console.error("RSVP error:", error)
      res.status(500).json({ error: "Failed to RSVP" })
    }
  },
)

// Search API
app.get("/api/search", async (req, res) => {
  try {
    const { q, type = "all" } = req.query

    if (!q || q.trim().length < 2) {
      return res.status(400).json({ error: "Search query too short" })
    }

    const searchRegex = new RegExp(q, "i")
    const results = {}

    if (type === "all" || type === "posts") {
      results.posts = await db
        .collection("posts")
        .find({
          status: "published",
          $or: [{ title: searchRegex }, { content: searchRegex }, { tags: { $in: [searchRegex] } }],
        })
        .limit(10)
        .toArray()
    }

    if (type === "all" || type === "events") {
      results.events = await db
        .collection("events")
        .find({
          $or: [{ title: searchRegex }, { description: searchRegex }],
        })
        .limit(5)
        .toArray()
    }

    res.json(results)
  } catch (error) {
    console.error("Search error:", error)
    res.status(500).json({ error: "Search failed" })
  }
})

// ISR revalidation webhook
app.post(
  "/hooks/revalidate",
  [body("paths").isArray(), body("secret").equals(process.env.REVALIDATE_SECRET)],
  async (req, res) => {
    try {
      const errors = validationResult(req)
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
      }

      // This would trigger revalidation on your Next.js frontend
      // Implementation depends on your frontend setup
      res.json({ message: "Revalidation triggered", paths: req.body.paths })
    } catch (error) {
      console.error("Revalidation error:", error)
      res.status(500).json({ error: "Revalidation failed" })
    }
  },
)

// Error handling middleware
app.use((error, req, res, next) => {
  console.error("Server error:", error)
  res.status(500).json({ error: "Internal server error" })
})

// 404 handler
app.use("*", (req, res) => {
  res.status(404).json({ error: "Endpoint not found" })
})

app.listen(PORT, () => {
  console.log(`Angel Kellogg API server running on port ${PORT}`)
})

module.exports = app
