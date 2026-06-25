"use client";

import { motion } from "framer-motion";
import {
  Award,
  BadgeDollarSign,
  Clock,
  LifeBuoy,
  ArrowRight,
  type LucideIcon,
} from "lucide-react";
import Reveal from "./Reveal";
import AnimatedHeading from "./AnimatedHeading";
import { reasons } from "@/lib/site";

const icons: LucideIcon[] = [Award, BadgeDollarSign, Clock, LifeBuoy];

export default function WhyUs() {
  return (
    <section className="noise section-a relative overflow-hidden py-20 text-white lg:py-28">
      <div className="pointer-events-none absolute inset-0 bg-grid-light opacity-[0.05] [background-size:54px_54px]" />
      <div className="pointer-events-none absolute -left-24 top-0 h-80 w-80 animate-aurora rounded-full bg-brand-600/30 blur-3xl" />
      <div
        className="pointer-events-none absolute -right-24 bottom-0 h-80 w-80 animate-aurora rounded-full bg-brand-500/20 blur-3xl"
        style={{ animationDelay: "-6s" }}
      />

      <div className="container-x relative">
        <div className="grid gap-4 lg:grid-cols-3 lg:gap-5">
          {/* Statement cell */}
          <Reveal className="lg:row-span-2">
            <div className="relative flex h-full flex-col justify-between overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-brand-700/40 to-white/[0.03] p-8 backdrop-blur">
              <div>
                <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-brand-200">
                  Why Infinity Exports
                </span>
                <AnimatedHeading
                  as="h2"
                  text="Built on trust, driven by results"
                  highlight={["results"]}
                  className="mt-6 text-3xl font-bold leading-tight sm:text-4xl"
                />
                <p className="mt-4 text-sm leading-relaxed text-white/65">
                  We don&apos;t just move cargo — we build long-term partnerships
                  that your business can rely on, shipment after shipment.
                </p>
              </div>

              {/* animated concentric rings */}
              <div className="relative mt-10 h-40">
                <div className="absolute bottom-0 left-0 h-40 w-40">
                  {[0, 1, 2].map((r) => (
                    <span
                      key={r}
                      className="absolute inset-0 rounded-full border border-brand-300/30"
                      style={{
                        margin: `${r * 22}px`,
                        animation: `spin-slow ${18 + r * 6}s linear infinite`,
                      }}
                    />
                  ))}
                  <span className="absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-400 shadow-[0_0_20px_4px_rgba(89,136,255,0.6)]" />
                </div>
                <a
                  href="#contact"
                  className="absolute bottom-2 right-0 inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-ink transition-transform hover:-translate-y-0.5"
                >
                  Partner with us <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </Reveal>

          {/* Reason cells */}
          {reasons.map((r, i) => {
            const Icon = icons[i];
            return (
              <Reveal key={r.title} delay={i * 0.08}>
                <motion.div
                  whileHover={{ y: -5 }}
                  className="group h-full rounded-3xl border border-white/10 bg-white/[0.04] p-7 backdrop-blur transition-colors hover:border-brand-400/40 hover:bg-white/[0.07]"
                >
                  <div className="grid h-12 w-12 place-items-center rounded-2xl bg-brand-500/20 text-brand-300 transition-colors group-hover:bg-brand-500 group-hover:text-white">
                    <Icon className="h-6 w-6" strokeWidth={1.7} />
                  </div>
                  <h3 className="mt-5 font-display text-lg font-bold">
                    {r.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/60">
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
