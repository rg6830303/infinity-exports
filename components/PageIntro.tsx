"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";

/**
 * Branded entrance transition shown once on load — a dark curtain with the
 * logo and a progress sweep that lifts away to reveal the site, giving the
 * page a polished "app launching" feel.
 */
export default function PageIntro() {
  const [done, setDone] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setDone(true), 1600);
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
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#070b16]"
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
            <div className="relative h-16 w-16 overflow-hidden rounded-2xl ring-1 ring-white/15">
              <Image
                src="/images/logo.jpg"
                alt="Infinity Exports"
                fill
                className="object-cover"
                priority
              />
            </div>
            <p className="mt-5 font-display text-xl font-bold tracking-tight text-white">
              INFINITY EXPORTS
            </p>
            <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.35em] text-brand-300">
              Connecting India to the world
            </p>

            <div className="relative mt-6 h-px w-44 overflow-hidden bg-white/10">
              <motion.div
                className="absolute inset-y-0 left-0 bg-gradient-to-r from-brand-500 to-brand-300"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 1.3, ease: "easeInOut" }}
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
