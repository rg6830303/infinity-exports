"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Instagram,
} from "lucide-react";
import Reveal from "./Reveal";
import GlobeMark from "./GlobeMark";
import { site, reassurance } from "@/lib/site";

export default function ContactCTA() {
  const channels = [
    { icon: Phone, label: "Call", value: site.phone, href: `tel:${site.phoneRaw}` },
    { icon: Mail, label: "Email", value: site.email, href: `mailto:${site.email}` },
    {
      icon: MessageCircle,
      label: "WhatsApp",
      value: site.phone,
      href: site.social.whatsapp,
    },
    {
      icon: Instagram,
      label: "Instagram",
      value: `@${site.instagramHandle}`,
      href: site.social.instagram,
    },
    {
      icon: MapPin,
      label: "Location",
      value: site.location,
      href: site.address.maps,
    },
  ];

  return (
    <section
      id="contact"
      className="section-b px-5 pb-16 pt-10 sm:px-8 lg:px-10"
    >
      <div className="noise relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] border border-brand-900/20 bg-gradient-to-br from-brand-700 via-brand-800 to-brand-900 px-6 py-14 text-white shadow-card sm:px-12 lg:py-16">
        <GlobeMark
          spin
          className="pointer-events-none absolute -right-16 -top-16 h-72 w-72 text-white/10"
        />
        <div className="pointer-events-none absolute -bottom-20 -left-10 h-72 w-72 rounded-full bg-brand-400/20 blur-3xl" />

        <div className="relative grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:items-center">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-brand-100">
              Buyer requirement
            </span>
            <h2 className="mt-5 max-w-xl font-display text-3xl font-extrabold tracking-tightest sm:text-4xl lg:text-[2.7rem]">
              Have a requirement? Get a structured quote.
            </h2>
            <p className="mt-4 max-w-lg text-base leading-relaxed text-brand-100">
              Submit your buyer requirement and our team reviews it before
              quoting — so your response is accurate, comparable and tailored to
              your destination and Incoterm.
            </p>

            <ul className="mt-6 grid max-w-lg gap-x-6 gap-y-2 sm:grid-cols-2">
              {reassurance.map((r) => (
                <li key={r} className="flex items-start gap-2 text-sm text-brand-100">
                  <ArrowRight className="mt-0.5 h-4 w-4 shrink-0 text-brand-300" />
                  {r}
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/requirement"
                data-testid="home-contact-requirement"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-brand-800 transition-transform hover:-translate-y-0.5"
              >
                Submit Buyer Requirement <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href={site.social.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
              >
                <MessageCircle className="h-4 w-4" /> Chat on WhatsApp
              </a>
            </div>
          </div>

          <Reveal direction="left">
            <div className="grid gap-3 sm:grid-cols-2">
              {channels.map((c) => (
                <motion.a
                  key={c.label}
                  href={c.href}
                  target={c.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  whileHover={{ y: -4 }}
                  data-testid={`contact-channel-${c.label.toLowerCase()}`}
                  className="group flex items-center gap-3 rounded-2xl border border-white/15 bg-white/[0.06] p-4 backdrop-blur transition-colors hover:bg-white/10"
                >
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-white/25 text-white">
                    <c.icon className="h-[18px] w-[18px]" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-xs font-medium text-brand-200">
                      {c.label}
                    </span>
                    <span className="block truncate text-sm font-semibold text-white">
                      {c.value}
                    </span>
                  </span>
                </motion.a>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
