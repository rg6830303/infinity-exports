"use client";

import { motion } from "framer-motion";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";
import Grid3D from "./Grid3D";
import Aurora from "./Aurora";
import { steps } from "@/lib/site";

export default function Process() {
  return (
    <section id="process" className="section-b relative overflow-hidden py-20 lg:py-28">
      <Aurora className="opacity-40" />
      <Grid3D className="opacity-60" />
      <div className="container-x relative">
        <SectionHeader
          index="06"
          kicker="How it works"
          title="A simple, transparent 4-step process"
          highlight={["4-step", "process"]}
        />

        <div className="relative mt-16">
          {/* Connecting line */}
          <div className="absolute left-0 right-0 top-7 hidden h-px bg-gradient-to-r from-transparent via-brand-500/50 to-transparent lg:block" />

          <div className="grid gap-10 lg:grid-cols-4">
            {steps.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.12}>
                <div className="relative text-center lg:text-left">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="relative z-10 mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-brand-500 to-brand-700 font-display text-xl font-bold text-white shadow-glow ring-4 ring-[#0a1030] lg:mx-0"
                  >
                    {i + 1}
                  </motion.div>
                  <h3 className="mt-5 font-display text-lg font-bold text-white">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/60">
                    {s.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
