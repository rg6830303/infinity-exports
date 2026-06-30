import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import ExportProcessFlow from "@/components/ExportProcessFlow";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { site, exportProcess, reassurance, whatsappCta } from "@/lib/site";

export const metadata: Metadata = {
  title: "Export Process",
  description:
    "The full 11-step export process explained for international buyers — from buyer inquiry and quotation to production, quality inspection, packing, container loading, shipping, documents and delivery.",
  alternates: { canonical: "/export-process" },
  openGraph: {
    title: "Export Process | Infinity Exports",
    description:
      "The complete 11-step export workflow, explained for international buyers sourcing from India.",
    url: `${site.url}/export-process`,
  },
};

const visuals = [
  {
    src: "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3",
    alt: "Export containers stacked at a port terminal",
  },
  {
    src: "https://images.pexels.com/photos/32845671/pexels-photo-32845671.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    alt: "Quality inspection of goods before export packing",
  },
  {
    src: "https://images.unsplash.com/photo-1587149185211-28a2ef4c9a10",
    alt: "Crane loading shipping containers onto a vessel",
  },
];

export default function ExportProcessPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "Export process for buyers sourcing from India",
    description:
      "The full 11-step export workflow Infinity Exports coordinates for international buyers.",
    step: exportProcess.map((s) => ({
      "@type": "HowToStep",
      position: s.num,
      name: s.title,
      text: s.meaning,
    })),
  };

  return (
    <>
      <Navbar />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PageHeader
        eyebrow="Export Process"
        title="The full export process, step by step"
        description="If you're new to importing from India, here's exactly how it works — eleven transparent steps from your first inquiry to delivery at your door. Tap any step to see what it means, what you provide and what we handle."
      >
        <Link href="/requirement" className="btn-primary">
          Start Export Inquiry <ArrowRight className="h-4 w-4" />
        </Link>
        <a
          href={whatsappCta}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-ghost"
        >
          <WhatsAppIcon className="h-4 w-4" /> Ask on WhatsApp
        </a>
      </PageHeader>

      <main className="bg-white">
        <section className="container-x py-16 lg:py-20">
          <div className="grid gap-4 sm:grid-cols-3">
            {visuals.map((v) => (
              <div
                key={v.src}
                className="overflow-hidden rounded-2xl border border-ink/10 shadow-soft"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={v.src}
                  alt={v.alt}
                  loading="lazy"
                  className="h-48 w-full object-cover"
                />
              </div>
            ))}
          </div>

          <div className="mx-auto mt-10 flex max-w-3xl flex-wrap items-center justify-center gap-2">
            {reassurance.map((r) => (
              <span
                key={r}
                className="rounded-full border border-ink/10 bg-brand-50/70 px-3.5 py-1.5 text-xs font-medium text-brand-700"
              >
                {r}
              </span>
            ))}
          </div>

          <div className="mt-16">
            <ExportProcessFlow variant="full" />
          </div>

          <div className="mt-16 flex flex-col items-center justify-between gap-5 rounded-3xl border border-brand-900/20 bg-gradient-to-br from-brand-700 via-brand-800 to-brand-900 px-7 py-8 text-white shadow-card sm:flex-row">
            <div>
              <p className="font-display text-xl font-bold">
                Ready to begin your export inquiry?
              </p>
              <p className="mt-1 max-w-md text-sm text-brand-100">
                Share your commodity, quantity, destination port and Incoterm —
                we&apos;ll take it from step one.
              </p>
            </div>
            <Link
              href="/requirement"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-brand-800 transition-transform hover:-translate-y-0.5"
            >
              Start Export Inquiry <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
