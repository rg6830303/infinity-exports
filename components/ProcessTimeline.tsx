"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Check, Download, FileText, UserRound } from "lucide-react";
import Reveal from "./Reveal";
import Modal from "./Modal";
import { processSteps, type ProcessStep } from "@/lib/site";

export default function ProcessTimeline() {
  const [active, setActive] = useState<ProcessStep | null>(null);

  return (
    <>
      <div data-testid="process-timeline" className="relative mx-auto max-w-3xl">
        <div className="absolute left-[1.45rem] top-3 bottom-3 w-px bg-gradient-to-b from-brand-400/70 via-brand-500/30 to-transparent" />

        <div className="space-y-4">
          {processSteps.map((s, i) => (
            <Reveal key={s.slug} delay={i * 0.05}>
              <button
                onClick={() => setActive(s)}
                data-testid={`process-step-${s.slug}`}
                className="group relative flex w-full items-start gap-5 text-left"
              >
                <span className="relative z-10 grid h-[2.9rem] w-[2.9rem] shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-brand-500 to-brand-700 font-display text-base font-bold text-white shadow-glow ring-4 ring-white transition-transform duration-300 group-hover:scale-105">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="flex-1 rounded-2xl border border-ink/10 bg-white p-5 shadow-soft transition-colors duration-300 group-hover:border-brand-400/50 group-hover:bg-brand-50/40">
                  <span className="flex items-center justify-between gap-3">
                    <span className="font-display text-base font-bold text-ink sm:text-lg">
                      {s.title}
                    </span>
                    <ArrowRight className="h-4 w-4 shrink-0 text-ink/25 transition-all group-hover:translate-x-1 group-hover:text-brand-600" />
                  </span>
                  <span className="mt-1.5 block text-sm leading-relaxed text-slate-600">
                    {s.short}
                  </span>
                </span>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      <Modal
        open={!!active}
        onClose={() => setActive(null)}
        labelledBy="process-modal-title"
        size="lg"
      >
        {active && (
          <div data-testid="process-modal" className="p-7 sm:p-8">
            <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-brand-600/80">
              How we work
            </p>
            <h3
              id="process-modal-title"
              className="mt-1 font-display text-2xl font-bold text-ink"
            >
              {active.title}
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-slate-600">
              {active.meaning}
            </p>

            <div className="mt-6 grid gap-5 sm:grid-cols-2">
              <StepList
                icon={UserRound}
                title="What you provide"
                items={active.buyerProvides}
              />
              <StepList
                icon={FileText}
                title="What we handle"
                items={active.weHandle}
              />
            </div>

            <div className="mt-6 flex items-start gap-2 rounded-2xl border border-ink/10 bg-brand-50/60 p-4 text-sm text-slate-600">
              <ArrowRight className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" />
              <span>
                <span className="font-semibold text-ink">What happens next: </span>
                {active.next}
              </span>
            </div>

            <Link
              href="/requirement"
              data-testid="process-modal-cta"
              className="btn-primary mt-7 w-full"
            >
              Start your requirement <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        )}
      </Modal>
    </>
  );
}

function StepList({
  icon: Icon,
  title,
  items,
}: {
  icon: typeof Download;
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
