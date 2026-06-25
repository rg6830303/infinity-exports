"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import { site } from "@/lib/site";

const links = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#products", label: "Products" },
  { href: "#process", label: "Process" },
  { href: "#contact", label: "Contact" },
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
  const dark = true; // dark theme site-wide → always light nav content

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        solid
          ? "border-b border-white/10 bg-[#070b16]/90 py-3 shadow-soft backdrop-blur-md"
          : "bg-transparent py-4"
      }`}
    >
      <nav className="container-x flex items-center justify-between">
        <Link
          href="#home"
          onClick={() => setOpen(false)}
          className="flex items-center gap-3"
        >
          <div className="relative h-10 w-10 overflow-hidden rounded-xl ring-1 ring-white/20 sm:h-11 sm:w-11">
            <Image
              src="/images/logo.jpg"
              alt="Infinity Exports logo"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="leading-tight">
            <span
              className={`block font-display text-base font-bold tracking-tight sm:text-lg ${
                dark ? "text-white" : "text-ink"
              }`}
            >
              INFINITY
            </span>
            <span
              className={`block text-[10px] font-semibold uppercase tracking-[0.34em] ${
                dark ? "text-brand-300" : "text-brand-600"
              }`}
            >
              Exports
            </span>
          </div>
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                dark
                  ? "text-white/75 hover:bg-white/10 hover:text-white"
                  : "text-ink-muted hover:bg-brand-50 hover:text-brand-700"
              }`}
            >
              {l.label}
            </Link>
          ))}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={`tel:${site.phoneRaw}`}
            className={
              dark
                ? "inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/[0.04] px-5 py-2.5 text-sm font-semibold text-white transition-all hover:border-white/40"
                : "btn-ghost"
            }
          >
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
          className={`-mr-2 rounded-lg p-2 lg:hidden ${
            dark ? "text-white" : "text-ink"
          }`}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile menu: full-screen solid sheet so nothing shows through */}
      <AnimatePresence>
        {open && (
          <>
            <motion.button
              key="backdrop"
              aria-hidden
              tabIndex={-1}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 top-[var(--nav-h,64px)] -z-10 bg-black/40 backdrop-blur-sm lg:hidden"
            />
            <motion.div
              key="sheet"
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.22, ease: "easeOut" }}
              className="absolute inset-x-0 top-full border-b border-white/10 bg-[#070b16]/95 shadow-card backdrop-blur-xl lg:hidden"
            >
              <div className="container-x flex flex-col gap-1 py-4">
                {links.map((l) => (
                  <Link
                    key={l.href}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="rounded-xl px-4 py-3 text-base font-medium text-white/80 transition-colors hover:bg-white/10 hover:text-white"
                  >
                    {l.label}
                  </Link>
                ))}
                <div className="mt-3 flex flex-col gap-3 border-t border-white/10 pt-4">
                  <a
                    href={`tel:${site.phoneRaw}`}
                    onClick={() => setOpen(false)}
                    className="btn-ghost w-full"
                  >
                    <Phone className="h-4 w-4" />
                    {site.phone}
                  </a>
                  <Link
                    href="#contact"
                    onClick={() => setOpen(false)}
                    className="btn-primary w-full"
                  >
                    Get a Quote
                  </Link>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
