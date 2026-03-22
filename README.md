# Perfect Home Decor — Marketing site

Public website for **Perfect Home Decor** (Pune): interior design, modular kitchen, false ceiling (POP), home painting, custom furniture, and commercial interiors. Built with the Next.js App Router, Tailwind CSS, and static generation for SEO-focused locality and service pages.

**Production:** [perfecthomedecor.in](https://perfecthomedecor.in) (set `NEXT_PUBLIC_SITE_URL` to match your deployment).

## Tech stack

- **Next.js** 16 (App Router, Turbopack in dev)
- **React** 19, **TypeScript**
- **Tailwind CSS** 4
- **Vitest** + Testing Library for unit tests
- **Nodemailer** for lead-form email (see `/api/lead`)

## Prerequisites

- Node.js 20+ (LTS recommended)
- npm (or compatible package manager)

## Setup

```bash
npm install
cp .env.example .env.local
```

Edit `.env.local` with your keys and SMTP settings. Secrets are never committed; `.env.local` stays local.

## Scripts

| Command        | Description                    |
| -------------- | ------------------------------ |
| `npm run dev`  | Dev server (default port 3000) |
| `npm run build`| Production build               |
| `npm run start`| Serve production build         |
| `npm run lint` | ESLint                         |
| `npm run test` | Vitest (single run)            |

## Environment variables

See **`.env.example`** for documented variables:

- **`NEXT_PUBLIC_SITE_URL`** — Canonical URL (metadata, OG tags, sitemap).
- **Google Places** — `GOOGLE_PLACES_API_KEY`, `GOOGLE_PLACE_ID` for live rating/review counts (server-only).
- **Maps** — Optional embed iframe or Maps Embed API key for the contact page map.
- **Email** — SMTP or Gmail app password for lead notifications (`/api/lead`).

## Project layout (high level)

| Path | Purpose |
| ---- | ------- |
| `src/app/` | Routes: home, about, contact, projects, services, blog, robots, sitemap |
| `src/app/api/lead/` | POST handler for lead form (Nodemailer) |
| `src/app/services/[slug]/` | Service detail pages + locality hub links |
| `src/app/*-in-[area]/` | Dynamic locality landings (home painting, false ceiling, modular kitchen) |
| `src/app/interior-designer-in-*/` | Static interior-designer locality pages |
| `src/components/` | UI: layout, forms, locality landings, JSON-LD |
| `src/lib/` | Site constants, copy, metadata helpers, area data |

Locality slugs are defined in `src/lib/site.ts` (`AREAS`: Kharadi, Wagholi, Viman Nagar, Lohegaon, Magarpatta, Kesnand).

## SEO and content

- **`sitemap.ts`** and **`robots.ts`** expose crawlable URLs.
- Service and locality pages include structured data (JSON-LD) where applicable.
- Lead forms tag submissions with a `source` string for analytics and routing.

## Deploy

Build output is a standard Next.js app: run `npm run build` and `npm run start`, or deploy to Vercel / any Node host. Set the same environment variables in the host’s dashboard; keep API keys and SMTP credentials server-side (no `NEXT_PUBLIC_` prefix unless they are safe for the browser).

## License

Private project; all rights reserved unless otherwise agreed.
