# OJIX API Reference

This document covers all server-side code in the project. Currently the only API surface is `POST /api/contact`.

---

## `POST /api/contact`

**File:** [`app/api/contact/route.ts`](app/api/contact/route.ts)

Receives contact form submissions from the website, validates them, verifies the Cloudflare Turnstile token, persists the message to MySQL via Prisma, and sends an email notification via Resend.

### Request

- **Method:** `POST`
- **Content-Type:** `application/json`
- **Body Schema (Zod):**

```ts
{
  name: string            // 2–120 chars, trimmed
  email: string           // valid email, max 254 chars
  company?: string        // max 160 chars
  interest: string        // 1–100 chars (project area)
  message: string         // 20–5000 chars, trimmed
  turnstileToken?: string // required if TURNSTILE_SECRET_KEY is set
}
```

### Response

| Status | Body | Trigger |
|---|---|---|
| `200` | `{ ok: true }` | Submission persisted + email sent |
| `400` | `{ error: "Check the form fields and try again." }` | Zod validation failed |
| `400` | `{ error: "Please complete the spam protection check." }` | Turnstile token missing |
| `400` | `{ error: "Spam protection could not verify your request. Please try again." }` | Turnstile verification failed |
| `400` | `{ error: "Unable to process your request right now." }` | Other exceptions |
| `502` | `{ error: "We couldn't send your note right now. Please try WhatsApp or email." }` | Resend API failed |
| `503` | `{ error: "Project enquiries are not configured yet. Please contact us by WhatsApp or email." }` | RESEND_API_KEY or CONTACT_TO_EMAIL missing |

### Flow

1. **Validate body** with Zod schema
2. **Turnstile check** (if `TURNSTILE_SECRET_KEY` is set):
   - Skip if no token
   - POST `https://challenges.cloudflare.com/turnstile/v0/siteverify` with `{ secret, response: token }`
   - Reject if `success: false`
3. **Persist** to DB via `prisma.contactMessage.create()` (table: `ContactMessage`)
4. **Send email** via `POST https://api.resend.com/emails`:
   - `from`: `CONTACT_FROM_EMAIL` or fallback `OJIX Website <onboarding@resend.dev>`
   - `to`: `CONTACT_TO_EMAIL`
   - `reply_to`: submitter's email
   - `subject`: `New OJIX project enquiry: {interest}`
   - `text`: Name, Email, Company, Project, message
5. Return `{ ok: true }`

### Database Schema

Model: `ContactMessage` ([`prisma/schema.prisma`](prisma/schema.prisma))

| Field | Type | Notes |
|---|---|---|
| `id` | Int | auto-increment PK |
| `name` | String | required |
| `email` | String | required |
| `company` | String? | optional |
| `interest` | String | required |
| `message` | String | @db.Text — supports long content |
| `createdAt` | DateTime | @default(now()) |

### Environment Variables Required

| Variable | Used For |
|---|---|
| `DATABASE_URL` | Prisma MySQL connection |
| `TURNSTILE_SECRET_KEY` | Server-side Turnstile verification (optional — if unset, check is skipped) |
| `RESEND_API_KEY` | Auth header for Resend API |
| `CONTACT_TO_EMAIL` | Destination email |
| `CONTACT_FROM_EMAIL` | Sender email (must be verified in Resend) |

---

## Adding New Routes

Next.js 16 App Router patterns used in this project:

- **Server-only logic** — Add to `app/api/<path>/route.ts`. Import with `"server-only"` to prevent client bundling.
- **Dynamic page params** — `params` is always a `Promise<{ slug: string }>` — `await params` required.
- **Static generation** — Export `generateStaticParams()` from a dynamic page to pre-render all slugs at build time (used in `app/services/[slug]/page.tsx`, `app/products/[slug]/page.tsx`, `app/industries/[slug]/page.tsx`).
- **Reuse the Prisma client** — Always `import { prisma } from "@/lib/prisma"`. Never instantiate `new PrismaClient()` directly.
