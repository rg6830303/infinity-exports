"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FileText, Scale, ShieldCheck, type LucideIcon } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";
import Grid3D from "./Grid3D";
import { steps, exportEssentials } from "@/lib/site";

const essentialIcons: LucideIcon[] = [FileText, Scale, ShieldCheck];

export default function Process() {
  return (
    <section id="process" className="section-b relative overflow-hidden py-20 lg:py-28">
      <Grid3D className="opacity-50" />
      <div className="pointer-events-none absolute right-1/4 top-10 h-72 w-72 rounded-full bg-brand-600/10 blur-3xl" />
      <div className="container-x relative">
        <SectionHeader
          index="06"
          kicker="How it works"
          title="A simple, transparent 4-step process"
          highlight={["4-step", "process"]}
          description="One journey from enquiry to delivery — with the export paperwork, Incoterms and compliance handled inside it, not bolted on."
        />

        {/* Vertical timeline */}
        <div className="relative mx-auto mt-16 max-w-3xl">
          {/* rail */}
          <div className="absolute left-[1.55rem] top-2 bottom-2 w-px bg-gradient-to-b from-brand-400/60 via-brand-500/30 to-transparent sm:left-1/2 sm:-translate-x-1/2" />

          <div className="space-y-10 sm:space-y-0">
            {steps.map((s, i) => {
              const left = i % 2 === 0;
              return (
                <Reveal key={s.title} delay={i * 0.1}>
                  <Link
                    href={`/process/${s.slug}`}
                    className={`group relative flex items-start gap-6 sm:w-1/2 ${
                      left
                        ? "sm:mr-auto sm:flex-row-reverse sm:pr-12 sm:text-right"
                        : "sm:ml-auto sm:pl-12"
                    } ${i > 0 ? "sm:-mt-10" : ""}`}
                  >
                    {/* node */}
                    <div className="relative z-10 flex flex-col items-center">
                      <motion.div
                        whileHover={{ scale: 1.12 }}
                        className="grid h-[3.1rem] w-[3.1rem] shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-brand-500 to-brand-700 font-display text-lg font-bold text-white shadow-glow ring-4 ring-white"
                      >
                        {String(i + 1).padStart(2, "0")}
                      </motion.div>
                    </div>

                    {/* content card */}
                    <div className="flex-1 rounded-2xl border border-ink/10 bg-white p-5 shadow-soft transition-colors duration-300 group-hover:border-brand-400/50 sm:flex-none sm:max-w-xs">
                      <h3 className="font-display text-lg font-bold text-ink">
                        {s.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-slate-600">
                        {s.desc}
                      </p>
                      <span className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-brand-600">
                        Learn more →
                      </span>
                    </div>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </div>

        {/* Export essentials — merged from the former "Export Process" tab */}
        <div className="relative mx-auto mt-16 max-w-5xl">
          <Reveal>
            <p className="text-center font-mono text-[11px] uppercase tracking-[0.28em] text-brand-600">
              Export essentials, handled inside every step
            </p>
          </Reveal>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {exportEssentials.map((e, i) => {
              const Icon = essentialIcons[i];
              return (
                <Reveal key={e.title} delay={i * 0.08}>
                  <div className="relative h-full overflow-hidden rounded-2xl border border-ink/10 bg-white p-6 shadow-soft">
                    <div
                      className="pointer-events-none absolute inset-0 bg-[url('/images/patterns/trade-pattern.svg')] bg-cover opacity-40"
                      aria-hidden
                    />
                    <div className="relative">
                      <span className="grid h-10 w-10 place-items-center rounded-xl border border-brand-500/25 bg-brand-50 text-brand-600">
                        <Icon className="h-5 w-5" strokeWidth={1.7} />
                      </span>
                      <h3 className="mt-4 font-display text-base font-bold text-ink">
                        {e.title}
                      </h3>
                      <ul className="mt-3 space-y-2">
                        {e.points.map((pt) => (
                          <li
                            key={pt}
                            className="flex gap-2 text-[13px] leading-snug text-slate-600"
                          >
                            <span className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-brand-500" />
                            {pt}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
