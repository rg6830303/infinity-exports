"use client";

import { motion } from "framer-motion";
import {
  Ship,
  PackageSearch,
  FileCheck2,
  Warehouse,
  ShieldCheck,
  Headset,
  type LucideIcon,
} from "lucide-react";
import Reveal from "./Reveal";
import { services } from "@/lib/site";

const icons: Record<string, LucideIcon> = {
  Ship,
  PackageSearch,
  FileCheck2,
  Warehouse,
  ShieldCheck,
  Headset,
};

export default function Services() {
  return (
    <section id="services" className="relative bg-brand-50/40 py-20 lg:py-28">
      <div className="container-x">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <span className="eyebrow">What We Do</span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-5 font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
              End-to-end <span className="text-gradient-blue">trade solutions</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-4 text-base text-ink-muted">
              A complete suite of services that takes your goods from the factory
              floor to the global marketplace — seamlessly.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => {
            const Icon = icons[s.icon];
            return (
              <Reveal key={s.title} delay={i * 0.07}>
                <motion.div
                  whileHover={{ y: -8 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="group relative h-full overflow-hidden rounded-2xl border border-ink/[0.06] bg-white p-7 shadow-soft"
                >
                  <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-brand-100/0 transition-all duration-500 group-hover:bg-brand-100/60" />
                  <div className="relative">
                    <div className="grid h-14 w-14 place-items-center rounded-xl bg-gradient-to-br from-brand-600 to-brand-800 text-white shadow-glow transition-transform duration-300 group-hover:scale-110">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="mt-6 font-display text-lg font-bold text-ink">
                      {s.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                      {s.desc}
                    </p>
                  </div>
                </motion.div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
