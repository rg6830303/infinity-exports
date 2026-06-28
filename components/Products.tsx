"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Wheat,
  Shirt,
  Palette,
  Cog,
  Briefcase,
  FlaskConical,
  ArrowUpRight,
  type LucideIcon,
} from "lucide-react";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";
import RadarSweep from "./RadarSweep";
import { products } from "@/lib/site";

const icons: Record<string, LucideIcon> = {
  Wheat,
  Shirt,
  Palette,
  Cog,
  Briefcase,
  FlaskConical,
};

export default function Products() {
  return (
    <section
      id="products"
      className="section-a relative overflow-hidden py-20 lg:py-28"
    >
      <RadarSweep className="opacity-50" />
      <div className="pointer-events-none absolute inset-0 bg-dot-light [background-size:26px_26px] opacity-[0.7] [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />
      <div className="container-x relative">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <SectionHeader
            index="03"
            kicker="Trade portfolio"
            title="Products we import & export"
            highlight={["import", "&", "export"]}
            align="left"
          />
          <Reveal delay={0.1}>
            <p className="max-w-sm text-sm text-slate-500">
              From farm produce to industrial components — we trade a diverse
              range of quality-assured goods across borders.
            </p>
          </Reveal>
        </div>

        {/* Staggered watermark tiles */}
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:[&>*:nth-child(3n+2)]:mt-10">
          {products.map((p, i) => {
            const Icon = icons[p.icon];
            const code = `IE-${String(i + 1).padStart(2, "0")}`;
            return (
              <Reveal key={p.name} delay={i * 0.06}>
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ type: "spring", stiffness: 300, damping: 22 }}
                  className="h-full"
                >
                <Link
                  href={`/products/${p.slug}`}
                  className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-ink/10 bg-white p-7 shadow-soft transition-all duration-300 hover:border-brand-400/50 hover:shadow-card"
                >
                  {/* large watermark icon bleeding off the corner */}
                  <Icon
                    className="pointer-events-none absolute -bottom-6 -right-4 h-36 w-36 text-ink/[0.05] transition-all duration-500 group-hover:scale-110 group-hover:text-brand-500/15"
                    strokeWidth={1}
                  />
                  {/* top gradient hairline */}
                  <span className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-400/50 to-transparent" />

                  <div className="relative">
                    <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-brand-600/80">
                      {code}
                    </span>
                    <h3 className="mt-5 font-display text-xl font-bold text-ink">
                      {p.name}
                    </h3>
                    <p className="mt-2 max-w-[18rem] text-sm leading-relaxed text-slate-500">
                      {p.desc}
                    </p>
                  </div>
                  <span className="relative mt-6 inline-flex items-center gap-1 text-xs font-semibold text-brand-600">
                    View details
                    <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </span>
                </Link>
                </motion.div>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.15}>
          <div className="mt-12 flex flex-col items-center justify-between gap-4 rounded-2xl border border-ink/10 bg-brand-50/60 px-6 py-5 text-center sm:flex-row sm:text-left">
            <p className="text-sm text-slate-600">
              Looking for a product not listed here? Chances are, we can source
              it for you.
            </p>
            <Link
              href="/quote"
              className="inline-flex shrink-0 items-center gap-2 rounded-full bg-brand-600 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-500"
            >
              Tell us what you need
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
