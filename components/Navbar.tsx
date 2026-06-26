"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import {
  Menu,
  X,
  Phone,
  Mail,
  MessageCircle,
  ArrowRight,
  Instagram,
} from "lucide-react";
import { site } from "@/lib/site";

const links = [
  { href: "/#about", label: "About" },
  { href: "/#services", label: "Services" },
  { href: "/#products", label: "Products" },
  { href: "/#process", label: "Process" },
  { href: "/insights", label: "Insights" },
  { href: "/#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const solid = scrolled || open;

  return (
    <>
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        solid
          ? "border-b border-ink/10 bg-white/90 py-3 shadow-soft backdrop-blur-md"
          : "bg-transparent py-4"
      }`}
    >
      <nav className="container-x flex items-center justify-between">
        <Link
          href="#home"
          onClick={() => setOpen(false)}
          className="flex items-center gap-3"
        >
          <div className="relative h-10 w-10 overflow-hidden rounded-xl ring-1 ring-ink/10 sm:h-11 sm:w-11">
            <Image
              src="/images/logo.jpg"
              alt="Infinity Exports logo"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="leading-tight">
            <span className="block font-display text-base font-bold tracking-tight text-ink sm:text-lg">
              INFINITY
            </span>
            <span className="block text-[10px] font-semibold uppercase tracking-[0.34em] text-brand-600">
              Exports
            </span>
          </div>
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="rounded-full px-4 py-2 text-sm font-medium text-ink-muted transition-colors hover:bg-brand-50 hover:text-brand-700"
            >
              {l.label}
            </Link>
          ))}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <a href={`tel:${site.phoneRaw}`} className="btn-ghost">
            <Phone className="h-4 w-4" />
            {site.phone}
          </a>
          <Link href="#contact" className="btn-primary">
            Get a Quote
          </Link>
        </div>

        <button
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="-mr-2 rounded-lg p-2 text-ink lg:hidden"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>
    </motion.header>

      {/* Mobile slide-in drawer (fully opaque sidebar) — outside the header
          so its `fixed` positioning is relative to the viewport */}
      <AnimatePresence>
        {open && (
          <div className="fixed inset-0 z-[70] lg:hidden">
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />

            <motion.aside
              key="drawer"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 320, damping: 34 }}
              className="absolute right-0 top-0 flex h-full w-[86%] max-w-sm flex-col overflow-y-auto border-l border-ink/10 bg-white shadow-[-30px_0_60px_-20px_rgba(14,24,68,0.22)]"
            >
              {/* decorative glow + grid */}
              <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-brand-500/15 blur-3xl" />
              <div className="pointer-events-none absolute inset-0 bg-grid-light opacity-[0.5] [background-size:40px_40px] [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]" />

              {/* header */}
              <div className="relative flex items-center justify-between border-b border-ink/10 px-6 py-5">
                <div className="flex items-center gap-3">
                  <div className="relative h-10 w-10 overflow-hidden rounded-xl ring-1 ring-ink/10">
                    <Image
                      src="/images/logo.jpg"
                      alt="Infinity Exports"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="leading-tight">
                    <p className="font-display text-sm font-bold text-ink">
                      INFINITY
                    </p>
                    <p className="text-[9px] font-semibold uppercase tracking-[0.3em] text-brand-600">
                      Exports
                    </p>
                  </div>
                </div>
                <button
                  aria-label="Close menu"
                  onClick={() => setOpen(false)}
                  className="grid h-10 w-10 place-items-center rounded-full border border-ink/10 text-ink transition-colors hover:border-ink/30 hover:bg-ink/5"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* nav links */}
              <nav className="relative flex-1 px-4 py-5">
                <p className="px-3 pb-2 font-mono text-[10px] uppercase tracking-[0.3em] text-ink/40">
                  Menu
                </p>
                {links.map((l, i) => (
                  <motion.div
                    key={l.href}
                    initial={{ opacity: 0, x: 24 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.08 + i * 0.05 }}
                  >
                    <Link
                      href={l.href}
                      onClick={() => setOpen(false)}
                      className="group flex items-center justify-between rounded-2xl px-3 py-3.5 transition-colors hover:bg-brand-50"
                    >
                      <span className="flex items-center gap-3">
                        <span className="font-mono text-xs text-brand-500/70">
                          0{i + 1}
                        </span>
                        <span className="font-display text-lg font-semibold text-ink/85 transition-colors group-hover:text-brand-700">
                          {l.label}
                        </span>
                      </span>
                      <ArrowRight className="h-4 w-4 -translate-x-1 text-ink/25 opacity-0 transition-all group-hover:translate-x-0 group-hover:text-brand-600 group-hover:opacity-100" />
                    </Link>
                  </motion.div>
                ))}
              </nav>

              {/* contact footer */}
              <div className="relative border-t border-ink/10 px-6 py-6">
                <p className="pb-3 font-mono text-[10px] uppercase tracking-[0.3em] text-ink/40">
                  Get in touch
                </p>
                <div className="space-y-2.5">
                  <a
                    href={`tel:${site.phoneRaw}`}
                    onClick={() => setOpen(false)}
                    className="flex items-center gap-3 text-sm text-slate-600 transition-colors hover:text-ink"
                  >
                    <span className="grid h-9 w-9 place-items-center rounded-full border border-brand-500/30 text-brand-600">
                      <Phone className="h-4 w-4" />
                    </span>
                    {site.phone}
                  </a>
                  <a
                    href={`mailto:${site.email}`}
                    onClick={() => setOpen(false)}
                    className="flex items-center gap-3 text-sm text-slate-600 transition-colors hover:text-ink"
                  >
                    <span className="grid h-9 w-9 place-items-center rounded-full border border-brand-500/30 text-brand-600">
                      <Mail className="h-4 w-4" />
                    </span>
                    <span className="truncate">{site.email}</span>
                  </a>
                  <a
                    href={site.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setOpen(false)}
                    className="flex items-center gap-3 text-sm text-slate-600 transition-colors hover:text-ink"
                  >
                    <span className="grid h-9 w-9 place-items-center rounded-full border border-brand-500/30 text-brand-600">
                      <Instagram className="h-4 w-4" />
                    </span>
                    <span className="truncate">@{site.instagramHandle}</span>
                  </a>
                </div>

                <div className="mt-5 flex flex-col gap-3">
                  <Link
                    href="#contact"
                    onClick={() => setOpen(false)}
                    className="btn-primary w-full"
                  >
                    Get a Quote <ArrowRight className="h-4 w-4" />
                  </Link>
                  <a
                    href={site.social.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setOpen(false)}
                    className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-3 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5"
                  >
                    <MessageCircle className="h-4 w-4" /> WhatsApp
                  </a>
                </div>
              </div>
            </motion.aside>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
