"use client";

import { motion } from "framer-motion";
import { Award, BadgeDollarSign, Clock, LifeBuoy, type LucideIcon } from "lucide-react";
import Reveal from "./Reveal";
import { reasons } from "@/lib/site";

const icons: LucideIcon[] = [Award, BadgeDollarSign, Clock, LifeBuoy];

export default function WhyUs() {
  return (
    <section className="relative overflow-hidden bg-ink py-20 text-white lg:py-28">
      <div className="pointer-events-none absolute inset-0 bg-grid-light opacity-[0.05] [background-size:48px_48px]" />
      <div className="pointer-events-none absolute -left-20 top-0 h-80 w-80 rounded-full bg-brand-600/30 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-brand-500/20 blur-3xl" />

      <div className="container-x relative">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-brand-300">
              Why Infinity Exports
            </span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-5 font-display text-3xl font-bold tracking-tight sm:text-4xl">
              Built on trust, driven by{" "}
              <span className="text-brand-300">results</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-4 text-base text-white/70">
              We don&apos;t just move cargo — we build long-term partnerships that
              your business can rely on, shipment after shipment.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((r, i) => {
            const Icon = icons[i];
            return (
              <Reveal key={r.title} delay={i * 0.08}>
                <motion.div
                  whileHover={{ y: -6 }}
                  className="h-full rounded-2xl border border-white/10 bg-white/[0.04] p-7 backdrop-blur transition-colors hover:border-brand-400/40 hover:bg-white/[0.07]"
                >
                  <div className="grid h-12 w-12 place-items-center rounded-xl bg-brand-500/20 text-brand-300">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 font-display text-lg font-bold">{r.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/65">
                    {r.desc}
                  </p>
                </motion.div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
