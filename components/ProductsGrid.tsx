"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Check, Package, FileText } from "lucide-react";
import Reveal from "./Reveal";
import Modal from "./Modal";
import ProductCard from "./ProductCard";
import { products, PRICING_NOTE, type Product } from "@/lib/site";
import { getIcon } from "@/lib/icons";

export default function ProductsGrid({
  limit,
  showCustomTile = false,
}: {
  limit?: number;
  showCustomTile?: boolean;
}) {
  const list = limit ? products.slice(0, limit) : products;
  const [active, setActive] = useState<Product | null>(null);

  return (
    <>
      <div
        data-testid="products-grid"
        className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
      >
        {list.map((p, i) => (
          <Reveal key={p.slug} delay={i * 0.05}>
            <ProductCard
              product={p}
              index={i}
              onQuickInfo={() => setActive(p)}
            />
          </Reveal>
        ))}

        {showCustomTile && (
          <Reveal delay={list.length * 0.05}>
            <Link
              href="/requirement"
              className="group relative flex h-full min-h-[240px] flex-col justify-between overflow-hidden rounded-2xl border border-dashed border-brand-300 bg-brand-50/40 p-6 transition-colors hover:border-brand-400 hover:bg-brand-50"
            >
              <div
                className="pointer-events-none absolute inset-0 bg-[url('/images/patterns/trade-pattern.svg')] bg-cover opacity-40"
                aria-hidden
              />
              <div className="relative">
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
              <span className="relative inline-flex items-center gap-2 text-sm font-semibold text-brand-700">
                Request custom sourcing
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          </Reveal>
        )}
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
