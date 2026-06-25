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

This repository is ready to deploy on [Vercel](https://vercel.com):

1. Push the repo to GitHub (already configured).
2. In Vercel, **Add New → Project** and import this repository.
3. Vercel auto-detects **Next.js** — no extra configuration needed.
   - Framework Preset: `Next.js`
   - Build Command: `next build`
   - Output: handled automatically
4. Click **Deploy**.

No environment variables are required.

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
