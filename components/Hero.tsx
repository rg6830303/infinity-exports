"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { ArrowRight } from "lucide-react";
import { site, stats } from "@/lib/site";
import MagneticButton from "./MagneticButton";

const Globe3D = dynamic(() => import("./Globe3D"), {
  ssr: false,
  loading: () => (
    <div className="flex h-full w-full items-center justify-center">
      <div className="h-44 w-44 animate-pulse rounded-full bg-brand-500/30 blur-3xl" />
    </div>
  ),
});

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.15 } },
};
const item = {
  hidden: { opacity: 0, y: 26 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const globeY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const copyY = useTransform(scrollYProgress, [0, 1], [0, 60]);
  const fade = useTransform(scrollYProgress, [0, 0.85], [1, 0]);

  // Only run the WebGL globe while the hero is on screen.
  const [globeActive, setGlobeActive] = useState(true);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => setGlobeActive(e.isIntersecting),
      { threshold: 0.04 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section
      id="home"
      ref={ref}
      className="noise relative flex min-h-[100svh] flex-col justify-center overflow-hidden bg-white pt-24 text-ink"
    >
      {/* soft gradient base */}
      <div className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(ellipse_120%_80%_at_70%_-10%,#dfe9ff_0%,#eef4ff_45%,#ffffff_100%)]" />
      <div className="pointer-events-none absolute inset-0 z-0 bg-grid-light opacity-[0.7] [background-size:60px_60px] [mask-image:radial-gradient(ellipse_at_70%_30%,black,transparent_70%)]" />

      {/* 3D globe */}
      <motion.div
        style={{ y: globeY }}
        className="pointer-events-none absolute right-[-6%] top-0 z-0 h-full w-full opacity-60 lg:left-auto lg:w-[62%] lg:opacity-100"
      >
        <Globe3D active={globeActive} />
      </motion.div>
      {/* contrast scrim over globe — strong on the left for text, clear on the right */}
      <div className="pointer-events-none absolute inset-0 z-0 bg-gradient-to-b from-white/60 via-white/10 to-white lg:bg-gradient-to-r lg:from-white lg:via-white/40 lg:to-transparent" />
      {/* top scrim so the fixed navbar stays legible over the globe */}
      <div className="pointer-events-none absolute inset-x-0 top-0 z-0 h-28 bg-gradient-to-b from-white via-white/70 to-transparent" />

      <div className="container-x relative z-10 w-full">
        <motion.div
          style={{ y: copyY, opacity: fade }}
          variants={container}
          initial="hidden"
          animate="show"
          className="max-w-2xl"
        >
          <h1 className="font-display text-[2.4rem] font-extrabold leading-[1.05] tracking-tightest sm:text-6xl lg:text-[4.4rem] lg:leading-[0.98]">
            {["We move", "the world's", "goods,"].map((w, i) => (
              <Word key={w} i={i}>
                {w}
              </Word>
            ))}
            <span className="block">
              {["with", "precision"].map((w, i) => (
                <Word key={w} i={i + 3} highlight={w === "precision"}>
                  {w}
                </Word>
              ))}
            </span>
          </h1>

          <motion.p
            variants={item}
            className="mt-6 max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg"
          >
            {site.name} connects manufacturers and buyers across continents —
            handling sourcing, quality, documentation and logistics so your
            cargo arrives on time, every time.
          </motion.p>

          <motion.div variants={item} className="mt-9 flex flex-wrap gap-4">
            <MagneticButton href="#contact" className="btn-primary">
              Request a Quote
              <ArrowRight className="h-4 w-4" />
            </MagneticButton>
            <Link href="#services" className="btn-ghost">
              Our Services
            </Link>
          </motion.div>
        </motion.div>

        {/* Stats strip */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.7 }}
          className="mt-14 grid max-w-3xl grid-cols-2 gap-px overflow-hidden rounded-2xl border border-ink/10 bg-ink/10 shadow-soft sm:grid-cols-4"
        >
          {stats.map((s) => (
            <div key={s.label} className="bg-white px-5 py-5">
              <p className="font-display text-2xl font-extrabold text-ink sm:text-3xl">
                {s.value}
              </p>
              <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.16em] text-slate-500">
                {s.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function Word({
  children,
  i,
  highlight = false,
}: {
  children: string;
  i: number;
  highlight?: boolean;
}) {
  return (
    <span className="mr-[0.25em] inline-block overflow-hidden align-bottom">
      <motion.span
        className={`inline-block ${highlight ? "text-brand-600" : ""}`}
        initial={{ y: "110%" }}
        animate={{ y: 0 }}
        transition={{
          duration: 0.8,
          delay: 0.2 + i * 0.08,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        {children}
      </motion.span>
    </span>
  );
}
