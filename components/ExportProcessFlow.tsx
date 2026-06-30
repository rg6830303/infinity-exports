"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Check, FileText, UserRound, Files } from "lucide-react";
import Reveal from "./Reveal";
import Modal from "./Modal";
import { exportProcess, type ExportStep } from "@/lib/site";
import { getIcon } from "@/lib/icons";

export default function ExportProcessFlow({
  variant = "full",
}: {
  variant?: "preview" | "full";
}) {
  const [active, setActive] = useState<ExportStep | null>(null);
  const compact = variant === "preview";

  return (
    <>
      <div
        data-testid={`export-process-${variant}`}
        className="relative mx-auto max-w-4xl"
      >
        {/* connector rail */}
        <div className="absolute left-[1.6rem] top-4 bottom-4 w-px bg-gradient-to-b from-brand-400/70 via-brand-500/30 to-transparent md:left-1/2 md:-translate-x-1/2" />

        <div className="space-y-3 md:space-y-0">
          {exportProcess.map((s, i) => {
            const Icon = getIcon(s.icon);
            const left = i % 2 === 0;
            return (
              <Reveal key={s.slug} delay={Math.min(i * 0.04, 0.3)}>
                <div
                  className={`relative flex items-stretch gap-4 md:w-[calc(50%+1.6rem)] ${
                    left
                      ? "md:mr-auto md:flex-row-reverse md:pr-0 md:text-right"
                      : "md:ml-auto"
                  } ${i > 0 ? "md:-mt-4" : ""}`}
                >
                  {/* badge */}
                  <div className="relative z-10 flex flex-col items-center">
                    <span className="grid h-[3.2rem] w-[3.2rem] shrink-0 place-items-center rounded-2xl border border-brand-500/20 bg-white text-brand-600 shadow-soft ring-4 ring-white">
                      <Icon className="h-5 w-5" strokeWidth={1.7} />
                      <span className="absolute -right-1.5 -top-1.5 grid h-5 w-5 place-items-center rounded-full bg-brand-600 font-mono text-[10px] font-bold text-white">
                        {s.num}
                      </span>
                    </span>
                  </div>

                  <button
                    onClick={() => setActive(s)}
                    data-testid={`export-step-${s.slug}`}
                    className={`group mb-3 flex-1 rounded-2xl border border-ink/10 bg-white p-4 text-left shadow-soft transition-colors duration-300 hover:border-brand-400/50 hover:bg-brand-50/40 sm:p-5 ${
                      left ? "md:text-right" : ""
                    }`}
                  >
                    <span
                      className={`flex items-center justify-between gap-3 ${
                        left ? "md:flex-row-reverse" : ""
                      }`}
                    >
                      <span className="font-display text-base font-bold text-ink sm:text-lg">
                        {s.title}
                      </span>
                      <span className="inline-flex items-center gap-1 text-xs font-semibold text-brand-600 opacity-0 transition-opacity group-hover:opacity-100">
                        Details
                        <ArrowRight className="h-3.5 w-3.5" />
                      </span>
                    </span>
                    {!compact && (
                      <span className="mt-1.5 block text-sm leading-relaxed text-slate-600">
                        {s.short}
                      </span>
                    )}
                  </button>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>

      <Modal
        open={!!active}
        onClose={() => setActive(null)}
        labelledBy="export-modal-title"
        size="lg"
      >
        {active && (
          <div data-testid="export-modal" className="p-7 sm:p-8">
            <div className="flex items-center gap-3">
              <span className="grid h-11 w-11 place-items-center rounded-xl border border-brand-500/25 bg-brand-50 text-brand-600">
                {(() => {
                  const Icon = getIcon(active.icon);
                  return <Icon className="h-5 w-5" strokeWidth={1.7} />;
                })()}
              </span>
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-brand-600/80">
                  Export step {String(active.num).padStart(2, "0")} / 11
                </p>
                <h3
                  id="export-modal-title"
                  className="font-display text-xl font-bold text-ink"
                >
                  {active.title}
                </h3>
              </div>
            </div>

            <p className="mt-5 text-sm leading-relaxed text-slate-600">
              {active.meaning}
            </p>

            <div className="mt-6 grid gap-5 sm:grid-cols-2">
              <ExportList
                icon={UserRound}
                title="What you provide"
                items={active.buyerProvides}
              />
              <ExportList
                icon={FileText}
                title="What we handle"
                items={active.weHandle}
              />
            </div>

            {active.docs.length > 0 && (
              <div className="mt-5 rounded-2xl border border-ink/10 bg-white p-4">
                <p className="flex items-center gap-2 text-sm font-bold text-ink">
                  <Files className="h-4 w-4 text-brand-600" /> Documents / checks
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {active.docs.map((d) => (
                    <span
                      key={d}
                      className="rounded-full border border-ink/10 bg-brand-50 px-3 py-1 text-xs font-medium text-brand-700"
                    >
                      {d}
                    </span>
                  ))}
                </div>
              </div>
            )}

            <div className="mt-6 flex items-start gap-2 rounded-2xl border border-ink/10 bg-brand-50/60 p-4 text-sm text-slate-600">
              <ArrowRight className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" />
              <span>
                <span className="font-semibold text-ink">What happens next: </span>
                {active.next}
              </span>
            </div>

            <Link
              href="/requirement"
              data-testid="export-modal-cta"
              className="btn-primary mt-7 w-full"
            >
              Start Export Inquiry <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        )}
      </Modal>
    </>
  );
}

function ExportList({
  icon: Icon,
  title,
  items,
}: {
  icon: typeof Files;
  title: string;
  items: string[];
}) {
  return (
    <div className="rounded-2xl border border-ink/10 bg-white p-4 text-left">
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
