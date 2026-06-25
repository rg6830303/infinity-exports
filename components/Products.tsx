"use client";

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
import AnimatedHeading from "./AnimatedHeading";
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
      className="relative overflow-hidden bg-white py-20 lg:py-28"
    >
      <div className="pointer-events-none absolute right-0 top-1/3 -z-10 h-72 w-72 rounded-full bg-brand-300/15 blur-3xl" />
      <div className="container-x">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-xl">
            <Reveal>
              <span className="eyebrow">Trade Portfolio</span>
            </Reveal>
            <AnimatedHeading
              as="h2"
              text="Products we import & export"
              highlight={["import", "&", "export"]}
              className="mt-5 text-3xl font-bold text-ink sm:text-4xl"
            />
          </div>
          <Reveal delay={0.1}>
            <p className="max-w-sm text-sm text-ink-muted">
              From farm produce to industrial components — we trade a diverse
              range of quality-assured goods across borders.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-px overflow-hidden rounded-3xl border border-ink/[0.07] bg-ink/[0.06] sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p, i) => {
            const Icon = icons[p.icon];
            return (
              <Reveal key={p.name} delay={i * 0.05}>
                <motion.div className="group relative flex h-full flex-col bg-white p-7 transition-colors duration-300 hover:bg-brand-50/50">
                  <div className="flex items-center justify-between">
                    <div className="grid h-14 w-14 place-items-center rounded-2xl bg-brand-50 text-brand-700 ring-1 ring-brand-500/10 transition-all duration-300 group-hover:bg-brand-600 group-hover:text-white">
                      <Icon className="h-6 w-6" strokeWidth={1.6} />
                    </div>
                    <ArrowUpRight className="h-5 w-5 -translate-y-1 translate-x-1 text-ink/20 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:text-brand-600 group-hover:opacity-100" />
                  </div>
                  <h3 className="mt-6 font-display text-lg font-bold text-ink">
                    {p.name}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                    {p.desc}
                  </p>
                </motion.div>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.15}>
          <div className="mt-8 flex flex-col items-center justify-between gap-4 rounded-2xl border border-ink/[0.07] bg-brand-50/50 px-6 py-5 text-center sm:flex-row sm:text-left">
            <p className="text-sm text-ink-muted">
              Looking for a product not listed here? Chances are, we can source
              it for you.
            </p>
            <a
              href="#contact"
              className="inline-flex shrink-0 items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-700"
            >
              Tell us what you need
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
