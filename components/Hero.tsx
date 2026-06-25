"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Globe2, ShieldCheck, Truck } from "lucide-react";
import { site } from "@/lib/site";
import Aurora from "./Aurora";
import MagneticButton from "./MagneticButton";

const Globe3D = dynamic(() => import("./Globe3D"), {
  ssr: false,
  loading: () => (
    <div className="flex h-full w-full items-center justify-center">
      <div className="h-40 w-40 animate-pulse rounded-full bg-brand-100/60 blur-2xl" />
    </div>
  ),
});

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.15 } },
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
  const globeY = useTransform(scrollYProgress, [0, 1], [0, 90]);
  const copyY = useTransform(scrollYProgress, [0, 1], [0, 40]);
  const fade = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      id="home"
      ref={ref}
      className="noise relative overflow-hidden pt-28 lg:pt-32"
    >
      <Aurora />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-grid-light bg-[size:54px_54px] opacity-[0.4] [mask-image:radial-gradient(ellipse_at_50%_0%,black,transparent_72%)]" />

      <div className="container-x grid items-center gap-10 pb-16 lg:grid-cols-2 lg:gap-6 lg:pb-24">
        <motion.div
          style={{ y: copyY, opacity: fade }}
          variants={container}
          initial="hidden"
          animate="show"
        >
          <motion.span variants={item} className="eyebrow">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-500 opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-500" />
            </span>
            Global Trade • Import &amp; Export
          </motion.span>

          {/* Headline with word-mask reveal */}
          <h1 className="mt-6 text-[2.6rem] font-extrabold leading-[1.02] tracking-tightest text-ink sm:text-5xl lg:text-[4rem]">
            {["Trading", "beyond", "borders,"].map((w, i) => (
              <Word key={w} i={i} highlight={w === "beyond"}>
                {w}
              </Word>
            ))}
            <br className="hidden sm:block" />
            {["delivering", "across", "the"].map((w, i) => (
              <Word key={w} i={i + 3}>
                {w}
              </Word>
            ))}{" "}
            <span className="relative inline-block">
              <Word i={6} highlight>
                globe
              </Word>
              <motion.svg
                className="absolute -bottom-1 left-0 w-full"
                viewBox="0 0 200 12"
                fill="none"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 0.9, delay: 1, ease: "easeInOut" }}
              >
                <motion.path
                  d="M2 9C50 3 150 3 198 9"
                  stroke="#2f5fff"
                  strokeWidth="3"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 0.9, delay: 1 }}
                />
              </motion.svg>
            </span>
          </h1>

          <motion.p
            variants={item}
            className="mt-6 max-w-xl text-base leading-relaxed text-ink-muted sm:text-lg"
          >
            {site.name} is your trusted partner for seamless import &amp; export.
            From sourcing and quality control to documentation and last-mile
            logistics — we move your goods reliably, worldwide.
          </motion.p>

          <motion.div variants={item} className="mt-8 flex flex-wrap gap-4">
            <MagneticButton href="#contact" className="btn-primary">
              Get a Free Quote
              <ArrowRight className="h-4 w-4" />
            </MagneticButton>
            <Link href="#services" className="btn-ghost">
              Explore Services
            </Link>
          </motion.div>

          <motion.div
            variants={item}
            className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4 text-sm font-medium text-ink-muted"
          >
            <span className="inline-flex items-center gap-2">
              <Globe2 className="h-5 w-5 text-brand-600" /> 25+ Countries
            </span>
            <span className="inline-flex items-center gap-2">
              <ShieldCheck className="h-5 w-5 text-brand-600" /> Quality Assured
            </span>
            <span className="inline-flex items-center gap-2">
              <Truck className="h-5 w-5 text-brand-600" /> On-time Delivery
            </span>
          </motion.div>
        </motion.div>

        {/* 3D Globe */}
        <motion.div
          style={{ y: globeY }}
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          className="relative mx-auto h-[340px] w-full max-w-lg sm:h-[440px] lg:h-[540px]"
        >
          <div className="absolute inset-0 animate-float">
            <Globe3D />
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="glass-card absolute left-0 top-10 hidden items-center gap-3 px-4 py-3 sm:flex"
          >
            <div className="grid h-9 w-9 place-items-center rounded-lg bg-brand-600 text-white">
              <Truck className="h-4 w-4" />
            </div>
            <div className="leading-tight">
              <p className="text-sm font-bold text-ink">500+ Shipments</p>
              <p className="text-xs text-ink-muted">delivered worldwide</p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="glass-card absolute bottom-8 right-0 hidden items-center gap-3 px-4 py-3 sm:flex"
          >
            <div className="grid h-9 w-9 place-items-center rounded-lg bg-ink text-white">
              <Globe2 className="h-4 w-4" />
            </div>
            <div className="leading-tight">
              <p className="text-sm font-bold text-ink">Worldwide Network</p>
              <p className="text-xs text-ink-muted">on 5 continents</p>
            </div>
          </motion.div>
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
        className={`inline-block ${highlight ? "text-gradient-blue" : ""}`}
        initial={{ y: "110%" }}
        animate={{ y: 0 }}
        transition={{
          duration: 0.7,
          delay: 0.2 + i * 0.07,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        {children}
      </motion.span>
    </span>
  );
}
