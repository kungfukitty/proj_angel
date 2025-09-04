# Angel Kellogg Website - Backend Deployment Guide

## Render Deployment

### Prerequisites
1. MongoDB Atlas account (or Render PostgreSQL if switching databases)
2. Gmail account with App Password for email functionality
3. Domain name configured (optional)

### Environment Variables Required

Set these in your Render dashboard:

\`\`\`
NODE_ENV=production
PORT=10000
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/angel_kellogg
JWT_SECRET=generate-a-secure-random-string
EMAIL_USER=your-gmail@gmail.com
EMAIL_PASS=your-gmail-app-password
EMAIL_FROM=Angel Kellogg <noreply@angelkellogg.com>
CONTACT_EMAIL=hello@angelkellogg.com
PARTNERSHIPS_EMAIL=partnerships@angelkellogg.com
REVALIDATE_SECRET=another-secure-random-string
FRONTEND_URL=https://your-vercel-app.vercel.app
\`\`\`

### Deployment Steps

1. **Create Render Web Service**
   - Connect your GitHub repository
   - Set build command: `npm install`
   - Set start command: `npm run server`
   - Set environment to Node.js
   - Add all environment variables

2. **Database Setup**
   - Create MongoDB Atlas cluster
   - Whitelist Render IP addresses
   - Create database user with read/write permissions
   - Get connection string and add to MONGODB_URI

3. **Email Configuration**
   - Enable 2FA on Gmail account
   - Generate App Password for nodemailer
   - Add credentials to environment variables

4. **Frontend Integration**
   - Update your Next.js app to point API calls to Render URL
   - Add Render backend URL to CORS origins
   - Set up revalidation webhooks if using ISR

### API Endpoints

Your backend will be available at: `https://your-app-name.onrender.com`

**Public Endpoints:**
- `POST /api/subscribe` - Newsletter subscription
- `POST /api/waitlist` - Waitlist signup
- `POST /api/contact` - Contact form
- `POST /api/partners/intake` - Partnership applications
- `GET /api/posts` - Blog posts
- `GET /api/posts/:slug` - Single blog post
- `GET /api/events` - Events list
- `POST /api/events/:id/rsvp` - Event RSVP
- `GET /api/search` - Search functionality

**Admin Endpoints (require authentication):**
- `POST /api/posts` - Create blog post
- `PUT /api/posts/:id` - Update blog post
- `DELETE /api/posts/:id` - Delete blog post
- `POST /api/events` - Create event
- `PUT /api/events/:id` - Update event

### Monitoring & Maintenance

- Health check available at `/health`
- Logs available in Render dashboard
- Set up monitoring alerts for downtime
- Regular database backups recommended

### Security Features

- Rate limiting on all endpoints
- Helmet.js for security headers
- CORS protection
- Input validation with express-validator
- JWT authentication for admin routes
- Password hashing with bcryptjs
