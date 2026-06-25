# Infinity Exports — Corporate Website

A polished, enterprise-grade marketing website for **Infinity Exports**, a
Kolkata-based global import & export company. Built with a light (white) theme
and black + blue styling, featuring 3D graphics and motion design.

## ✨ Highlights

- **3D hero** — an interactive, auto-rotating globe with trade-route arcs and
  floating cargo crates, built with `react-three-fiber` + `drei`.
- **Motion design** — scroll-reveal animations, animated counters, a scroll
  progress bar and micro-interactions powered by `framer-motion`.
- **Sections** — Hero, trust marquee, animated stats, About, Services,
  Products, Why Us, Process, Testimonials, Contact (with working mailto form)
  and a rich Footer.
- **Responsive & accessible** — mobile-first, keyboard friendly, honours
  `prefers-reduced-motion`.
- **SEO ready** — metadata, Open Graph and semantic markup.

## 🧱 Tech Stack

| Area        | Tech                                     |
| ----------- | ---------------------------------------- |
| Framework   | Next.js 14 (App Router) + TypeScript     |
| Styling     | Tailwind CSS                             |
| Animation   | Framer Motion                            |
| 3D Graphics | Three.js via @react-three/fiber & drei   |
| Icons       | lucide-react                             |
| Fonts       | Inter + Sora (next/font)                 |

## 🚀 Getting Started

```bash
npm install
npm run dev      # http://localhost:3000
```

Build for production:

```bash
npm run build
npm run start
```

## ▲ Deploying to Vercel

You have two options — pick whichever fits your workflow.

### Option A — Native Vercel Git integration (simplest, recommended)

1. In Vercel, **Add New → Project** and import this repository.
2. Vercel auto-detects **Next.js** — no extra configuration needed.
   - Framework Preset: `Next.js`
   - Build Command: `next build`
   - Output: handled automatically
3. Click **Deploy**.

Vercel then auto-deploys **production** on every push to `main` and a
**preview** for every pull request. No secrets, no workflow file required.

### Option B — GitHub Actions → Vercel (CI-driven)

A ready-made workflow lives at
[`.github/workflows/vercel-deploy.yml`](.github/workflows/vercel-deploy.yml):

- **Pull request** → builds + a unique **Preview** deployment
- **Push to `main`** → builds + **Production** deployment
- Every run also runs `npm ci && npm run build` as a CI gate

To enable it, add three repository secrets under
**Settings → Secrets and variables → Actions**:

| Secret              | Where to get it                                                      |
| ------------------- | ------------------------------------------------------------------- |
| `VERCEL_TOKEN`      | https://vercel.com/account/tokens                                   |
| `VERCEL_ORG_ID`     | `.vercel/project.json` after running `vercel link` locally          |
| `VERCEL_PROJECT_ID` | `.vercel/project.json` after running `vercel link` locally          |

```bash
npm i -g vercel
vercel link          # creates .vercel/project.json with the two IDs
```

> If you use **Option A**, you can delete the workflow file — the native
> integration already covers preview + production deploys.

No application environment variables are required either way.

## 🗂 Project Structure

```
app/                 # App Router pages, layout, global styles
  layout.tsx
  page.tsx
  globals.css
components/           # UI sections & building blocks
  Globe3D.tsx         # 3D scene (client-only, dynamically imported)
  Hero.tsx Navbar.tsx Stats.tsx About.tsx Services.tsx ...
lib/site.ts           # Single source of truth for company content
public/images/        # Logo & business card assets
```

## ✏️ Editing Content

All company details (name, contact, services, products, testimonials) live in
[`lib/site.ts`](lib/site.ts). Update that one file to change copy across the
entire site.

---

© Infinity Exports — Kolkata, West Bengal, India.
