"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";
import { site } from "@/lib/site";
import MagneticButton from "./MagneticButton";
import AnimatedHeading from "./AnimatedHeading";

export default function CTA() {
  return (
    <section className="bg-white px-5 pb-4 pt-8 sm:px-8 lg:px-10">
      <div className="noise relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-[#070b16] px-6 py-16 text-white sm:px-12 lg:py-24">
        {/* glow accents */}
        <div className="pointer-events-none absolute -left-16 -top-16 h-72 w-72 animate-aurora rounded-full bg-brand-600/30 blur-3xl" />
        <div
          className="pointer-events-none absolute -bottom-20 -right-10 h-80 w-80 animate-aurora rounded-full bg-brand-500/25 blur-3xl"
          style={{ animationDelay: "-7s" }}
        />
        <div className="pointer-events-none absolute inset-0 bg-grid-light opacity-[0.06] [background-size:48px_48px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />

        <div className="relative mx-auto max-w-3xl text-center">
          <span className="chip-dark">Let&apos;s build your supply chain</span>
          <AnimatedHeading
            as="h2"
            text="Ready to ship smarter across borders?"
            highlight={["smarter"]}
            className="mx-auto mt-6 max-w-2xl text-3xl font-bold sm:text-4xl lg:text-5xl"
          />
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mx-auto mt-5 max-w-xl text-base text-white/65"
          >
            Tell us what you need to import or export. We&apos;ll come back with a
            clear, competitive plan — sourcing, pricing and timelines included.
          </motion.p>

          <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
            <MagneticButton href="#contact" className="btn-primary">
              Request a Quote
              <ArrowRight className="h-4 w-4" />
            </MagneticButton>
            <Link
              href={site.social.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/[0.04] px-6 py-3 text-sm font-semibold text-white backdrop-blur transition-all hover:-translate-y-0.5 hover:border-white/40"
            >
              <MessageCircle className="h-4 w-4" /> Chat on WhatsApp
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
