# Brik Marketing Site (brikdesigns.com)

Next.js 16 marketing site for Brik Designs, migrated from Webflow. Deployed on Netlify.

## Architecture

- **Framework:** Next.js 16, React 19, TypeScript, App Router
- **Styling:** BDS design tokens (CSS custom properties) + Tailwind CSS for utilities
- **Design System:** BDS via git submodule at `./brik-bds/` — aliased as `@bds/components` and `@bds/tokens`
- **Data:** Supabase (same project as brik-client-portal)
- **Deployment:** Netlify with ISR
- **Themes:** Light/dark only (other BDS themes reserved for template marketplace)

## Key Commands

```bash
npm run dev          # Dev server (http://localhost:3000)
npm run build        # Production build
npm run lint         # ESLint
```

## BDS Usage

Components: `import { Button } from '@bds/components/ui';`
Tokens: imported via `globals.css` → `figma-tokens.css` + `fonts.css`

Brand overrides (Brik poppy red, Poppins) are in `globals.css` `:root` block.
Dark mode overrides are in `globals.css` `:root[data-theme="dark"]` block.

**Do NOT use BDS ThemeProvider from `@bds/components/providers`.** This site uses a custom `ThemeProvider` at `src/components/providers/ThemeProvider.tsx` that only supports light/dark.

## Supabase

- **Browser client:** `src/lib/supabase/client.ts`
- **Server client:** `src/lib/supabase/server.ts` (anon key for reads)
- **Service client:** `createServiceClient()` in server.ts (service role key for lead creation)
- **Queries:** `src/lib/supabase/queries.ts` (typed marketing content queries)

Marketing tables use RLS: public read for `is_public = true`, admin write via `is_brik_admin()`.

## Page Rendering Strategy

| Route | Strategy |
|-------|----------|
| `/` (homepage) | ISR (1 hour) |
| `/services`, `/plans` | ISR (1 hour) |
| `/services/[category]/[service]` | SSG + ISR (24 hours) |
| `/customer-stories/[slug]` | SSG + ISR (24 hours) |
| `/blog/[slug]` | SSG (MDX, build-time) |
| `/get-started` | SSR (reads URL params) |
| `/contact`, `/about`, `/free-marketing-analysis` | Static |

## Lead Capture Pipeline

Marketing site captures leads via `POST /api/leads`:
1. Creates `companies` row (type: 'lead', status: 'new')
2. Creates `contacts` row (is_primary: true)
3. Brik admin sees lead in portal → qualifies → sends proposal
4. Client accepts → agreement → welcome flow → portal access

**No self-serve Stripe checkout on this site.** Sales flow is consultative.

## Netlify

- Config: `netlify.toml`
- Webflow→new URL redirects are configured there
- ISR revalidation: `POST /api/revalidate` (secret-protected, called by portal)

## File Structure

```
src/
  app/              Page routes (App Router)
  components/
    layout/         Header, Footer, ThemeToggle
    providers/      ThemeProvider (light/dark only)
    marketing/      ServiceCard, PlanCard, etc. (TODO)
    animations/     GSAP components (TODO)
  lib/
    supabase/       Client, server, queries
  content/
    blog/           MDX blog posts (TODO)
brik-bds/           Git submodule (design system)
netlify.toml        Netlify config + redirects
```
