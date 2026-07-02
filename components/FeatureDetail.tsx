import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  MessageCircle,
  PackageSearch,
  FileCheck2,
  Warehouse,
  ShieldCheck,
  Headset,
  Wheat,
  Shirt,
  Cog,
  FlaskConical,
  Fish,
  type LucideIcon,
} from "lucide-react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Aurora from "./Aurora";
import SceneBackdrop from "./SceneBackdrop";
import { site } from "@/lib/site";

const icons: Record<string, LucideIcon> = {
  PackageSearch,
  FileCheck2,
  Warehouse,
  ShieldCheck,
  Headset,
  Wheat,
  Shirt,
  Cog,
  FlaskConical,
  Fish,
};

export type DetailBlock = { heading: string; items: string[] };
export type DetailImage = { src: string; alt: string };

export default function FeatureDetail({
  eyebrow,
  title,
  overview,
  iconName,
  numberLabel,
  blocks,
  footnote,
  backHref,
  backLabel,
  quoteCategory,
  images,
}: {
  eyebrow: string;
  title: string;
  overview: string;
  iconName?: string;
  numberLabel?: string;
  blocks: DetailBlock[];
  footnote?: string;
  backHref: string;
  backLabel: string;
  quoteCategory?: string;
  images?: DetailImage[];
}) {
  const Icon = iconName ? icons[iconName] : undefined;
  const quoteHref = quoteCategory
    ? `/quote?category=${encodeURIComponent(quoteCategory)}`
    : "/quote";

  return (
    <>
      <Navbar />
      <main className="relative overflow-hidden bg-white pt-28">
        <Aurora className="opacity-50" />
        <div className="pointer-events-none absolute inset-0 bg-grid-light opacity-[0.6] [background-size:60px_60px] [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]" />
        {/* page-signature 3D vignette — freight-flow streams */}
        <SceneBackdrop
          variant="flow"
          className="absolute right-[-6%] top-4 z-0 hidden h-[22rem] w-[32rem] opacity-60 lg:block"
        />

        <div className="container-x relative pb-20 pt-6 lg:pb-28">
          <Link
            href={backHref}
            className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 transition-colors hover:text-brand-600"
          >
            <ArrowLeft className="h-4 w-4" /> {backLabel}
          </Link>

          {/* Header */}
          <div className="mt-6 flex items-start gap-5">
            {Icon ? (
              <span className="hidden h-14 w-14 shrink-0 place-items-center rounded-2xl border border-brand-500/30 text-brand-600 sm:grid">
                <Icon className="h-7 w-7" strokeWidth={1.6} />
              </span>
            ) : numberLabel ? (
              <span className="hidden h-14 w-14 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-brand-500 to-brand-700 font-display text-xl font-bold text-white shadow-glow sm:grid">
                {numberLabel}
              </span>
            ) : null}
            <div className="max-w-2xl">
              <span className="label-mono">{eyebrow}</span>
              <h1 className="mt-3 font-display text-3xl font-extrabold tracking-tightest text-ink sm:text-4xl lg:text-5xl">
                {title}
              </h1>
            </div>
          </div>

          <p className="mt-6 max-w-3xl text-base leading-relaxed text-slate-600 sm:text-lg">
            {overview}
          </p>

          {/* Photo strip */}
          {images && images.length > 0 && (
            <div
              className={`mt-10 grid gap-4 ${
                images.length > 1 ? "sm:grid-cols-2" : "max-w-2xl"
              }`}
            >
              {images.map((img) => (
                <div
                  key={img.src}
                  className="relative aspect-[16/10] overflow-hidden rounded-3xl border border-ink/10 shadow-card"
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, 640px"
                    className="object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/60 to-transparent p-4 pt-8 text-xs font-medium text-white">
                    {img.alt}
                  </span>
                </div>
              ))}
            </div>
          )}

          {/* Blocks */}
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {blocks.map((b) => (
              <div
                key={b.heading}
                className="rounded-3xl border border-ink/10 bg-white p-7 shadow-soft"
              >
                <h2 className="font-display text-lg font-bold text-ink">
                  {b.heading}
                </h2>
                <ul className="mt-4 space-y-3">
                  {b.items.map((it) => (
                    <li key={it} className="flex items-start gap-3">
                      <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-brand-100 text-brand-700">
                        <Check className="h-3.5 w-3.5" strokeWidth={2.5} />
                      </span>
                      <span className="text-sm leading-relaxed text-slate-600">
                        {it}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {footnote && (
            <p className="mt-6 max-w-3xl rounded-2xl border border-ink/10 bg-brand-50/60 px-5 py-4 text-sm leading-relaxed text-slate-600">
              {footnote}
            </p>
          )}

          {/* CTA band */}
          <div className="mt-12 flex flex-col items-center justify-between gap-5 rounded-3xl border border-brand-900/20 bg-gradient-to-br from-brand-700 via-brand-800 to-brand-900 px-7 py-8 text-white shadow-card sm:flex-row">
            <div>
              <p className="font-display text-xl font-bold">
                Ready to move on this?
              </p>
              <p className="mt-1 text-sm text-brand-100">
                Get a free, itemised quote — usually within a few hours.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                href={quoteHref}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-brand-800 transition-transform hover:-translate-y-0.5"
              >
                Request a Quote <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href={site.social.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
              >
                <MessageCircle className="h-4 w-4" /> WhatsApp
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
