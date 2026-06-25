"use client";

import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";
import { testimonials } from "@/lib/site";

export default function Testimonials() {
  return (
    <section className="relative bg-white py-20 lg:py-28">
      <div className="container-x">
        <SectionHeader
          index="07"
          kicker="Client voices"
          title="Trusted by businesses around the world"
          highlight={["around", "the", "world"]}
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -6 }}
                className="relative flex h-full flex-col rounded-2xl border border-ink/[0.06] bg-gradient-to-br from-white to-brand-50/30 p-7 shadow-soft"
              >
                <Quote className="h-9 w-9 text-brand-200" />
                <div className="mt-4 flex gap-1">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star
                      key={s}
                      className="h-4 w-4 fill-brand-500 text-brand-500"
                    />
                  ))}
                </div>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-ink-soft">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="mt-6 flex items-center gap-3 border-t border-ink/5 pt-5">
                  <div className="grid h-11 w-11 place-items-center rounded-full bg-gradient-to-br from-brand-600 to-brand-800 font-display text-sm font-bold text-white">
                    {t.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")
                      .slice(0, 2)}
                  </div>
                  <div className="leading-tight">
                    <p className="text-sm font-bold text-ink">{t.name}</p>
                    <p className="text-xs text-ink-muted">{t.role}</p>
                  </div>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
