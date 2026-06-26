"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Stamp } from "lucide-react";
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

const manifest = [
  { k: "Headquarters", v: "Kolkata, West Bengal · India" },
  { k: "Discipline", v: "Import & Export · Trade" },
  { k: "Network", v: "25+ countries served" },
  { k: "Partner", v: site.partner },
];

export default function About() {
  return (
    <section id="about" className="section-a relative overflow-hidden py-20 lg:py-28">
      <Aurora className="opacity-50" />
      <FloatingShapes />
      <div className="container-x relative grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Visual — a thematic "trade profile" manifest */}
        <Reveal direction="right">
          <div className="relative">
            <div className="pointer-events-none absolute -inset-4 rounded-[2rem] bg-brand-600/10 blur-2xl" />
            <div className="relative overflow-hidden rounded-3xl border border-white/12 bg-[#0b1230]">
              {/* header strip */}
              <div className="flex items-center justify-between border-b border-white/10 bg-white/[0.03] px-6 py-4">
                <span className="font-mono text-[11px] uppercase tracking-[0.28em] text-brand-300">
                  Trade Profile
                </span>
                <span className="font-mono text-[11px] text-white/40">
                  EST · KOLKATA
                </span>
              </div>

              {/* manifest rows */}
              <dl className="divide-y divide-white/[0.06] px-6">
                {manifest.map((m) => (
                  <div
                    key={m.k}
                    className="flex items-center justify-between gap-4 py-4"
                  >
                    <dt className="font-mono text-[11px] uppercase tracking-[0.18em] text-white/45">
                      {m.k}
                    </dt>
                    <dd className="text-right text-sm font-semibold text-white">
                      {m.v}
                    </dd>
                  </div>
                ))}
              </dl>

              {/* mission/vision footer with stamp */}
              <div className="relative border-t border-white/10 px-6 py-6">
                <p className="max-w-sm text-sm leading-relaxed text-white/70">
                  <span className="text-brand-300">Mission — </span>
                  make global trade simple &amp; dependable, connecting India with
                  the world, one reliable shipment at a time.
                </p>
                <div className="mt-4 inline-flex rotate-[-6deg] items-center gap-2 rounded-lg border border-brand-400/40 px-3 py-1.5 text-brand-300">
                  <Stamp className="h-4 w-4" />
                  <span className="font-mono text-[10px] uppercase tracking-[0.25em]">
                    Verified Exporter
                  </span>
                </div>
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
            <p className="mt-5 text-base leading-relaxed text-white/65">
              {site.name} is a full-service import &amp; export company built on
              integrity and precision. We handle the complexity of cross-border
              trade — sourcing, compliance, logistics and delivery — so you can
              focus on growing your business. Led by{" "}
              <strong className="text-white">{site.partner}</strong>, our team
              treats every shipment as a promise kept.
            </p>
          </Reveal>

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {points.map((p, i) => (
              <Reveal key={p} delay={0.12 + i * 0.06}>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-400" />
                  <span className="text-sm font-medium text-white/80">{p}</span>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.4}>
            <motion.a
              href="#contact"
              whileHover={{ x: 4 }}
              className="mt-9 inline-flex items-center gap-2 text-sm font-semibold text-brand-300"
            >
              Partner with us →
            </motion.a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
