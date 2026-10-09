# Content Data Map

Last updated: 2025-07-12
Branch: developing

This document maps every data structure in the codebase so you can edit content without re-reading files.

## Master File: `lib/content.ts`

Single source of truth for: nav, footer, homepage, products, services, industries, methodology, client logos.

### Exported Constants

| Name | Type | Used in |
|------|------|---------|
| `services` | `Service[]` (6 items) | `services/[slug]/page.tsx`, `Card` components |
| `industries` | `Industry[]` (8 items) | `industries/[slug]/page.tsx` (generateStaticParams) |
| `products` | `Product[]` (4 items) | `products/[slug]/page.tsx` |
| `methodology` | `string[]` (4 items) | Homepage |
| `clientLogos` | `ClientLogo[]` (10 items) | Homepage (logo grid) |

### `Service` Shape

```ts
{
  slug: string              // URL: /services/<slug>
  name: string              // Display name
  kicker: string            // UPPERCASE tag above title
  title: string             // H1
  intro: string             // Subtitle/description
  features: string[]        // Bullet list (6 items typical)
  stack: string[]           // Tech stack list (6 items typical)
}
```

**Slugs**: engineering, ai-automation, cloud-devops, integrations, analytics, advisory

### `Industry` Shape

```ts
{
  name: string              // Display name
  slug: string              // URL: /industries/<slug>
  brief: string             // One-line description
}
```

**Slugs**: saas, fintech, healthcare, ecommerce, edtech, inventory, logistics, lawtech

**Industry pages also draw from `app/industries/industryData.ts`** for two extra sections (Operating Capabilities, Disciplines Applied).

### `Product` Shape

```ts
{
  slug: string              // URL: /products/<slug>
  name: string              // Product name
  category: string          // UPPERCASE category tag
  headline: string          // Main headline
  description: string       // Long description
  metrics: [string, string][]  // 2 metrics: [label, value]
  benefits: string[]        // Benefit list (6-7 items)
  tech: string[]            // Tech list (6 items)
}
```

**Slugs**: lawx, ai-proctx, ocr-engine, ddfs

### `ClientLogo` Shape

```ts
// Either `src` (single image) OR `lightSrc`+`darkSrc` (theme-aware)
{
  name: string              // Alt text
  src?: string              // Single image path (e.g., /clients/x.png)
  lightSrc?: string         // Light theme image
  darkSrc?: string          // Dark theme image
  className: string         // Custom sizing class
  width: number             // Image width (px)
  height: number            // Image height (px)
}
```

All client logos are stored in `public/clients/`.

### `methodology` Shape

```ts
[
  "Workflow & Friction Audit",
  "System Design & Plan",
  "Bi-Weekly Staging Demos",
  "Launch & 100% Handover"
]
```

Order matters — these are displayed sequentially.

---

## Master File: `app/industries/industryData.ts`

Deep content for industry pages. Two sections per industry.

### `IndustryPageContent` Shape

```ts
{
  slug: string              // Must match slug in lib/content.ts
  operatingCapabilities: {
    kicker: string          // UPPERCASE tag
    title: string           // H2
    intro: string           // Section intro
    items: [                // Array of capabilities
      {
        title: string,
        desc: string
      }
    ]
  }
  disciplinesApplied: {
    kicker: string
    title: string
    intro: string
    items: [                // Array of discipline mappings
      {
        kicker: string,     // Service name (e.g., "Engineering")
        title: string,      // What we do for this industry
        intro: string,      // 1-2 sentence intro
        features: string[]  // Bullet list
      }
    ]
  }
}
```

### Adding a New Industry

1. **Add to `app/industries/industryData.ts`**:
   ```ts
   mynewindustry: {
     slug: "mynewindustry",
     operatingCapabilities: { kicker, title, intro, items: [...] },
     disciplinesApplied: { kicker, title, intro, items: [...] }
   }
   ```

2. **Add to `lib/content.ts` `industries` array**:
   ```ts
   { name: "My New Industry", slug: "mynewindustry", brief: "..." }
   ```

3. **Build** — `generateStaticParams` auto-generates the page.

### Currently Configured

✅ SaaS, FinTech, Healthcare — full content in `industryData.ts`
🟡 E-commerce, EdTech, Inventory Mgt., Logistics & Fleet, Law Chambers Mgt. — only basic entry, no industryData entry yet

---

## Homepage Sections (Defined in `app/page.tsx`)

The homepage composes content from `lib/content.ts` plus inline JSX. To add a homepage section, edit `app/page.tsx` directly.

Common components used: `HeroSection`, `FeatureGrid`, `CTASection`, `Testimonials`, `CaseStudies`, `Card`.
