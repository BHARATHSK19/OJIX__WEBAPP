# OJIX Web App — Project Documentation

> **Branch:** `developing` | **Framework:** Next.js 16 + React 19 + TypeScript + Tailwind CSS v4

---

## 1. Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16 (App Router) |
| UI | React 19, Tailwind CSS v4 |
| Icons | Phosphor Icons (dist/ssr) |
| Animations | Motion (Framer Motion 12), CSS transitions |
| Forms | React Hook Form + Zod v4 |
| ORM | Prisma 6 (MySQL/TiDB) |
| Email | Resend API |
| Spam Protection | Cloudflare Turnstile |
| Testing | Playwright (E2E) |
| Language | TypeScript 5.9 (strict mode) |

---

## 2. File Structure

```
OJIX__WEBAPP/
├── app/
│   ├── layout.tsx              # Root layout — <html lang="en">, SiteShell wrapper, favicon
│   ├── page.tsx                # Homepage — hero, clients, services, methods, products, industries, capabilities
│   ├── about/page.tsx          # About — origin/comparison, principles, partnership models, FAQ, CTA
│   ├── contact/page.tsx        # Contact page — left info + right ContactForm
│   ├── privacy/page.tsx        # Privacy policy (legal page)
│   ├── terms/page.tsx          # Terms of service (legal page)
│   ├── globals.css             # Tailwind import + @theme inline vars (CSS custom properties)
│   ├── reference.css           # ALL custom CSS — ~2360 lines of design system styles
│   ├── icon.svg                # Site favicon
│   ├── api/contact/route.ts    # POST /api/contact — Zod validation → Turnstile → Prisma → Resend
│   ├── services/[slug]/page.tsx # Dynamic service pages (6 services)
│   ├── products/[slug]/page.tsx # Dynamic product pages (4 products)
│   └── industries/[slug]/page.tsx # Dynamic industry pages (8 industries)
├── components/
│   ├── site-shell.tsx          # Header + MegaMenu + Footer + theme toggle + scroll reveal (CLIENT)
│   ├── contact-form.tsx        # Contact form component with validation + Turnstile (CLIENT)
│   └── showcase.tsx            # Product tabbed showcase with Motion animation
├── lib/
│   ├── content.ts              # ALL content data — services, industries, products, methodology, clientLogos
│   └── prisma.ts               # PrismaClient singleton
├── prisma/
│   └── schema.prisma           # Prisma schema — ContactMessage model (MySQL)
├── public/
│   ├── ojix-logo.svg           # Logo variants (.svg, -dark.svg, -light.svg, -white.svg, -core.svg)
│   └── clients/                # 10 client logos (with light/dark variants)
├── tests/
│   └── site.spec.ts            # 4 Playwright E2E tests
├── .env.example                # Environment variable template
├── package.json                # Dependencies & scripts
├── tsconfig.json               # TypeScript config (path alias: @/* → ./)
├── next.config.ts              # Next.js config (poweredByHeader off, allowedDevOrigins)
├── eslint.config.mjs           # ESLint config (next core-web-vitals + typescript)
├── postcss.config.mjs          # PostCSS (Tailwind v4)
└── playwright.config.ts        # Playwright config
```

---

## 3. Pages & Routes

### `/` — Homepage (`app/page.tsx`)
**Sections rendered inline (no separate components):**
1. **Hero** — Blueprint SVG animation + OJIX core logo + 4 floating chips (Clarity, Intelligence, Engineering, Outcomes)
2. **Client Marquee** — Infinite scrolling logo carousel (10 clients, duplicated for seamless loop)
3. **What We Build** (`#what-we-build`) — 6 service cards with hover-reveal capsule images
4. **Why choose OJIX** (`#how-we-work`) — 3 method cards with drop-curtain animation
5. **Products** (`#products`) — 4 product cards with icon + hover effects
6. **8 Mission-Critical Sectors** (`#work`) — Industry grid cards
7. **Delivery Methodology** (`#capabilities`) — 4 step cards (Discovery → Architecture → Feedback → Ownership)

### `/about` — About Page (`app/about/page.tsx`)
**Sections:**
1. Hero — "Built with intent. Not assembled."
2. Origin & Comparison — Traditional Agency vs OJIX Studio side-by-side + stats bar
3. Manifesto — 4 principles (Reliability, Expertise, Freedom, Momentum)
4. Engagement Models — 3 partnership model cards
5. FAQ — 6 expandable items (native `<details>`)
6. Bottom CTA Banner

### `/contact` — Contact Page (`app/contact/page.tsx`)
- Left column: proof badges + WhatsApp + email direct cards
- Right column: `<ContactForm>` component
- Full-width gradient glow background

### `/services/[slug]` — Service Detail Pages (6)
Slugs: `engineering`, `ai-automation`, `cloud-devops`, `integrations`, `analytics`, `advisory`

Each page has:
- Hero with back link, tagline, intro, CTA buttons
- The Dilemma vs Solution (problem → OJIX solution)
- What We Deliver — feature cards
- Technology Stack — tag chips
- Delivery Methodology — 4 step cards

### `/products/[slug]` — Product Detail Pages (4)
Slugs: `lawx`, `ai-proctx`, `ocr-engine`, `ddfs`

Each page has:
- Hero with metrics grid + back link
- Operational Impact (problem vs solution)
- Capabilities & Benefits — benefit cards
- Technology & Architecture — tech tag chips

### `/industries/[slug]` — Industry Pages (8)
Slugs: `saas`, `fintech`, `healthcare`, `ecommerce`, `edtech`, `inventory`, `logistics`, `lawtech`

Each page has:
- Hero with back link
- Operating Capabilities — 6 capability cards
- Disciplines Applied — 4 service cards
- Sector Case Study Showcase (hardcoded case studies for lawtech & edtech)

### `/privacy` & `/terms` — Legal Pages
Static content sections with consistent page layout.

---

## 4. Components

### `SiteShell` (`components/site-shell.tsx`) — **CLIENT COMPONENT**
The global layout wrapper. Responsibilities:
- **Header**: Fixed pill-shaped nav bar with OJIX logo (light/dark variants), nav links, theme toggle, WhatsApp button, Contact CTA, mobile hamburger
- **MegaMenu**: Hover/click-triggered dropdown panels for Services (6-tab grid), Industries (8-item list with preview pane), Products (4-item list with preview pane)
- **Footer**: CTA section + 4-column footer (Brand, Explore, Contact, Ownership)
- **Theme Toggle**: Light/Dark mode via `data-theme` attribute + localStorage
- **Scroll Reveal**: IntersectionObserver adds `.active` class to `.reveal` elements

### `ContactForm` (`components/contact-form.tsx`) — **CLIENT COMPONENT**
- React Hook Form + Zod validation
- Fields: name, email, company (optional), interest (select), message
- Cloudflare Turnstile integration (dynamic script injection)
- POSTs to `/api/contact`, shows success/error states
- Uses Phosphor icons for form decoration

### `ProductShowcase` (`components/showcase.tsx`) — **CLIENT COMPONENT**
- Tabbed showcase with Motion AnimatePresence transitions
- Mock dashboard visual + product description + metrics + benefits
- Used on homepage (implicitly via content, but component exists for reuse)

---

## 5. Content Data (`lib/content.ts`)

All content is centralized here. **Modify this file to add/edit content.**

### `services` — Array of 6 objects
Fields: `slug`, `name`, `kicker`, `title`, `intro`, `features[]`, `stack[]`

### `industries` — Array of 8 objects
Fields: `name`, `slug`, `brief`
Slugs: saas, fintech, healthcare, ecommerce, edtech, inventory, logistics, lawtech

### `products` — Array of 4 objects
Fields: `slug`, `name`, `category`, `headline`, `description`, `metrics[][]`, `benefits[]`, `tech[]`

### `methodology` — Array of 4 strings
Step names used in capability cards

### `clientLogos` — Array of 10 objects
Fields: `name`, `src` or `lightSrc`/`darkSrc`, `className`, `width`, `height`

---

## 6. Database (`prisma/schema.prisma`)

- **Provider**: MySQL (TiDB compatible)
- **Model**: `ContactMessage`
  - `id` (auto-increment PK)
  - `name` (String)
  - `email` (String)
  - `company` (String, optional)
  - `interest` (String)
  - `message` (Text)
  - `createdAt` (DateTime, auto-now)

---

## 7. Environment Variables (`.env`)

| Variable | Required | Purpose |
|---|---|---|
| `DATABASE_URL` | Yes | Prisma MySQL connection string |
| `RESEND_API_KEY` | Yes | Send contact form emails via Resend |
| `CONTACT_TO_EMAIL` | Yes | Destination email for enquiries |
| `CONTACT_FROM_EMAIL` | Yes | Sender identity (must be verified in Resend) |
| `NEXT_PUBLIC_TURNSTILE_SITE_KEY` | No | Cloudflare Turnstile public key (frontend) |
| `TURNSTILE_SECRET_KEY` | No | Cloudflare Turnstile secret key (server-side verification) |

---

## 8. Theme System

Three themes supported via `data-theme` attribute on `<html>`:
- **`light`** (default) — Cream bg `#FAF7F5`, Midnight Navy text `#0f1c2f`, Terracotta accent `#c9662f`
- **`dark`** — Obsidian `#080c14`, White text, Luminous Orange `#e07238`
- **`warm`** — Warm cream `#FAF5EE`, Navy text, Terracotta accent

CSS custom properties defined in `reference.css` under `[data-theme="..."]` selectors.

---

## 9. Key Design Patterns

### Card Design System
Four card variants sharing unified hover behavior (in `reference.css`):
- `.discipline-card` — Services (480px, capsule reveal on hover)
- `.method-card` — Method cards (530px, drop-curtain animation)
- `.product-card` — Products/capabilities (380px, dark bg on hover)
- `.capability-card` — Capability steps (290px, dark bg on hover)
- `.sector-card` — Industry cards (310px, dark bg on hover)

### Scroll Reveal
- `.reveal` — Hidden by default, `.reveal.active` triggers fade-in-up
- `.reveal.delay-{100,200,300,400}` — Staggered entrance delays
- Implemented via IntersectionObserver in `SiteShell` (runs on `pathname` change)

### Responsive Breakpoints
- Desktop: `lg:` (1024px+)
- Tablet: `md:` (768px+)
- Mobile: below 760px, 430px

---

## 10. NPM Scripts

```bash
npm run dev          # Start dev server (Next.js)
npm run build        # Production build
npm run start        # Start production server
npm run lint         # ESLint check
npm run test:e2e     # Playwright E2E tests
```

---

## 11. Known Patterns & Conventions

1. **Path alias**: `@/` maps to project root (`"paths": { "@/*": ["./*"] }` in tsconfig)
2. **SSR imports**: Icon imports use `@phosphor-icons/react/dist/ssr` for server compatibility
3. **Dynamic params**: `params` is always a `Promise` (Next.js 16 pattern) — `await params` required
4. **Image handling**: External Unsplash images use `unoptimized` + `sizes` attributes
5. **MegaMenu state**: Open/close managed via `useState` with 140ms hover debounce timer
6. **Client components**: `SiteShell`, `ContactForm`, `ProductShowcase` marked with `"use client"`
7. **No separate header/footer components** — header and footer are inline in `SiteShell`
8. **CSS-first animations**: Most animations are pure CSS (not Motion), except `ProductShowcase`
