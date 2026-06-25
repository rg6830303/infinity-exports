"use client";

import { motion } from "framer-motion";
import Reveal from "./Reveal";
import { products } from "@/lib/site";

export default function Products() {
  return (
    <section id="products" className="relative overflow-hidden bg-white py-20 lg:py-28">
      <div className="pointer-events-none absolute right-0 top-1/3 -z-10 h-72 w-72 rounded-full bg-brand-300/20 blur-3xl" />
      <div className="container-x">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-xl">
            <Reveal>
              <span className="eyebrow">Our Trade Portfolio</span>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-5 font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
                Products we <span className="text-gradient-blue">import &amp; export</span>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <p className="max-w-sm text-sm text-ink-muted">
              From farm produce to industrial components — we trade a diverse
              range of quality-assured goods across borders.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p, i) => (
            <Reveal key={p.name} delay={i * 0.06}>
              <motion.div
                whileHover={{ y: -6, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 22 }}
                className="group relative flex h-full items-start gap-5 overflow-hidden rounded-2xl border border-ink/[0.06] bg-gradient-to-br from-white to-brand-50/40 p-6 shadow-soft"
              >
                <div className="grid h-16 w-16 shrink-0 place-items-center rounded-2xl bg-white text-3xl shadow-soft ring-1 ring-ink/5 transition-transform duration-300 group-hover:scale-110">
                  {p.emoji}
                </div>
                <div>
                  <h3 className="font-display text-lg font-bold text-ink">
                    {p.name}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                    {p.desc}
                  </p>
                </div>
                <div className="absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-brand-500 to-brand-800 transition-transform duration-300 group-hover:scale-x-100" />
              </motion.div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <div className="mt-10 rounded-2xl border border-dashed border-brand-300 bg-brand-50/50 p-6 text-center">
            <p className="text-sm text-ink-muted">
              Looking for a product not listed here?{" "}
              <a
                href="#contact"
                className="font-semibold text-brand-700 underline-offset-4 hover:underline"
              >
                Tell us what you need
              </a>{" "}
              — chances are, we can source it.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
