"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Target, Compass } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";
import { site } from "@/lib/site";

const points = [
  "Verified global supplier & carrier network",
  "Transparent, competitive pricing",
  "Compliant export documentation",
  "Dedicated single point of contact",
];

export default function About() {
  return (
    <section id="about" className="relative bg-white py-20 lg:py-28">
      <div className="container-x grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Visual */}
        <Reveal direction="right">
          <div className="relative">
            <div className="absolute -left-6 -top-6 h-24 w-24 rounded-2xl bg-brand-100" />
            <div className="absolute -bottom-6 -right-6 h-32 w-32 rounded-full bg-brand-500/10" />
            <div className="glass-card relative overflow-hidden p-2">
              <div className="rounded-xl bg-gradient-to-br from-ink via-brand-900 to-brand-700 p-8 text-white">
                <div className="flex items-center gap-3">
                  <Compass className="h-8 w-8 text-brand-300" />
                  <span className="font-display text-xl font-bold">
                    Infinity Exports
                  </span>
                </div>
                <p className="mt-6 text-sm leading-relaxed text-white/80">
                  Headquartered in Kolkata, India — we bridge manufacturers and
                  buyers across continents with a relentless focus on reliability,
                  quality and trust.
                </p>
                <div className="mt-8 grid grid-cols-2 gap-4">
                  <div className="rounded-xl bg-white/10 p-4 backdrop-blur">
                    <Target className="h-5 w-5 text-brand-300" />
                    <p className="mt-3 text-sm font-semibold">Our Mission</p>
                    <p className="mt-1 text-xs text-white/70">
                      Make global trade simple &amp; dependable for every client.
                    </p>
                  </div>
                  <div className="rounded-xl bg-white/10 p-4 backdrop-blur">
                    <Compass className="h-5 w-5 text-brand-300" />
                    <p className="mt-3 text-sm font-semibold">Our Vision</p>
                    <p className="mt-1 text-xs text-white/70">
                      To be a leading name connecting India with the world.
                    </p>
                  </div>
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
            <p className="mt-5 text-base leading-relaxed text-ink-muted">
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
                  <span className="text-sm font-medium text-ink-soft">{p}</span>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.4}>
            <motion.a
              href="#contact"
              whileHover={{ x: 4 }}
              className="mt-9 inline-flex items-center gap-2 text-sm font-semibold text-brand-700"
            >
              Partner with us →
            </motion.a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
