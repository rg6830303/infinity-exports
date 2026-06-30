"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import GlobeMark from "./GlobeMark";

/**
 * Branded entrance transition shown once on load — logo + globe motif and a
 * progress sweep that lifts away to reveal the site.
 */
export default function PageIntro() {
  const [done, setDone] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setDone(true), 1500);
    document.body.style.overflow = "hidden";
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (done) document.body.style.overflow = "";
  }, [done]);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          key="intro"
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-white"
          initial={{ opacity: 1 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
        >
          <motion.div
            initial={{ opacity: 0, y: 14, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex flex-col items-center"
          >
            <div className="relative flex items-center gap-3">
              <div className="relative h-16 w-16 overflow-hidden rounded-2xl ring-1 ring-ink/10 shadow-soft">
                <Image
                  src="/images/logo.jpg"
                  alt="Infinity Exports"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <span className="grid h-16 w-16 place-items-center rounded-2xl bg-brand-50 text-brand-600 ring-1 ring-brand-500/15">
                <GlobeMark spin className="h-9 w-9" />
              </span>
            </div>
            <p className="mt-5 font-display text-xl font-bold tracking-tight text-ink">
              INFINITY EXPORTS
            </p>
            <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.35em] text-brand-600">
              Connecting India to global buyers
            </p>

            <div className="relative mt-6 h-px w-44 overflow-hidden bg-ink/10">
              <motion.div
                className="absolute inset-y-0 left-0 bg-gradient-to-r from-brand-600 to-brand-400"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 1.2, ease: "easeInOut" }}
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
