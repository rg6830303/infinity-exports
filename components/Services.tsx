"use client";

import Link from "next/link";
import {
  PackageSearch,
  FileCheck2,
  Warehouse,
  ShieldCheck,
  Headset,
  ArrowUpRight,
  type LucideIcon,
} from "lucide-react";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";
import FlowLines from "./FlowLines";
import { services } from "@/lib/site";

const icons: Record<string, LucideIcon> = {
  PackageSearch,
  FileCheck2,
  Warehouse,
  ShieldCheck,
  Headset,
};

export default function Services() {
  return (
    <section id="services" className="section-b relative overflow-hidden py-20 lg:py-28">
      <FlowLines className="opacity-60" />
      <div className="container-x relative">
        <SectionHeader
          index="02"
          kicker="What we do"
          title="End-to-end trade solutions"
          highlight={["trade", "solutions"]}
          description="A complete suite of services that takes your goods from the factory floor to the global marketplace — seamlessly."
        />

        {/* Editorial ledger list — not a card grid */}
        <div className="mt-14 border-t border-ink/10">
          {services.map((s, i) => {
            const Icon = icons[s.icon];
            const num = String(i + 1).padStart(2, "0");
            return (
              <Reveal key={s.title} delay={i * 0.04}>
                <Link
                  href={`/services/${s.slug}`}
                  className="group relative grid grid-cols-[auto_1fr] items-start gap-x-5 gap-y-3 border-b border-ink/10 py-7 transition-colors hover:bg-brand-50/40 sm:grid-cols-[5.5rem_auto_1fr_auto] sm:items-center sm:gap-x-8 lg:py-8"
                >
                  {/* left accent on hover */}
                  <span className="absolute left-0 top-1/2 hidden h-0 w-[3px] -translate-y-1/2 rounded-full bg-gradient-to-b from-brand-400 to-brand-600 transition-all duration-300 group-hover:h-3/4 sm:block" />

                  <span className="font-display text-3xl font-extrabold text-ink/15 transition-colors duration-300 group-hover:text-brand-600 sm:text-5xl">
                    {num}
                  </span>

                  <span className="row-start-1 flex h-11 w-11 items-center justify-center rounded-full border border-brand-500/30 text-brand-600 transition-colors duration-300 group-hover:border-brand-600 group-hover:bg-brand-600 group-hover:text-white sm:row-auto">
                    <Icon className="h-5 w-5" strokeWidth={1.7} />
                  </span>

                  <div className="col-span-2 sm:col-span-1 sm:pl-2 sm:transition-transform sm:duration-300 sm:group-hover:translate-x-2">
                    <h3 className="font-display text-xl font-bold text-ink lg:text-2xl">
                      {s.title}
                    </h3>
                    <p className="mt-2 max-w-2xl text-sm leading-relaxed text-slate-500">
                      {s.desc}
                    </p>
                  </div>

                  <ArrowUpRight className="hidden h-6 w-6 text-ink/25 transition-all duration-300 group-hover:text-brand-600 sm:block sm:group-hover:-translate-y-1 sm:group-hover:translate-x-1" />
                </Link>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
