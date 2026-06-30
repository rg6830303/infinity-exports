# Infinity Exports — PRD & Project Memory

## Original problem statement
Redesign and expand the existing Infinity Exports import/export website
(repo: rg6830303/infinity-exports, deployed on Vercel). Make it a premium,
business-grade, light-theme website — not a generic AI landing page. Preserve
brand colours, logo and the globe/map concept (visually refreshed). Add proper
click-based routes (Services, Products, Process, Export Process, Certifications,
Google Presence, Contact/Requirement). Replace the weak form with a Web3Forms
buyer pre-qualification form. Remove Ocean & Air Freight + freight-forwarding
positioning. Hide personal/founder names. Add an 11-step Export Process with
clickable step modals.

## Stack
Next.js 14 (App Router) · TypeScript · Tailwind CSS · Framer Motion ·
three / @react-three/fiber / drei · lucide-react. Root app (not /app/frontend).

## User decisions (2026-06-30)
1. Bring repo into env, redesign, owner pushes via "Save to Github" → Vercel.
2. Web3Forms: use env placeholder `NEXT_PUBLIC_WEB3FORMS_KEY` (owner adds real key).
3. Reuse existing contact details.
4. Public address (owner-approved, shown publicly):
   "PS Abacus NH12, Action Area IIE, Reckjoani, New Town, West Bengal 700161".
   General label used in places: "Kolkata, West Bengal, India". No personal names.
5. Design freedom (keep brand colours + logo + globe concept).

## Architecture
- `lib/site.ts` — single source of truth (site info, services, products, process,
  exportProcess 11 steps, certifications, googlePresence, faqs, trust, reassurance).
- `lib/icons.ts` — central lucide icon registry.
- `lib/articles.ts` — insights articles (freight-forwarder language removed).
- Reusable components: GlobeMark (motif), Modal, PageHeader, RequirementForm
  (Web3Forms), ServicesGrid, ProductsGrid (+ modal), ProcessTimeline (+ modal),
  ExportProcessFlow (preview/full + modal), CertificationsGrid, GooglePresenceContent,
  RequirementCTA, Checklist, ContactCTA, refreshed Globe3D + GlobalReach.

## Routes
/ (single-scroll), /services, /services/[slug], /products, /products/[slug],
/process, /export-process, /certifications, /google-presence, /requirement,
/contact, /about, /insights, /insights/[slug], /sitemap.xml, /robots.txt.
Redirects: /quote→/requirement, old insight slugs→new.

## Implemented (2026-06-30)
- Full premium light-theme redesign; brand blue palette + logo + globe kept.
- Refreshed Three.js globe (India origin, 7 destination regions, pulsing nodes,
  route arcs, reduced-motion + mobile aware) and SVG GlobalReach map (no freight legend).
- Navbar + Footer with secondary globe motif; all links route correctly.
- 6 services (no freight) with detail pages; 6 product categories with quick-info
  modal + detail pages; 8-step process w/ modals; 11-step export process w/ modals.
- Certifications & Licenses (no fake numbers), Google Presence section + page.
- Web3Forms buyer requirement form (validation/loading/success/error, honeypot,
  captures product/service slug, WhatsApp fallback, subject line).
- SEO: per-page metadata + OG, JSON-LD (Organization/LocalBusiness, WebSite, FAQ,
  Service, Product, HowTo). `npm run build` passes, 33 routes, no TS errors.
- Removed Ocean & Air Freight + freight-forwarding positioning; no personal names.

## Backlog / Next action items (P1/P2)
- P1: Owner to add real `NEXT_PUBLIC_WEB3FORMS_KEY` in Vercel env vars.
- P1: Owner to push via "Save to Github" to trigger Vercel redeploy.
- P2: Add verified certification numbers/logos once available.
- P2: Optional OG image generation per page; add real client logos/testimonials only if verified.
- P2: Consider a lightweight blog/insights expansion for SEO.
