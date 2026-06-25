"use client";

import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";
import ParticleNetwork from "./ParticleNetwork";
import { testimonials } from "@/lib/site";

export default function Testimonials() {
  return (
    <section className="section-a relative overflow-hidden py-20 lg:py-28">
      <ParticleNetwork
        className="opacity-60 [mask-image:radial-gradient(ellipse_at_center,black,transparent_80%)]"
        color="143,179,255"
        linkColor="143,179,255"
      />
      <div className="pointer-events-none absolute left-1/4 bottom-0 h-72 w-72 rounded-full bg-brand-600/10 blur-3xl" />
      <div className="container-x relative">
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
                className="card-dark relative flex h-full flex-col p-7"
              >
                <Quote className="h-9 w-9 text-brand-400/50" />
                <div className="mt-4 flex gap-1">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star
                      key={s}
                      className="h-4 w-4 fill-brand-400 text-brand-400"
                    />
                  ))}
                </div>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-white/75">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="mt-6 flex items-center gap-3 border-t border-white/10 pt-5">
                  <div className="grid h-11 w-11 place-items-center rounded-full bg-gradient-to-br from-brand-500 to-brand-700 font-display text-sm font-bold text-white">
                    {t.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")
                      .slice(0, 2)}
                  </div>
                  <div className="leading-tight">
                    <p className="text-sm font-bold text-white">{t.name}</p>
                    <p className="text-xs text-white/55">{t.role}</p>
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
