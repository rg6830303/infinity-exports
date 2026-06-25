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

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-ink/5 bg-white/80 py-2 shadow-soft backdrop-blur-xl"
          : "bg-transparent py-4"
      }`}
    >
      <nav className="container-x flex items-center justify-between">
        <Link href="#home" className="flex items-center gap-3">
          <div className="relative h-11 w-11 overflow-hidden rounded-xl ring-1 ring-ink/10">
            <Image
              src="/images/logo.jpg"
              alt="Infinity Exports logo"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="leading-tight">
            <span className="block font-display text-lg font-bold tracking-tight text-ink">
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
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="rounded-lg p-2 text-ink lg:hidden"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden lg:hidden"
          >
            <div className="container-x flex flex-col gap-1 pb-5 pt-3">
              {links.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-4 py-3 text-base font-medium text-ink-muted transition-colors hover:bg-brand-50 hover:text-brand-700"
                >
                  {l.label}
                </Link>
              ))}
              <Link
                href="#contact"
                onClick={() => setOpen(false)}
                className="btn-primary mt-2 w-full"
              >
                Get a Quote
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
