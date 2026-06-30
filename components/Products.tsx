"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";
import RadarSweep from "./RadarSweep";
import ProductsGrid from "./ProductsGrid";

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
            title="Products we source & export"
            highlight={["source", "&", "export"]}
            align="left"
          />
          <Reveal delay={0.1}>
            <p className="max-w-sm text-sm text-slate-500">
              Tap the arrow on any category for packing, specifications and a
              pricing note — or open the full product page.
            </p>
          </Reveal>
        </div>

        <div className="mt-14">
          <ProductsGrid />
        </div>

        <Reveal delay={0.15}>
          <div className="mt-12 flex flex-col items-center justify-between gap-4 rounded-2xl border border-ink/10 bg-brand-50/60 px-6 py-5 text-center sm:flex-row sm:text-left">
            <p className="text-sm text-slate-600">
              Looking for a product not listed here? There's a good chance we can
              source it from India for you.
            </p>
            <div className="flex shrink-0 gap-3">
              <Link
                href="/products"
                className="inline-flex items-center gap-1.5 rounded-full border border-ink/10 bg-white px-5 py-2.5 text-sm font-semibold text-ink transition-colors hover:border-brand-400/50 hover:text-brand-700"
              >
                All products
              </Link>
              <Link
                href="/requirement"
                data-testid="home-products-requirement"
                className="inline-flex items-center gap-2 rounded-full bg-brand-600 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-500"
              >
                Submit a requirement
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
