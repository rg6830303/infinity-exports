"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Wheat,
  Shirt,
  Cog,
  FlaskConical,
  Fish,
  ArrowUpRight,
  ArrowRight,
  Info,
  Tag,
  X,
  type LucideIcon,
} from "lucide-react";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";
import RadarSweep from "./RadarSweep";
import { products } from "@/lib/site";

const icons: Record<string, LucideIcon> = {
  Wheat,
  Shirt,
  Cog,
  FlaskConical,
  Fish,
};

// Pastel tint system per product line — light, business-calm surfaces with a
// shared trade-route pattern behind each card.
const tints: Record<
  string,
  { card: string; code: string; chip: string }
> = {
  green: {
    card: "border-emerald-200/70 bg-gradient-to-br from-emerald-50 to-emerald-100/50",
    code: "text-emerald-700",
    chip: "border-emerald-300/60 bg-white/70 text-emerald-800",
  },
  blue: {
    card: "border-sky-200/70 bg-gradient-to-br from-sky-50 to-sky-100/50",
    code: "text-sky-700",
    chip: "border-sky-300/60 bg-white/70 text-sky-800",
  },
  violet: {
    card: "border-violet-200/70 bg-gradient-to-br from-violet-50 to-violet-100/50",
    code: "text-violet-700",
    chip: "border-violet-300/60 bg-white/70 text-violet-800",
  },
  orange: {
    card: "border-orange-200/70 bg-gradient-to-br from-orange-50 to-orange-100/50",
    code: "text-orange-700",
    chip: "border-orange-300/60 bg-white/70 text-orange-800",
  },
  teal: {
    card: "border-teal-200/70 bg-gradient-to-br from-teal-50 to-teal-100/50",
    code: "text-teal-700",
    chip: "border-teal-300/60 bg-white/70 text-teal-800",
  },
};

export default function Products() {
  const [quickInfo, setQuickInfo] = useState<string | null>(null);

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
            title="Our product categories"
            highlight={["product", "categories"]}
            align="left"
          />
          <Reveal delay={0.1}>
            <p className="max-w-sm text-sm text-slate-500">
              Five focused verticals, sourced from trusted manufacturers across
              India and quality-checked before every dispatch.
            </p>
          </Reveal>
        </div>

        {/* Pastel feature cards with the shared trade-route pattern */}
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p, i) => {
            const Icon = icons[p.icon];
            const tint = tints[p.tint] ?? tints.blue;
            const code = `IE-${String(i + 1).padStart(2, "0")}`;
            const cover = p.images?.[0];
            const open = quickInfo === p.slug;
            return (
              <Reveal key={p.name} delay={i * 0.06}>
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ type: "spring", stiffness: 300, damping: 22 }}
                  className="h-full"
                >
                  <div
                    className={`group relative flex h-full flex-col overflow-hidden rounded-2xl border p-6 shadow-soft transition-shadow duration-300 hover:shadow-card ${tint.card}`}
                  >
                    {/* generated light trade-route background */}
                    <div
                      className="pointer-events-none absolute inset-0 bg-[url('/images/patterns/trade-pattern.svg')] bg-cover opacity-60"
                      aria-hidden
                    />

                    <div className="relative flex items-start justify-between gap-4">
                      <div>
                        <span className={`font-mono text-[11px] uppercase tracking-[0.25em] ${tint.code}`}>
                          {code}
                        </span>
                        <h3 className="mt-3 font-display text-xl font-bold text-ink">
                          {p.name}
                        </h3>
                        <p className="mt-2 text-sm leading-relaxed text-slate-600">
                          {p.desc}
                        </p>
                      </div>
                      {cover ? (
                        <Link
                          href={`/products/${p.slug}`}
                          className="relative mt-1 block h-20 w-20 shrink-0 overflow-hidden rounded-xl ring-1 ring-ink/10 transition-transform duration-300 group-hover:scale-105"
                          aria-label={`${p.name} details`}
                        >
                          <Image
                            src={cover.src}
                            alt={cover.alt}
                            fill
                            sizes="80px"
                            className="object-cover"
                          />
                        </Link>
                      ) : Icon ? (
                        <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl border border-ink/10 bg-white/70 text-ink/70">
                          <Icon className="h-6 w-6" strokeWidth={1.6} />
                        </span>
                      ) : null}
                    </div>

                    {/* quick-info overlay */}
                    <AnimatePresence>
                      {open && (
                        <motion.div
                          initial={{ opacity: 0, y: 12 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 12 }}
                          transition={{ duration: 0.22 }}
                          className="absolute inset-0 z-10 flex flex-col rounded-2xl bg-white/95 p-6 backdrop-blur-sm"
                        >
                          <div className="flex items-center justify-between">
                            <span className={`font-mono text-[11px] uppercase tracking-[0.25em] ${tint.code}`}>
                              {code} · Quick info
                            </span>
                            <button
                              onClick={() => setQuickInfo(null)}
                              aria-label="Close quick info"
                              className="grid h-7 w-7 place-items-center rounded-full border border-ink/15 text-slate-500 hover:bg-ink/5"
                            >
                              <X className="h-3.5 w-3.5" />
                            </button>
                          </div>
                          <ul className="mt-3 space-y-1.5 overflow-y-auto text-[13px] leading-snug text-slate-700">
                            {p.items.map((it) => (
                              <li key={it} className="flex gap-2">
                                <span className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-brand-500" />
                                {it}
                              </li>
                            ))}
                          </ul>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    <div className="relative mt-auto flex items-center gap-4 pt-6">
                      <button
                        onClick={() => setQuickInfo(open ? null : p.slug)}
                        className={`inline-flex items-center gap-1.5 rounded-full border px-3.5 py-1.5 text-xs font-semibold transition-colors hover:bg-white ${tint.chip}`}
                      >
                        <Info className="h-3.5 w-3.5" /> Quick info
                      </button>
                      <Link
                        href={`/products/${p.slug}`}
                        className="inline-flex items-center gap-1 text-xs font-semibold text-ink/80 transition-colors hover:text-brand-700"
                      >
                        View details
                        <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              </Reveal>
            );
          })}

          {/* "anything else" tile completing the grid */}
          <Reveal delay={products.length * 0.06}>
            <Link
              href="/quote"
              className="group relative flex h-full min-h-[220px] flex-col justify-between overflow-hidden rounded-2xl border border-dashed border-brand-300 bg-brand-50/40 p-6 transition-colors hover:border-brand-400 hover:bg-brand-50"
            >
              <div>
                <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-brand-600">
                  IE-06 · Custom
                </span>
                <h3 className="mt-3 font-display text-xl font-bold text-ink">
                  Something else in mind?
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  Our vetted manufacturer network runs far wider than this
                  page. Send a specification and we&apos;ll source it.
                </p>
              </div>
              <span className="inline-flex items-center gap-2 text-sm font-semibold text-brand-700">
                Request custom sourcing
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          </Reveal>
        </div>

        {/* Pricing note band */}
        <Reveal delay={0.15}>
          <div className="mt-10 flex flex-col gap-4 rounded-2xl border border-ink/10 bg-white p-5 shadow-soft sm:flex-row sm:items-center">
            <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-brand-600 text-white">
              <Tag className="h-5 w-5" />
            </span>
            <div className="flex-1">
              <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.28em] text-brand-600">
                Pricing note
              </p>
              <p className="mt-1 text-sm leading-relaxed text-slate-600">
                Pricing depends on quantity, grade, packing, destination port
                and Incoterm. Submit your requirement for an itemised quote.
              </p>
            </div>
            <Link
              href="/quote"
              className="inline-flex shrink-0 items-center gap-2 rounded-full bg-brand-600 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-500"
            >
              Get an itemised quote
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
