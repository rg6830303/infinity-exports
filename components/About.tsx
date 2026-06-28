"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  CheckCircle2,
  PackageSearch,
  Globe2,
  FileCheck2,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";
import FloatingShapes from "./FloatingShapes";
import Aurora from "./Aurora";
import { site } from "@/lib/site";

const points = [
  "Verified global supplier & carrier network",
  "Transparent, competitive pricing",
  "Compliant export documentation",
  "Dedicated single point of contact",
];

// Plain-English primer on how cross-border trade actually works — the
// fundamentals every importer/exporter should understand before shipping.
const practices = [
  {
    icon: PackageSearch,
    title: "Sourcing & supplier vetting",
    desc: "Factories, samples and capacity are verified before any money moves — the step that prevents most trade losses.",
  },
  {
    icon: Globe2,
    title: "Incoterms & landed cost",
    desc: "Terms like FOB, CIF and DDP define who pays freight, insurance and duty — and exactly where risk passes from seller to buyer.",
  },
  {
    icon: FileCheck2,
    title: "Documentation & customs",
    desc: "Commercial invoice, packing list, certificate of origin and HS codes clear your goods cleanly at both ends.",
  },
  {
    icon: ShieldCheck,
    title: "Quality & secure payment",
    desc: "Pre-shipment inspection gates the balance payment, so you pay for exactly what you ordered.",
  },
];

export default function About() {
  return (
    <section id="about" className="section-a relative overflow-hidden py-20 lg:py-28">
      <Aurora className="opacity-50" />
      <FloatingShapes />
      <div className="container-x relative grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Visual — a plain-English "how trade works" primer */}
        <Reveal direction="right">
          <div className="relative">
            <div className="pointer-events-none absolute -inset-4 rounded-[2rem] bg-brand-600/10 blur-2xl" />
            <div className="relative overflow-hidden rounded-3xl border border-ink/10 bg-white shadow-card">
              {/* header strip */}
              <div className="flex items-center justify-between border-b border-ink/10 bg-brand-50/60 px-6 py-4">
                <span className="font-mono text-[11px] uppercase tracking-[0.28em] text-brand-600">
                  Import / Export, simplified
                </span>
                <span className="font-mono text-[11px] text-slate-400">
                  THE BASICS
                </span>
              </div>

              {/* practice rows */}
              <div className="divide-y divide-ink/[0.08]">
                {practices.map((p) => (
                  <div key={p.title} className="flex items-start gap-4 px-6 py-5">
                    <span className="mt-0.5 grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-brand-500/25 bg-brand-50 text-brand-600">
                      <p.icon className="h-5 w-5" strokeWidth={1.7} />
                    </span>
                    <div>
                      <h3 className="font-display text-sm font-bold text-ink">
                        {p.title}
                      </h3>
                      <p className="mt-1 text-sm leading-relaxed text-slate-600">
                        {p.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* footer tip */}
              <div className="border-t border-ink/10 px-6 py-5">
                <p className="text-sm leading-relaxed text-slate-600">
                  <span className="font-semibold text-brand-600">
                    Not sure which terms fit your deal?
                  </span>{" "}
                  We&apos;ll recommend the right Incoterm, route and payment
                  method — and handle the rest.
                </p>
                <Link
                  href="/#process"
                  className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-brand-600 hover:underline"
                >
                  See how our process works
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Copy */}
        <div>
          <SectionHeader
            index="01"
            kicker="Who we are"
            title="Your reliable bridge to international markets"
            highlight={["international", "markets"]}
            align="left"
          />
          <Reveal delay={0.1}>
            <p className="mt-5 text-base leading-relaxed text-slate-600">
              {site.name} is a full-service import &amp; export company built on
              integrity and precision. We handle the complexity of cross-border
              trade — sourcing, compliance, logistics and delivery — so you can
              focus on growing your business. Led by{" "}
              <strong className="text-ink">{site.partner}</strong>, our team
              treats every shipment as a promise kept.
            </p>
          </Reveal>

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {points.map((p, i) => (
              <Reveal key={p} delay={0.12 + i * 0.06}>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-600" />
                  <span className="text-sm font-medium text-slate-700">{p}</span>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.4}>
            <motion.div whileHover={{ x: 4 }} className="mt-9 inline-block">
              <Link
                href="/quote"
                className="inline-flex items-center gap-2 text-sm font-semibold text-brand-600"
              >
                Partner with us <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
