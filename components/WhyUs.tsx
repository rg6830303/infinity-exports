"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";
import ParticleNetwork from "./ParticleNetwork";
import { reasons } from "@/lib/site";
import { getIcon } from "@/lib/icons";

export default function WhyUs() {
  return (
    <section className="noise section-a relative overflow-hidden py-20 text-ink lg:py-28">
      <ParticleNetwork className="[mask-image:radial-gradient(ellipse_at_center,black,transparent_92%)]" />
      <div className="pointer-events-none absolute -left-24 top-0 h-80 w-80 animate-aurora rounded-full bg-brand-500/15 blur-3xl" />
      <div
        className="pointer-events-none absolute -right-24 bottom-0 h-80 w-80 animate-aurora rounded-full bg-brand-400/15 blur-3xl"
        style={{ animationDelay: "-6s" }}
      />

      <div className="container-x relative">
        <SectionHeader
          index="09"
          kicker="Why Infinity Exports"
          title="Built on transparency and trust"
          highlight={["trust"]}
          description="We build dependable, long-term buyer relationships through a clear workflow and honest communication — requirement after requirement."
        />

        <div className="mt-14 grid overflow-hidden rounded-3xl border border-ink/10 bg-white shadow-soft sm:grid-cols-2 sm:divide-x sm:divide-y sm:divide-ink/10 lg:grid-cols-4 lg:divide-y-0">
          {reasons.map((r, i) => {
            const Icon = getIcon(r.icon);
            return (
              <Reveal key={r.title} delay={i * 0.08}>
                <div className="group relative h-full p-8">
                  <span className="absolute inset-x-8 top-0 h-px origin-left scale-x-0 bg-gradient-to-r from-brand-400 to-transparent transition-transform duration-300 group-hover:scale-x-100" />
                  <div className="flex items-center gap-3">
                    <Icon
                      className="h-7 w-7 text-brand-600 transition-transform duration-300 group-hover:-translate-y-0.5"
                      strokeWidth={1.5}
                    />
                    <span className="font-mono text-xs text-slate-400">
                      0{i + 1}
                    </span>
                  </div>
                  <h3 className="mt-6 font-display text-lg font-bold text-ink">
                    {r.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    {r.desc}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.1}>
          <div className="mt-8 flex flex-col items-center justify-between gap-5 rounded-3xl border border-ink/10 bg-gradient-to-r from-brand-100 via-brand-50 to-transparent px-7 py-7 sm:flex-row">
            <div>
              <p className="font-display text-xl font-bold text-ink">
                Ready to source from India with confidence?
              </p>
              <p className="mt-1 text-sm text-slate-600">
                Submit your requirement — we&apos;ll review it and come back with
                a clear plan.
              </p>
            </div>
            <motion.div whileHover={{ x: 4 }}>
              <Link
                href="/requirement"
                className="inline-flex shrink-0 items-center gap-2 rounded-full bg-brand-600 px-6 py-3 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5 hover:bg-brand-500"
              >
                Submit a requirement <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
