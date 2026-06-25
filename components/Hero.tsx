"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Globe2, ShieldCheck, Truck } from "lucide-react";
import { site } from "@/lib/site";

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
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
};
const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-radial-fade pt-28 lg:pt-32"
    >
      {/* Decorative grid + blobs */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-grid-light bg-[size:48px_48px] opacity-[0.5] [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />
      <div className="pointer-events-none absolute -left-24 top-20 -z-10 h-72 w-72 rounded-full bg-brand-300/30 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 top-40 -z-10 h-80 w-80 rounded-full bg-brand-500/20 blur-3xl" />

      <div className="container-x grid items-center gap-10 pb-16 lg:grid-cols-2 lg:gap-6 lg:pb-24">
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.span variants={item} className="eyebrow">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-500" />
            Global Trade • Import &amp; Export
          </motion.span>

          <motion.h1
            variants={item}
            className="mt-6 font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-ink sm:text-5xl lg:text-6xl"
          >
            Trading <span className="text-gradient-blue">beyond borders</span>,
            delivering across the{" "}
            <span className="relative whitespace-nowrap">
              <span className="text-gradient-blue">globe</span>
              <svg
                className="absolute -bottom-2 left-0 w-full"
                viewBox="0 0 200 12"
                fill="none"
              >
                <path
                  d="M2 9C50 3 150 3 198 9"
                  stroke="#2f5fff"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-6 max-w-xl text-base leading-relaxed text-ink-muted sm:text-lg"
          >
            {site.name} is your trusted partner for seamless import &amp; export.
            From sourcing and quality control to documentation and last-mile
            logistics — we move your goods reliably, worldwide.
          </motion.p>

          <motion.div variants={item} className="mt-8 flex flex-wrap gap-4">
            <Link href="#contact" className="btn-primary">
              Get a Free Quote
              <ArrowRight className="h-4 w-4" />
            </Link>
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
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          className="relative mx-auto h-[340px] w-full max-w-lg sm:h-[440px] lg:h-[520px]"
        >
          <div className="absolute inset-0 animate-float">
            <Globe3D />
          </div>
          {/* floating stat chips */}
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
