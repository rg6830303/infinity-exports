"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { ArrowRight, FileText } from "lucide-react";
import { site, stats as siteStats } from "@/lib/site";
import { getIcon } from "@/lib/icons";
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

  // Render the globe in one of two layouts depending on viewport: a contained,
  // touch-draggable panel in the mobile flow, or the large interactive side
  // backdrop on desktop. Only one instance is mounted at a time (one WebGL
  // context), and it swaps on resize across the lg breakpoint.
  const [isDesktop, setIsDesktop] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const update = () => setIsDesktop(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  return (
    <section
      id="home"
      ref={ref}
      data-testid="hero"
      className="noise relative flex min-h-[100svh] flex-col justify-center overflow-hidden bg-white pt-24 text-ink"
    >
      <div className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(ellipse_120%_80%_at_70%_-10%,#dfe9ff_0%,#eef4ff_45%,#ffffff_100%)]" />
      <div className="pointer-events-none absolute inset-0 z-0 bg-grid-light opacity-[0.7] [background-size:60px_60px] [mask-image:radial-gradient(ellipse_at_70%_30%,black,transparent_70%)]" />

      {/* Desktop: large interactive globe as the right-side backdrop. */}
      {isDesktop && (
        <motion.div
          style={{ y: globeY }}
          className="pointer-events-none absolute right-[-6%] top-0 z-0 h-full w-[60%] cursor-grab [&_canvas]:pointer-events-auto active:cursor-grabbing"
        >
          <Globe3D active={globeActive} />
        </motion.div>
      )}
      {/* Readability wash only behind the desktop side globe. */}
      <div className="pointer-events-none absolute inset-x-0 top-0 z-0 h-28 bg-gradient-to-b from-white via-white/70 to-transparent" />
      <div className="pointer-events-none absolute inset-0 z-0 hidden lg:block lg:bg-gradient-to-r lg:from-white lg:via-white/40 lg:to-transparent" />

      <div className="container-x relative z-10 w-full">
        <motion.div
          style={{ y: copyY, opacity: fade }}
          variants={container}
          initial="hidden"
          animate="show"
          className="max-w-2xl"
        >
          <h1 className="mt-6 font-display text-[2.4rem] font-extrabold leading-[1.05] tracking-tightest sm:text-6xl lg:text-[4.4rem] lg:leading-[0.98]">
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
            Global sourcing, simplified. {site.name} connects manufacturers and
            buyers across continents — handling supplier discovery, quality,
            documentation and freight so your cargo arrives on time, every time.
          </motion.p>

          <motion.div variants={item} className="mt-9 flex flex-wrap gap-4">
            <MagneticButton href="/requirement" className="btn-primary">
              Request a Quote
              <ArrowRight className="h-4 w-4" />
            </MagneticButton>
            <Link
              href="/services"
              data-testid="hero-cta-services"
              className="btn-ghost"
            >
              Explore Services
            </Link>
          </motion.div>
        </motion.div>

        {/* Mobile/tablet: the globe gets its own contained, touch-draggable
            panel (drag to spin) instead of a faint background. */}
        {!isDesktop && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            data-testid="hero-globe-mobile"
            className="relative z-10 mx-auto mt-10 aspect-square w-[86%] max-w-[360px] cursor-grab touch-none select-none [&_canvas]:pointer-events-auto active:cursor-grabbing"
          >
            <Globe3D active={globeActive} />
          </motion.div>
        )}

        {/* Stats strip */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.7 }}
          className="mt-14 grid max-w-3xl grid-cols-2 gap-px overflow-hidden rounded-2xl border border-ink/10 bg-ink/10 shadow-soft sm:grid-cols-4"
        >
          {siteStats.map((s) => (
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
