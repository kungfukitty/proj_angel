// Database schema definitions for MongoDB collections

const userSchema = {
  _id: "ObjectId",
  email: "string (unique)",
  name: "string",
  password: "string (hashed)",
  role: "string (guest|member|creator|partner|admin)",
  status: "string (active|inactive|pending)",
  profile: {
    bio: "string",
    avatar: "string (url)",
    social: {
      twitter: "string",
      linkedin: "string",
      instagram: "string",
    },
  },
  preferences: {
    newsletter: "boolean",
    events: "boolean",
    announcements: "boolean",
  },
  createdAt: "Date",
  updatedAt: "Date",
  lastLoginAt: "Date",
}

const subscriptionSchema = {
  _id: "ObjectId",
  email: "string (unique)",
  name: "string",
  source: "string (website|event|referral)",
  status: "string (active|unsubscribed|bounced)",
  preferences: {
    newsletter: "boolean",
    events: "boolean",
    announcements: "boolean",
  },
  subscribedAt: "Date",
  unsubscribedAt: "Date",
  tags: ["string"],
}

const postSchema = {
  _id: "ObjectId",
  title: "string",
  slug: "string (unique)",
  content: "string",
  excerpt: "string",
  status: "string (draft|published|archived)",
  tags: ["string"],
  authorId: "ObjectId",
  featuredImage: "string (url)",
  ogImage: "string (url)",
  seoTitle: "string",
  seoDescription: "string",
  publishedAt: "Date",
  createdAt: "Date",
  updatedAt: "Date",
  views: "number",
  readTime: "number (minutes)",
}

const eventSchema = {
  _id: "ObjectId",
  title: "string",
  slug: "string (unique)",
  description: "string",
  startsAt: "Date",
  endsAt: "Date",
  timezone: "string",
  venue: {
    name: "string",
    address: "string",
    city: "string",
    state: "string",
    country: "string",
    coordinates: {
      lat: "number",
      lng: "number",
    },
  },
  isVirtual: "boolean",
  virtualLink: "string",
  capacity: "number",
  isPaid: "boolean",
  price: "number",
  currency: "string",
  status: "string (draft|published|cancelled|completed)",
  tags: ["string"],
  featuredImage: "string (url)",
  createdAt: "Date",
  updatedAt: "Date",
}

const rsvpSchema = {
  _id: "ObjectId",
  eventId: "ObjectId",
  email: "string",
  name: "string",
  phone: "string",
  status: "string (confirmed|cancelled|waitlist)",
  attendeeType: "string (general|vip|speaker|staff)",
  dietaryRestrictions: "string",
  notes: "string",
  rsvpedAt: "Date",
  checkedInAt: "Date",
}

const contactMessageSchema = {
  _id: "ObjectId",
  name: "string",
  email: "string",
  subject: "string",
  message: "string",
  type: "string (general|speaking|media|partnership)",
  status: "string (new|read|replied|archived)",
  priority: "string (low|normal|high|urgent)",
  assignedTo: "ObjectId",
  tags: ["string"],
  createdAt: "Date",
  repliedAt: "Date",
  ip: "string",
  userAgent: "string",
}

const partnerIntakeSchema = {
  _id: "ObjectId",
  company: "string",
  contact: "string",
  email: "string",
  phone: "string",
  website: "string",
  interests: ["string"],
  description: "string",
  budget: "string",
  timeline: "string",
  status: "string (pending|reviewing|approved|rejected)",
  notes: "string",
  submittedAt: "Date",
  reviewedAt: "Date",
  reviewedBy: "ObjectId",
}

const waitlistSchema = {
  _id: "ObjectId",
  email: "string",
  name: "string",
  interests: ["string"],
  notes: "string",
  source: "string",
  status: "string (pending|invited|joined|declined)",
  priority: "number",
  joinedAt: "Date",
  invitedAt: "Date",
  metadata: "object",
}

module.exports = {
  userSchema,
  subscriptionSchema,
  postSchema,
  eventSchema,
  rsvpSchema,
  contactMessageSchema,
  partnerIntakeSchema,
  waitlistSchema,
}
