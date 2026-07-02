"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, ArrowRight, Info } from "lucide-react";
import type { Product } from "@/lib/site";
import { getIcon } from "@/lib/icons";

// Pastel tint system per product line — light, business-calm surfaces with a
// shared trade-route pattern behind each card (matches the approved mock).
export const productTints: Record<
  string,
  { card: string; code: string; chip: string }
> = {
  green: {
    card: "border-emerald-200/70 bg-gradient-to-br from-emerald-50 to-emerald-100/50",
    code: "text-emerald-700",
    chip: "border-emerald-300/60 bg-white/80 text-emerald-800",
  },
  blue: {
    card: "border-sky-200/70 bg-gradient-to-br from-sky-50 to-sky-100/50",
    code: "text-sky-700",
    chip: "border-sky-300/60 bg-white/80 text-sky-800",
  },
  violet: {
    card: "border-violet-200/70 bg-gradient-to-br from-violet-50 to-violet-100/50",
    code: "text-violet-700",
    chip: "border-violet-300/60 bg-white/80 text-violet-800",
  },
  orange: {
    card: "border-orange-200/70 bg-gradient-to-br from-orange-50 to-orange-100/50",
    code: "text-orange-700",
    chip: "border-orange-300/60 bg-white/80 text-orange-800",
  },
  teal: {
    card: "border-teal-200/70 bg-gradient-to-br from-teal-50 to-teal-100/50",
    code: "text-teal-700",
    chip: "border-teal-300/60 bg-white/80 text-teal-800",
  },
};

/**
 * Mock-parity product card: pastel tinted surface, trade-route pattern,
 * corner arrow bubble, large floating product image on the right, and
 * "Quick info" / "View details" actions along the bottom.
 */
export default function ProductCard({
  product: p,
  index,
  onQuickInfo,
}: {
  product: Product;
  index: number;
  onQuickInfo: () => void;
}) {
  const Icon = getIcon(p.icon);
  const tint = productTints[p.tint] ?? productTints.blue;
  const code = `IE-${String(index + 1).padStart(2, "0")}`;
  const cover = p.images?.[0];

  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 300, damping: 22 }}
      className="h-full"
    >
      <div
        data-testid={`product-card-${p.slug}`}
        className={`group relative flex h-full min-h-[240px] flex-col overflow-hidden rounded-2xl border p-6 shadow-soft transition-shadow duration-300 hover:shadow-card ${tint.card}`}
      >
        {/* generated light trade-route background */}
        <div
          className="pointer-events-none absolute inset-0 bg-[url('/images/patterns/trade-pattern.svg')] bg-cover opacity-60"
          aria-hidden
        />

        {/* corner arrow bubble → detail page */}
        <Link
          href={`/products/${p.slug}`}
          aria-label={`${p.name} — view details`}
          data-testid={`product-arrow-${p.slug}`}
          className="absolute right-4 top-4 z-20 grid h-9 w-9 place-items-center rounded-full border border-ink/10 bg-white/90 text-ink/60 shadow-soft transition-all hover:-translate-y-0.5 hover:text-brand-700"
        >
          <ArrowUpRight className="h-4 w-4" />
        </Link>

        {/* floating product image, mock-style on the right */}
        {cover ? (
          <Link
            href={`/products/${p.slug}`}
            tabIndex={-1}
            aria-hidden
            className="absolute right-5 top-1/2 z-10 block h-28 w-28 -translate-y-[60%] rotate-3 overflow-hidden rounded-2xl shadow-card ring-1 ring-white/70 transition-all duration-500 group-hover:rotate-0 group-hover:scale-105 sm:h-32 sm:w-32"
          >
            <Image
              src={cover.src}
              alt={cover.alt}
              fill
              sizes="(max-width: 640px) 112px, 128px"
              className="object-cover"
            />
          </Link>
        ) : (
          <Icon
            className="pointer-events-none absolute -bottom-6 -right-4 h-32 w-32 text-ink/[0.06]"
            strokeWidth={1}
          />
        )}

        <div className="relative z-10 max-w-[58%] flex-1">
          <span
            className={`font-mono text-[11px] uppercase tracking-[0.25em] ${tint.code}`}
          >
            {code}
          </span>
          <h3 className="mt-3 font-display text-xl font-bold text-ink">
            {p.name}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-slate-600">
            {p.tagline}
          </p>
        </div>

        <div className="relative z-10 mt-6 flex items-center gap-4">
          <button
            onClick={onQuickInfo}
            data-testid={`product-quickinfo-${p.slug}`}
            className={`inline-flex items-center gap-1.5 rounded-full border px-3.5 py-1.5 text-xs font-semibold transition-colors hover:bg-white ${tint.chip}`}
          >
            <Info className="h-3.5 w-3.5" /> Quick info
          </button>
          <Link
            href={`/products/${p.slug}`}
            data-testid={`product-details-${p.slug}`}
            className="inline-flex items-center gap-1 text-xs font-semibold text-ink/80 transition-colors hover:text-brand-700"
          >
            View details <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
