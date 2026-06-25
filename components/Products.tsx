"use client";

import { motion } from "framer-motion";
import {
  Wheat,
  Shirt,
  Palette,
  Cog,
  Briefcase,
  FlaskConical,
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
      <div className="pointer-events-none absolute inset-0 bg-dot-light [background-size:26px_26px] opacity-[0.25] [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />
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
            <p className="max-w-sm text-sm text-white/55">
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
                  className="group relative h-full overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.05] to-white/[0.01] p-7 transition-colors duration-300 hover:border-brand-400/40"
                >
                  {/* large watermark icon bleeding off the corner */}
                  <Icon
                    className="pointer-events-none absolute -bottom-6 -right-4 h-36 w-36 text-white/[0.04] transition-all duration-500 group-hover:scale-110 group-hover:text-brand-500/15"
                    strokeWidth={1}
                  />
                  {/* top gradient hairline */}
                  <span className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-400/50 to-transparent" />

                  <div className="relative">
                    <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-brand-300/70">
                      {code}
                    </span>
                    <h3 className="mt-5 font-display text-xl font-bold text-white">
                      {p.name}
                    </h3>
                    <p className="mt-2 max-w-[18rem] text-sm leading-relaxed text-white/55">
                      {p.desc}
                    </p>
                  </div>
                </motion.div>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.15}>
          <div className="mt-12 flex flex-col items-center justify-between gap-4 rounded-2xl border border-white/10 bg-white/[0.04] px-6 py-5 text-center sm:flex-row sm:text-left">
            <p className="text-sm text-white/60">
              Looking for a product not listed here? Chances are, we can source
              it for you.
            </p>
            <a
              href="#contact"
              className="inline-flex shrink-0 items-center gap-2 rounded-full bg-brand-600 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-500"
            >
              Tell us what you need
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
