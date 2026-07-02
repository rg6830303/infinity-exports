"use client";

import Link from "next/link";
import { Tag } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";
import RadarSweep from "./RadarSweep";
import ProductsGrid from "./ProductsGrid";
import { PRICING_NOTE } from "@/lib/site";

export default function Products() {
  return (
    <section
      id="products"
      className="section-c relative overflow-hidden py-20 lg:py-28"
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

        <div className="mt-14">
          <ProductsGrid showCustomTile />
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
                {PRICING_NOTE}
              </p>
            </div>
            <Link
              href="/requirement"
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
