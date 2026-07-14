# Asheville Water Specialists — Marketing Site

Marketing website for **Asheville Water Specialists**, a locally owned water
filtration and softening company serving Western North Carolina.

Single-page-app style marketing site with client-side routing. All content is
placeholder/starter copy the owner will refine — the structure and design are in
place.

## Tech stack

- **React 19** + **TypeScript**
- **Vite 8** (dev server + build)
- **Tailwind CSS v4** (via `@tailwindcss/vite`; theme tokens defined in
  `src/index.css` under `@theme`)
- **react-router-dom 7** (client-side routing, `BrowserRouter`)
- **oxlint** for linting
- Fonts: Poppins (headings) + Inter (body), loaded from Google Fonts in
  `index.html`

## Getting started

```bash
npm install
npm run dev      # dev server at http://localhost:5173
npm run build    # typecheck (tsc -b) + production build to dist/
npm run preview  # preview the production build
npm run lint     # oxlint
```

Requires Node 20+ (developed on Node 24).

## Project structure

```
src/
  main.tsx              # entry; wraps <App/> in <BrowserRouter>
  App.tsx               # all routes (see "Routes" below)
  index.css             # Tailwind import + brand theme tokens
  data/
    site.ts             # ALL site content: business info, products, cities,
                        # resources, FAQs, stats, features, etc.
    nav.ts              # nav dropdown + footer menu structure (derived from site.ts)
  components/           # reusable UI + page sections
  pages/                # one component per route
```

**Content lives in `src/data/site.ts`** — products, service cities, resource
articles, FAQs, pricing, hero copy, etc. Editing that file updates the nav,
footer, and generated pages automatically. `src/data/nav.ts` builds the menus
from it.

## Routes

| Path | Page |
|---|---|
| `/` | Home (hero, trust bar, why-us, products teaser, comparison table, water-source tabs, features, journey, stats, service areas, CTA) |
| `/products` | All products + add-ons |
| `/products/:slug` | Product detail (11 products, `slug` from `products` in site.ts) |
| `/service-areas` | All service cities |
| `/service-areas/:slug` | City page (11 cities) |
| `/gallery` | Gallery (placeholder tiles) |
| `/about` | About / founder |
| `/resources` | Water education + FAQ + article list |
| `/resources/:slug` | Resource article (7 articles) |
| `/contact` | Contact + report form |
| `/es` | Spanish landing (stub) |
| `/privacy-policy`, `/terms-of-service`, `/warranty` | Legal (stub) |
| `*` | 404 |

Dynamic pages (`:slug`) look the item up in `site.ts`; an unknown slug renders
the 404 component.

## Brand

Defined as Tailwind theme tokens in `src/index.css` (use as `text-navy`,
`bg-specialist`, etc.):

| Token | Hex | Use |
|---|---|---|
| `navy` | `#2B3369` | Primary dark / headings |
| `specialist` | `#0F4B91` | Primary blue |
| `sky` | `#3897D2` | Accent / tints |
| `amber` | `#F2A93B` | CTAs / highlights |
| `mist` | `#F1F6FC` | Light background |
| `ink` | `#14233B` | Body text |

The official logo is stored at `public/assets/asheville-water-logo.png` and is
rendered through `src/components/Logo.tsx` in the navigation and footer.

## Known TODO / placeholders (for the next agent)

Everything below is intentionally stubbed and safe to build out:

1. **Contact form** — `src/components/ContactForm.tsx` is UI-only; `onSubmit`
   just sets local success state. Wire it to a real backend / CRM / email
   service (owner uses "HomeServiceHub" CRM; lead routing TBD).
2. **Social links** — `social` in `site.ts` has `#` placeholders for Instagram
   & LinkedIn.
3. **Stub page content** — city pages, resource articles, `/es`, and the legal
   pages (`privacy-policy`, `terms-of-service`, `warranty`) have starter copy
   only.
4. **Testimonials** — none (pre-launch, no real reviews). Deliberately omitted
   rather than faked; add a section once real Google reviews exist.
5. **EWG water-quality data** — `social.ewgTapWater` links to ewg.org generally;
   no city-specific PWS data is embedded.

## Business facts (source of truth: `src/data/site.ts`)

- Phone: (828) 903-8433 · Email: contact@ashevillewaterspecialists.com
- Service area: 35-mile radius of downtown Asheville, NC
- Pricing in `products` is the owner's real flat-rate menu.

## Deployment

Static SPA deployed on Netlify from `npm run build` (output in `dist/`). Build
and SPA fallback settings are defined in `netlify.toml`.
