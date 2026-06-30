"use client";

import { motion } from "framer-motion";
import { Search, ExternalLink, MapPin, Star, Check, Globe2 } from "lucide-react";
import Reveal from "./Reveal";
import { site, googlePresence } from "@/lib/site";

/**
 * Google Search / Business presence block. Reused on the homepage section and
 * the /google-presence page. Shows a tasteful mock of a Google result and the
 * verifiable links — without exposing precise private details.
 */
export default function GooglePresenceContent() {
  return (
    <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
      {/* Google result style card */}
      <Reveal direction="right">
        <div className="relative overflow-hidden rounded-3xl border border-ink/10 bg-white p-6 shadow-card sm:p-7">
          <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-brand-500/10 blur-3xl" />
          <div className="relative flex items-center gap-3 rounded-full border border-ink/10 bg-white px-4 py-2.5 shadow-soft">
            <Search className="h-4 w-4 text-slate-400" />
            <span className="text-sm text-slate-600">Infinity Exports Kolkata</span>
            <span className="ml-auto flex gap-1">
              <span className="h-2.5 w-2.5 rounded-full bg-[#4285F4]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#EA4335]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#FBBC05]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#34A853]" />
            </span>
          </div>

          <div className="relative mt-5 rounded-2xl border border-ink/10 bg-white p-5">
            <div className="flex items-center gap-2 text-xs text-slate-500">
              <span className="grid h-6 w-6 place-items-center rounded-full bg-brand-50 text-brand-600">
                <Globe2 className="h-3.5 w-3.5" />
              </span>
              <span>{site.name} · infinityexports.org</span>
            </div>
            <p className="mt-2 font-display text-lg font-bold text-[#1a0dab]">
              {site.name} — India Export &amp; Trade Solutions
            </p>
            <p className="mt-1 flex items-center gap-2 text-sm text-slate-600">
              <MapPin className="h-3.5 w-3.5 text-brand-600" /> {site.location}
            </p>
            <div className="mt-2 flex items-center gap-1 text-sm text-[#fbbc05]">
              <Star className="h-4 w-4 fill-current" />
              <Star className="h-4 w-4 fill-current" />
              <Star className="h-4 w-4 fill-current" />
              <Star className="h-4 w-4 fill-current" />
              <Star className="h-4 w-4 fill-current" />
              <span className="ml-1 text-xs text-slate-500">
                Business Profile on Google
              </span>
            </div>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">
              {site.shortDescription}
            </p>
          </div>
        </div>
      </Reveal>

      {/* Trust copy + CTAs */}
      <Reveal>
        <div>
          <ul className="space-y-3">
            {googlePresence.points.map((p) => (
              <li key={p} className="flex items-start gap-3">
                <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-brand-100 text-brand-700">
                  <Check className="h-3.5 w-3.5" strokeWidth={2.5} />
                </span>
                <span className="text-sm leading-relaxed text-slate-600">{p}</span>
              </li>
            ))}
          </ul>

          <div className="mt-7 flex flex-wrap gap-3">
            <motion.a
              href={site.googleSearch}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -2 }}
              data-testid="google-search-cta"
              className="btn-primary"
            >
              <Search className="h-4 w-4" /> Find Infinity Exports on Google
            </motion.a>
            <a
              href={site.googleBusiness}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="google-business-cta"
              className="btn-ghost"
            >
              <ExternalLink className="h-4 w-4" /> Google Business Profile
            </a>
            <a
              href={site.googleMaps}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="google-maps-cta"
              className="btn-ghost"
            >
              <MapPin className="h-4 w-4" /> View on Google Maps
            </a>
          </div>
        </div>
      </Reveal>
    </div>
  );
}
