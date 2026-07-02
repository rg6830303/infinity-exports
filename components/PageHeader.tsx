"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import GlobeMark from "./GlobeMark";
import SceneBackdrop from "./SceneBackdrop";
import type { SceneVariant } from "./PageScene";

/**
 * Premium inner-page header with a soft gradient, grid texture, the shared
 * trade-route pattern and (optionally) a page-signature 3D vignette — gives
 * every route a consistent, designed top with its own motion identity.
 */
export default function PageHeader({
  eyebrow,
  title,
  description,
  backHref = "/",
  backLabel = "Home",
  scene,
  children,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  backHref?: string;
  backLabel?: string;
  scene?: SceneVariant;
  children?: React.ReactNode;
}) {
  return (
    <header className="relative overflow-hidden border-b border-ink/10 bg-white pt-28">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_110%_70%_at_85%_-20%,#d7f0e7_0%,#f0faf7_42%,#ffffff_100%)]" />
      <div className="pointer-events-none absolute inset-0 bg-grid-light opacity-[0.6] [background-size:56px_56px] [mask-image:radial-gradient(ellipse_at_80%_0%,black,transparent_70%)]" />
      <div
        className="pointer-events-none absolute inset-0 bg-[url('/images/patterns/trade-pattern.svg')] bg-[length:460px] opacity-30 [mask-image:radial-gradient(ellipse_at_75%_10%,black,transparent_70%)]"
        aria-hidden
      />
      {scene ? (
        <SceneBackdrop
          variant={scene}
          className="absolute -top-4 right-[-4%] z-0 hidden h-[24rem] w-[28rem] opacity-80 lg:block"
        />
      ) : (
        <GlobeMark
          spin
          className="pointer-events-none absolute -right-16 -top-10 hidden h-80 w-80 text-brand-500/10 md:block"
        />
      )}

      <div className="container-x relative pb-14 pt-6 lg:pb-16">
        <Link
          href={backHref}
          data-testid="page-back-link"
          className="inline-flex items-center gap-2 text-sm font-medium text-slate-500 transition-colors hover:text-brand-600"
        >
          <ArrowLeft className="h-4 w-4" /> {backLabel}
        </Link>

        <motion.span
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="label-mono mt-7 flex"
        >
          <GlobeMark className="h-4 w-4 text-brand-600" />
          {eyebrow}
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="mt-4 max-w-3xl font-display text-3xl font-extrabold tracking-tightest text-ink sm:text-4xl lg:text-5xl"
        >
          {title}
        </motion.h1>

        {description && (
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.12 }}
            className="mt-5 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg"
          >
            {description}
          </motion.p>
        )}

        {children && <div className="mt-8 flex flex-wrap gap-3">{children}</div>}
      </div>
    </header>
  );
}
