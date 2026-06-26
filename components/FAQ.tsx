"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";
import FlowLines from "./FlowLines";
import { faqs } from "@/lib/site";

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="section-a relative overflow-hidden py-20 lg:py-28">
      <FlowLines className="opacity-40 [mask-image:radial-gradient(ellipse_at_center,black,transparent_82%)]" />
      <div className="pointer-events-none absolute right-0 top-1/4 h-72 w-72 rounded-full bg-brand-600/10 blur-3xl" />
      <div className="container-x relative">
        <SectionHeader
          index="07"
          kicker="Answers"
          title="Frequently asked questions"
          highlight={["questions"]}
          description="The practical details buyers and suppliers ask us most. Don't see yours? Just reach out."
        />

        <div className="mx-auto mt-14 max-w-3xl divide-y divide-ink/10 overflow-hidden rounded-3xl border border-ink/10 bg-white shadow-soft">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={f.q} delay={i * 0.04}>
                <div>
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition-colors hover:bg-brand-50/50"
                  >
                    <span className="flex items-start gap-4">
                      <span className="mt-0.5 font-mono text-xs text-brand-600/80">
                        0{i + 1}
                      </span>
                      <span className="font-display text-base font-semibold text-ink sm:text-lg">
                        {f.q}
                      </span>
                    </span>
                    <motion.span
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={{ duration: 0.2 }}
                      className={`grid h-8 w-8 shrink-0 place-items-center rounded-full border transition-colors ${
                        isOpen
                          ? "border-brand-500 bg-brand-100 text-brand-700"
                          : "border-ink/15 text-slate-500"
                      }`}
                    >
                      <Plus className="h-4 w-4" />
                    </motion.span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="px-6 pb-6 pl-16 text-sm leading-relaxed text-slate-600">
                          {f.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
