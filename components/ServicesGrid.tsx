"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import Reveal from "./Reveal";
import { services } from "@/lib/site";
import { getIcon } from "@/lib/icons";

/**
 * End-to-end trade-solution cards. The whole card opens the service detail
 * page; only the explicit "Request Quote" button goes to the requirement form.
 */
export default function ServicesGrid({ limit }: { limit?: number }) {
  const list = limit ? services.slice(0, limit) : services;

  return (
    <div
      data-testid="services-grid"
      className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
    >
      {list.map((s, i) => {
        const Icon = getIcon(s.icon);
        const num = String(i + 1).padStart(2, "0");
        return (
          <Reveal key={s.slug} delay={i * 0.05}>
            <motion.div
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 300, damping: 22 }}
              className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-ink/10 bg-white p-7 shadow-soft transition-colors duration-300 hover:border-brand-400/50 hover:shadow-card"
            >
              {/* Full-card link to the detail page (sits behind content) */}
              <Link
                href={`/services/${s.slug}`}
                aria-label={`${s.title} — view details`}
                data-testid={`service-card-${s.slug}`}
                className="absolute inset-0 z-0"
              />
              <span className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-400/50 to-transparent" />

              <div className="pointer-events-none relative z-10 flex flex-1 flex-col">
                <div className="flex items-center justify-between">
                  <span className="grid h-12 w-12 place-items-center rounded-xl border border-brand-500/25 bg-brand-50 text-brand-600 transition-colors duration-300 group-hover:bg-brand-600 group-hover:text-white">
                    <Icon className="h-6 w-6" strokeWidth={1.7} />
                  </span>
                  <span className="font-display text-3xl font-extrabold text-ink/10 transition-colors group-hover:text-brand-500/30">
                    {num}
                  </span>
                </div>

                <h3 className="mt-6 font-display text-xl font-bold text-ink">
                  {s.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-500">
                  {s.tagline}
                </p>

                <div className="mt-6 flex items-center justify-between">
                  <span className="inline-flex items-center gap-1 text-sm font-semibold text-brand-600">
                    View details
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </span>
                  <Link
                    href={`/requirement?service=${s.slug}`}
                    data-testid={`service-quote-${s.slug}`}
                    className="pointer-events-auto relative z-20 inline-flex items-center gap-1 rounded-full border border-ink/10 bg-white px-3.5 py-1.5 text-xs font-semibold text-ink transition-colors hover:border-brand-400/50 hover:bg-brand-50 hover:text-brand-700"
                  >
                    Request Quote
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            </motion.div>
          </Reveal>
        );
      })}
    </div>
  );
}
