"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import {
  Menu,
  X,
  Mail,
  MessageCircle,
  ArrowRight,
  Instagram,
  Phone,
} from "lucide-react";
import { site } from "@/lib/site";
import GlobeMark from "./GlobeMark";

const links = [
  { href: "/services", label: "Services" },
  { href: "/products", label: "Products" },
  { href: "/process", label: "Process" },
  { href: "/export-process", label: "Export Process" },
  { href: "/certifications", label: "Certifications" },
  { href: "/google-presence", label: "Google", labelFull: "Google Presence" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const solid = scrolled || open;
  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        data-testid="navbar"
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          solid
            ? "border-b border-ink/10 bg-white/90 py-3 shadow-soft backdrop-blur-md"
            : "bg-transparent py-4"
        }`}
      >
        <nav className="container-x flex items-center justify-between gap-4">
          <Link
            href="/"
            onClick={() => setOpen(false)}
            data-testid="navbar-logo"
            className="flex items-center gap-2.5"
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
            <span className="hidden h-9 w-9 items-center justify-center rounded-lg bg-brand-50 text-brand-600 ring-1 ring-brand-500/15 sm:flex">
              <GlobeMark className="h-5 w-5" spin />
            </span>
            <div className="leading-tight">
              <span className="block font-display text-base font-bold tracking-tight text-ink sm:text-lg">
                INFINITY
              </span>
              <span className="block text-[10px] font-semibold uppercase tracking-[0.34em] text-brand-600">
                Exports
              </span>
            </div>
          </Link>

          <div className="hidden items-center gap-0.5 xl:flex">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                data-testid={`nav-link-${l.label.toLowerCase().replace(/\s+/g, "-")}`}
                className={`rounded-full px-3 py-2 text-[13px] font-medium transition-colors ${
                  isActive(l.href)
                    ? "bg-brand-50 text-brand-700"
                    : "text-ink-muted hover:bg-brand-50 hover:text-brand-700"
                }`}
              >
                {l.label}
              </Link>
            ))}
          </div>

          <div className="hidden items-center gap-2 xl:flex">
            <Link
              href="/services"
              data-testid="navbar-cta-services"
              className="btn-primary !px-5 !py-2.5"
            >
              Our Services <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <button
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            data-testid="navbar-menu-toggle"
            onClick={() => setOpen((v) => !v)}
            className="-mr-2 rounded-lg p-2 text-ink xl:hidden"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </nav>
      </motion.header>

      <AnimatePresence>
        {open && (
          <div className="fixed inset-0 z-[70] xl:hidden">
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="absolute inset-0 bg-ink/60 backdrop-blur-sm"
            />

            <motion.aside
              key="drawer"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 320, damping: 34 }}
              data-testid="mobile-drawer"
              className="absolute right-0 top-0 flex h-full w-[88%] max-w-sm flex-col overflow-y-auto border-l border-ink/10 bg-white shadow-[-30px_0_60px_-20px_rgba(14,24,68,0.22)]"
            >
              <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-brand-500/15 blur-3xl" />
              <GlobeMark
                spin
                className="pointer-events-none absolute -right-10 top-24 h-44 w-44 text-brand-500/10"
              />

              <div className="relative flex items-center justify-between border-b border-ink/10 px-6 py-5">
                <div className="flex items-center gap-2.5">
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

              <nav className="relative flex-1 px-4 py-5">
                <p className="px-3 pb-2 font-mono text-[10px] uppercase tracking-[0.3em] text-ink/40">
                  Menu
                </p>
                {links.map((l, i) => (
                  <motion.div
                    key={l.href}
                    initial={{ opacity: 0, x: 24 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.06 + i * 0.04 }}
                  >
                    <Link
                      href={l.href}
                      onClick={() => setOpen(false)}
                      data-testid={`mobile-nav-link-${l.label.toLowerCase().replace(/\s+/g, "-")}`}
                      className="group flex items-center justify-between rounded-2xl px-3 py-3 transition-colors hover:bg-brand-50"
                    >
                      <span className="flex items-center gap-3">
                        <span className="font-mono text-xs text-brand-500/70">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <span className="font-display text-lg font-semibold text-ink/85 transition-colors group-hover:text-brand-700">
                          {l.labelFull ?? l.label}
                        </span>
                      </span>
                      <ArrowRight className="h-4 w-4 -translate-x-1 text-ink/25 opacity-0 transition-all group-hover:translate-x-0 group-hover:text-brand-600 group-hover:opacity-100" />
                    </Link>
                  </motion.div>
                ))}
              </nav>

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
                    href="/services"
                    onClick={() => setOpen(false)}
                    className="btn-primary w-full"
                  >
                    Our Services <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link
                    href="/requirement"
                    onClick={() => setOpen(false)}
                    className="btn-ghost w-full"
                  >
                    Submit Requirement
                  </Link>
                </div>
              </div>
            </motion.aside>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
