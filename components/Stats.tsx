"use client";

import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef } from "react";
import { stats } from "@/lib/site";

function StatCounter({ value, label }: { value: string; label: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const match = value.match(/^(\d+)(.*)$/);
  const target = match ? parseInt(match[1], 10) : 0;
  const suffix = match ? match[2] : value;

  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => Math.round(v));

  useEffect(() => {
    if (inView && target) {
      const controls = animate(count, target, { duration: 1.6, ease: "easeOut" });
      return controls.stop;
    }
  }, [inView, target, count]);

  return (
    <div className="text-center">
      <span
        ref={ref}
        className="font-display text-4xl font-extrabold text-brand-700 sm:text-5xl"
      >
        {target ? <motion.span>{rounded}</motion.span> : value}
        {target ? suffix : ""}
      </span>
      <p className="mt-2 text-sm font-medium text-ink-muted">{label}</p>
    </div>
  );
}

export default function Stats() {
  return (
    <section className="relative -mt-px bg-white py-16">
      <div className="container-x">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-card grid grid-cols-2 gap-8 px-6 py-10 sm:grid-cols-4 sm:px-12"
        >
          {stats.map((s) => (
            <StatCounter key={s.label} value={s.value} label={s.label} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
