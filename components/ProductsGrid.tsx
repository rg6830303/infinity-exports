"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, ArrowRight, Info, Check, Package, FileText } from "lucide-react";
import Reveal from "./Reveal";
import Modal from "./Modal";
import { products, PRICING_NOTE, type Product } from "@/lib/site";
import { getIcon } from "@/lib/icons";

export default function ProductsGrid({ limit }: { limit?: number }) {
  const list = limit ? products.slice(0, limit) : products;
  const [active, setActive] = useState<Product | null>(null);

  return (
    <>
      <div
        data-testid="products-grid"
        className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:[&>*:nth-child(3n+2)]:mt-8"
      >
        {list.map((p, i) => {
          const Icon = getIcon(p.icon);
          const code = `IE-${String(i + 1).padStart(2, "0")}`;
          return (
            <Reveal key={p.slug} delay={i * 0.05}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 300, damping: 22 }}
                className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-ink/10 bg-white p-7 shadow-soft transition-colors duration-300 hover:border-brand-400/50 hover:shadow-card"
              >
                <Icon
                  className="pointer-events-none absolute -bottom-6 -right-4 h-36 w-36 text-ink/[0.05] transition-all duration-500 group-hover:scale-110 group-hover:text-brand-500/15"
                  strokeWidth={1}
                />
                <span className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-400/50 to-transparent" />

                <div className="relative z-10 flex flex-1 flex-col">
                  <div className="flex items-start justify-between">
                    <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-brand-600/80">
                      {code}
                    </span>
                    {/* Arrow opens the product info modal */}
                    <button
                      onClick={() => setActive(p)}
                      aria-label={`${p.name} — quick info`}
                      data-testid={`product-arrow-${p.slug}`}
                      className="grid h-9 w-9 place-items-center rounded-full border border-ink/10 text-ink/60 transition-colors hover:border-brand-400/50 hover:bg-brand-50 hover:text-brand-700"
                    >
                      <ArrowUpRight className="h-4 w-4" />
                    </button>
                  </div>

                  <h3 className="mt-5 font-display text-xl font-bold text-ink">
                    {p.name}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-500">
                    {p.tagline}
                  </p>

                  <div className="mt-6 flex items-center gap-4">
                    <button
                      onClick={() => setActive(p)}
                      data-testid={`product-quickinfo-${p.slug}`}
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600"
                    >
                      <Info className="h-4 w-4" /> Quick info
                    </button>
                    <Link
                      href={`/products/${p.slug}`}
                      data-testid={`product-details-${p.slug}`}
                      className="inline-flex items-center gap-1 text-sm font-semibold text-ink/70 transition-colors hover:text-brand-700"
                    >
                      View details <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            </Reveal>
          );
        })}
      </div>

      <Modal
        open={!!active}
        onClose={() => setActive(null)}
        labelledBy="product-modal-title"
        size="lg"
      >
        {active && (
          <div data-testid="product-modal" className="p-7 sm:p-8">
            <div className="flex items-center gap-3">
              <span className="grid h-11 w-11 place-items-center rounded-xl border border-brand-500/25 bg-brand-50 text-brand-600">
                {(() => {
                  const Icon = getIcon(active.icon);
                  return <Icon className="h-5 w-5" strokeWidth={1.7} />;
                })()}
              </span>
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-brand-600/80">
                  Product category
                </p>
                <h3
                  id="product-modal-title"
                  className="font-display text-xl font-bold text-ink"
                >
                  {active.name}
                </h3>
              </div>
            </div>

            <p className="mt-5 text-sm leading-relaxed text-slate-600">
              {active.overview}
            </p>

            <div className="mt-6 grid gap-5 sm:grid-cols-2">
              <ModalList icon={Package} title="Packing info" items={active.packing} />
              <ModalList
                icon={FileText}
                title="Common buyer requirements"
                items={active.specs}
              />
            </div>

            <div className="mt-6 rounded-2xl border border-brand-500/20 bg-brand-50/70 p-4">
              <p className="text-xs font-semibold uppercase tracking-wider text-brand-700">
                Container / pricing note
              </p>
              <p className="mt-1.5 text-sm leading-relaxed text-slate-600">
                {PRICING_NOTE}
              </p>
            </div>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Link
                href={`/requirement?product=${active.slug}`}
                data-testid="product-modal-quote"
                className="btn-primary w-full sm:flex-1"
              >
                Request quote for this product <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href={`/products/${active.slug}`}
                data-testid="product-modal-details"
                className="btn-ghost w-full sm:flex-1"
              >
                View full details
              </Link>
            </div>
          </div>
        )}
      </Modal>
    </>
  );
}

function ModalList({
  icon: Icon,
  title,
  items,
}: {
  icon: typeof Package;
  title: string;
  items: string[];
}) {
  return (
    <div className="rounded-2xl border border-ink/10 bg-white p-4">
      <p className="flex items-center gap-2 text-sm font-bold text-ink">
        <Icon className="h-4 w-4 text-brand-600" /> {title}
      </p>
      <ul className="mt-3 space-y-2">
        {items.map((it) => (
          <li key={it} className="flex items-start gap-2 text-sm text-slate-600">
            <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-brand-600" strokeWidth={2.5} />
            {it}
          </li>
        ))}
      </ul>
    </div>
  );
}
