# OJIX Studio Website

Responsive Next.js App Router site for OJIX. Services, sectors, and products are maintained in `lib/content.ts`.

## Developer docs

- **[DOCUMENTATION.md](DOCUMENTATION.md)** — Architecture overview, stack, conventions
- **[CONTENT_DATA.md](CONTENT_DATA.md)** — Full data shape reference for all content structures
- **[FILE_TREE.md](FILE_TREE.md)** — Routing map, component directory, data flow

## Run locally

```bash
npm install
npm run dev
```

## Prerequisite: Prisma generate

```bash
npx prisma generate
```

## Build

```bash
npm run build
```
