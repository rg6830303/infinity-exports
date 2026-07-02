"use client";

import Link from "next/link";
import { ArrowRight, FileText, Scale, ShieldCheck, type LucideIcon } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";
import Grid3D from "./Grid3D";
import ProcessTimeline from "./ProcessTimeline";
import { exportEssentials } from "@/lib/site";

const essentialIcons: LucideIcon[] = [FileText, Scale, ShieldCheck];

export default function Process() {
  return (
    <section
      id="process"
      className="section-b relative overflow-hidden py-20 lg:py-28"
    >
      <Grid3D className="opacity-50" />
      <div className="pointer-events-none absolute right-1/4 top-10 h-72 w-72 rounded-full bg-brand-600/10 blur-3xl" />
      <div className="container-x relative">
        <SectionHeader
          index="04"
          kicker="How it works"
          title="A transparent, buyer-first process"
          highlight={["buyer-first", "process"]}
          description="Tap any step to see what it means, what you provide and what we handle. Nothing jumps you to a form — only the clear CTAs do."
        />

        <div className="mt-14">
          <ProcessTimeline />
        </div>

        <Reveal delay={0.1}>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/process"
              data-testid="home-view-full-process"
              className="btn-ghost"
            >
              View Full Process <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/export-process"
              data-testid="home-process-to-export"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600 hover:underline"
            >
              See the full 11-step export workflow
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </Reveal>

        {/* Export essentials — merged from the former "Export Process" tab */}
        <div className="relative mx-auto mt-20 max-w-5xl">
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
