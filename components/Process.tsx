"use client";

import { motion } from "framer-motion";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";
import Grid3D from "./Grid3D";
import { steps } from "@/lib/site";

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
                  <div
                    className={`relative flex items-start gap-6 sm:w-1/2 ${
                      left
                        ? "sm:mr-auto sm:flex-row-reverse sm:pr-12 sm:text-right"
                        : "sm:ml-auto sm:pl-12"
                    } ${i > 0 ? "sm:-mt-10" : ""}`}
                  >
                    {/* node */}
                    <div className="relative z-10 flex flex-col items-center">
                      <motion.div
                        whileHover={{ scale: 1.12 }}
                        className="grid h-[3.1rem] w-[3.1rem] shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-brand-500 to-brand-700 font-display text-lg font-bold text-white shadow-glow ring-4 ring-[#0a1030]"
                      >
                        {String(i + 1).padStart(2, "0")}
                      </motion.div>
                    </div>

                    {/* content card */}
                    <div className="flex-1 rounded-2xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur sm:flex-none sm:max-w-xs">
                      <h3 className="font-display text-lg font-bold text-white">
                        {s.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-white/60">
                        {s.desc}
                      </p>
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
