# OJIX Webapp — Developer Reference

Last updated: 2025-07-12
Branch: developing

## Stack

- **Next.js 16.4** (App Router, Turbopack, TypeScript)
- **React 19**
- **Tailwind CSS v4** (via `@tailwindcss/postcss`)
- **Phosphor Icons** (`@phosphor-icons/react/dist/ssr`)
- **Motion / Framer Motion 12** (animations)
- **Prisma 6** (MySQL/TiDB, ContactMessage model)
- **Resend** (transactional email for contact form)
- **Cloudflare Turnstile** (spam protection, optional)
- **React Hook Form + Zod v4** (form state + validation)
- **Playwright** (E2E tests)
- **TypeScript 5.9** (strict mode)
- **Deploy**: Vercel

## Monorepo Layout (this folder only)

```
OJIX__WEBAPP/
├── app/                          # Next.js App Router
│   ├── layout.tsx                # Root layout — font, metadata, SiteShell
│   ├── page.tsx                  # Homepage (all sections inline JSX)
│   ├── globals.css               # Tailwind imports
│   ├── reference.css             # ~2360 lines of design-system styles
│   ├── not-found.tsx
│   ├── about/page.tsx
│   ├── contact/page.tsx
│   ├── privacy/page.tsx
│   ├── terms/page.tsx
│   ├── icon.svg
│   ├── api/contact/route.ts      # POST /api/contact (see API_DOCS.md)
│   ├── industries/               # Dynamic sector pages
│   │   ├── industryData.ts       # All sector content (3 sectors)
│   │   └── [slug]/page.tsx       # SSG for 8 sectors
│   ├── products/[slug]/page.tsx  # SSG for 4 products
│   └── services/[slug]/page.tsx  # SSG for 6 services
├── components/
│   ├── site-shell.tsx            # Header + MegaMenu + Footer + theme (CLIENT)
│   ├── contact-form.tsx          # Form + Turnstile widget (CLIENT)
│   └── showcase.tsx              # Product tabbed showcase (CLIENT, Motion)
├── lib/
│   ├── content.ts                # All content data — see CONTENT_DATA.md
│   └── prisma.ts                 # PrismaClient singleton
├── prisma/schema.prisma          # ContactMessage model
├── public/
│   ├── ojix-logo*.svg            # Logo variants
│   └── clients/                  # 10 client logos
├── tests/site.spec.ts            # 4 Playwright E2E tests
├── package.json                  # See "Scripts" below
├── tsconfig.json                 # path alias: @/* → ./
├── next.config.ts                # poweredByHeader off, allowedDevOrigins
├── eslint.config.mjs             # next core-web-vitals + typescript
├── postcss.config.mjs            # Tailwind v4
└── playwright.config.ts
```

## Pages & Routes

| Path | Source | Type |
|------|--------|------|
| `/` | `app/page.tsx` | Static, sections inline |
| `/about` | `app/about/page.tsx` | Static |
| `/contact` | `app/contact/page.tsx` | Static + ContactForm |
| `/privacy`, `/terms` | `app/{privacy,terms}/page.tsx` | Static |
| `/services/[slug]` | `app/services/[slug]/page.tsx` | SSG (6) |
| `/products/[slug]` | `app/products/[slug]/page.tsx` | SSG (4) |
| `/industries/[slug]` | `app/industries/[slug]/page.tsx` | SSG (8) |
| `/api/contact` | `app/api/contact/route.ts` | See [API_DOCS.md](API_DOCS.md) |

## Components (only 3 — rest is inline JSX)

| Component | Client/Server | Notes |
|-----------|---------------|-------|
| `site-shell.tsx` | Client | Header + MegaMenu + Footer + theme toggle + scroll reveal |
| `contact-form.tsx` | Client | React Hook Form + Zod + Turnstile |
| `showcase.tsx` | Client | Tabbed product showcase with Motion animation |

**Most page content is inline JSX** in each page file. Only the above 3 components are extracted.

## Data Files

| File | Exports | Used By |
|------|---------|---------|
| `lib/content.ts` | `services`, `industries`, `products`, `methodology`, `clientLogos` | All page files |
| `app/industries/industryData.ts` | `industryData` (3 sectors) | `app/industries/[slug]/page.tsx` |

See [CONTENT_DATA.md](CONTENT_DATA.md) for full shapes and editing guide.

## Scripts

```json
{
  "dev": "next dev",
  "build": "next build",
  "start": "next start",
  "lint": "next lint",
  "test:e2e": "playwright test",
  "postinstall": "prisma generate"
}
```

`prisma generate` runs after every `npm install`.

## Conventions

- **Dynamic params** are `Promise<{ slug: string }>` — must be `await`ed in Next 16
- **No `"use client"`** anywhere except the 3 components above
- **All pages are SSG** — no `dynamic = "force-dynamic"` anywhere
- **No `next/image`** — pages use plain `<img>` or `<Image>` from the static export pattern
- **Tailwind v4** styles are co-located in `app/globals.css` + extensive `app/reference.css`

## Environment Variables (`.env.local`)

| Variable | Required | Notes |
|----------|----------|-------|
| `DATABASE_URL` | Yes (for contact form) | Prisma MySQL/TiDB connection string |
| `RESEND_API_KEY` | For email delivery | Otherwise contact form returns 503 |
| `CONTACT_TO_EMAIL` | For email delivery | Destination inbox |
| `CONTACT_FROM_EMAIL` | For email delivery | Must be verified in Resend |
| `TURNSTILE_SECRET_KEY` | Optional | If unset, Turnstile check is skipped |
| `NEXT_PUBLIC_TURNSTILE_SITE_KEY` | Optional | Public site key for widget |

Copy `.env.example` → `.env.local` and fill in.

## Build & Run

```bash
npm install           # runs prisma generate via postinstall
npm run dev           # http://localhost:3000
npm run build         # SSG output
npm run test:e2e      # Playwright (run `npx playwright install chromium` first)
```

## See Also

- [CONTENT_DATA.md](CONTENT_DATA.md) — All content data shapes
- [API_DOCS.md](API_DOCS.md) — `/api/contact` API reference
- [PROJECT_DOCS.md](PROJECT_DOCS.md) — Earlier project notes (kept for reference)
- [README.md](README.md) — Quickstart
