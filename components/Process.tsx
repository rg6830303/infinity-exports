"use client";

import { motion } from "framer-motion";
import Reveal from "./Reveal";
import AnimatedHeading from "./AnimatedHeading";
import { steps } from "@/lib/site";

export default function Process() {
  return (
    <section id="process" className="relative bg-brand-50/40 py-20 lg:py-28">
      <div className="container-x">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <span className="eyebrow">How It Works</span>
          </Reveal>
          <AnimatedHeading
            as="h2"
            text="A simple, transparent 4-step process"
            highlight={["4-step", "process"]}
            className="mt-5 text-3xl font-bold text-ink sm:text-4xl"
          />
        </div>

        <div className="relative mt-16">
          {/* Connecting line */}
          <div className="absolute left-0 right-0 top-7 hidden h-0.5 bg-gradient-to-r from-brand-200 via-brand-500 to-brand-200 lg:block" />

          <div className="grid gap-10 lg:grid-cols-4">
            {steps.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.12}>
                <div className="relative text-center lg:text-left">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="relative z-10 mx-auto grid h-14 w-14 place-items-center rounded-full bg-gradient-to-br from-brand-600 to-brand-800 font-display text-xl font-bold text-white shadow-glow lg:mx-0"
                  >
                    {i + 1}
                  </motion.div>
                  <h3 className="mt-5 font-display text-lg font-bold text-ink">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-muted">
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
