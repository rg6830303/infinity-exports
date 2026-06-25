"use client";

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
import SectionHeader from "./SectionHeader";
import TiltCard from "./TiltCard";
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
    <section id="services" className="relative bg-white py-20 lg:py-28">
      <div className="container-x">
        <SectionHeader
          index="02"
          kicker="What we do"
          title="End-to-end trade solutions"
          highlight={["trade", "solutions"]}
          description="A complete suite of services that takes your goods from the factory floor to the global marketplace — seamlessly."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => {
            const Icon = icons[s.icon];
            const num = String(i + 1).padStart(2, "0");
            return (
              <Reveal key={s.title} delay={i * 0.06}>
                <TiltCard className="h-full">
                  <div className="relative flex h-full flex-col overflow-hidden rounded-3xl border border-ink/[0.07] bg-white p-7 shadow-soft transition-shadow duration-300 hover:shadow-card">
                    <div className="flex items-start justify-between">
                      <div
                        className="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-brand-600 to-brand-800 text-white shadow-glow"
                        style={{ transform: "translateZ(40px)" }}
                      >
                        <Icon className="h-6 w-6" strokeWidth={1.7} />
                      </div>
                      <span className="font-mono text-xs text-ink/25">{num}</span>
                    </div>
                    <h3
                      className="mt-6 font-display text-lg font-bold text-ink"
                      style={{ transform: "translateZ(25px)" }}
                    >
                      {s.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                      {s.desc}
                    </p>
                    <div className="mt-5 h-px w-full bg-gradient-to-r from-brand-500/30 to-transparent" />
                  </div>
                </TiltCard>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
