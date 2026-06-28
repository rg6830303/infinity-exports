"use client";

import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin, MessageCircle, Phone, Instagram } from "lucide-react";
import { site } from "@/lib/site";

const nav = [
  { href: "/#about", label: "About" },
  { href: "/#services", label: "Services" },
  { href: "/#products", label: "Products" },
  { href: "/#process", label: "Process" },
  { href: "/#faq", label: "FAQ" },
  { href: "/#contact", label: "Contact" },
];

const socials = [
  { href: site.social.instagram, label: "Instagram", Icon: Instagram },
  { href: site.social.whatsapp, label: "WhatsApp", Icon: MessageCircle },
  { href: `mailto:${site.email}`, label: "Email", Icon: Mail },
  { href: `tel:${site.phoneRaw}`, label: "Call", Icon: Phone },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-ink/10 bg-[#eef2fb] text-ink">
      <div className="pointer-events-none absolute -top-24 left-1/2 h-64 w-[40rem] -translate-x-1/2 rounded-full bg-brand-500/12 blur-3xl" />
      <div className="container-x relative py-16">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr_1.2fr]">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-3">
              <div className="relative h-12 w-12 overflow-hidden rounded-xl ring-1 ring-ink/10">
                <Image
                  src="/images/logo.jpg"
                  alt="Infinity Exports logo"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="leading-tight">
                <span className="block font-display text-lg font-bold">
                  INFINITY EXPORTS
                </span>
                <span className="block text-[10px] font-semibold uppercase tracking-[0.3em] text-brand-600">
                  {site.tagline}
                </span>
              </div>
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-slate-600">
              {site.description}
            </p>
            {/* social icons */}
            <div className="mt-6 flex items-center gap-3">
              {socials.map(({ href, label, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="grid h-10 w-10 place-items-center rounded-full border border-ink/10 bg-white text-slate-600 shadow-soft transition-all hover:-translate-y-0.5 hover:border-brand-400/50 hover:bg-brand-50 hover:text-brand-700"
                >
                  <Icon className="h-[18px] w-[18px]" />
                </a>
              ))}
            </div>
          </div>

          {/* Nav */}
          <div>
            <h4 className="font-display text-sm font-bold uppercase tracking-wider text-ink">
              Quick Links
            </h4>
            <ul className="mt-5 space-y-3">
              {nav.map((n) => (
                <li key={n.href}>
                  <Link
                    href={n.href}
                    className="text-sm text-slate-600 transition-colors hover:text-brand-600"
                  >
                    {n.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-sm font-bold uppercase tracking-wider text-ink">
              Reach Us
            </h4>
            <ul className="mt-5 space-y-4 text-sm text-slate-600">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" />
                <a
                  href={site.address.maps}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-brand-600"
                >
                  {site.address.lines.join(" ")}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 shrink-0 text-brand-600" />
                <a href={`tel:${site.phoneRaw}`} className="hover:text-brand-600">
                  {site.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 shrink-0 text-brand-600" />
                <a href={`mailto:${site.email}`} className="hover:text-brand-600">
                  {site.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-ink/10 pt-6 text-center sm:flex-row sm:text-left">
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <p className="text-xs text-slate-500">
            Partner: {site.partner} • Kolkata, India
          </p>
        </div>
      </div>
    </footer>
  );
}
