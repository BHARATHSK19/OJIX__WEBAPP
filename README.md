# OJIX Studio Website

Responsive Next.js App Router site for OJIX. Services, sectors, and products are maintained in `lib/content.ts`.

## Run locally

```bash
npm install
npm run dev
```

## Contact delivery

Copy `.env.example` to `.env.local` and configure `RESEND_API_KEY`, `CONTACT_TO_EMAIL`, and a sender address verified in Resend. To enable Cloudflare Turnstile, add both the public site key and secret key. The contact endpoint returns a clear configuration message when the email service is not configured.

## Checks

```bash
npm run build
npm run test:e2e
```

Playwright downloads Chromium on first use with `npx playwright install chromium`.
