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
    <section id="services" className="section-b relative overflow-hidden py-20 lg:py-28">
      <div className="pointer-events-none absolute right-0 top-0 h-96 w-96 rounded-full bg-brand-600/10 blur-3xl" />
      <div className="container-x relative">
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
                  <div className="card-dark relative flex h-full flex-col overflow-hidden p-7">
                    <div className="flex items-start justify-between">
                      <div
                        className="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-brand-500 to-brand-700 text-white shadow-glow"
                        style={{ transform: "translateZ(40px)" }}
                      >
                        <Icon className="h-6 w-6" strokeWidth={1.7} />
                      </div>
                      <span className="font-mono text-xs text-white/25">{num}</span>
                    </div>
                    <h3
                      className="mt-6 font-display text-lg font-bold text-white"
                      style={{ transform: "translateZ(25px)" }}
                    >
                      {s.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-white/60">
                      {s.desc}
                    </p>
                    <div className="mt-5 h-px w-full bg-gradient-to-r from-brand-400/40 to-transparent" />
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
