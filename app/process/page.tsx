import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Building2, Boxes, Anchor, Scale } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import ProcessTimeline from "@/components/ProcessTimeline";
import ExportProcessFlow from "@/components/ExportProcessFlow";
import Checklist from "@/components/Checklist";
import { site, reassurance, exportProcess } from "@/lib/site";

export const metadata: Metadata = {
  title: "Process",
  description:
    "How Infinity Exports works — a transparent, buyer-first process from enquiry to dispatch, including the complete 11-step export workflow: quotation, production, inspection, packing, container loading, shipping, documents and delivery.",
  alternates: { canonical: "/process" },
  openGraph: {
    title: "Process | Infinity Exports",
    description:
      "A transparent, buyer-first trade process from enquiry to dispatch — with the full 11-step export workflow.",
    url: `${site.url}/process`,
  },
};

const visuals = [
  {
    src: "https://images.unsplash.com/photo-1775433205046-86e060feff06",
    alt: "Sourcing agro commodities and spices from India for export",
    cap: "Sourcing",
  },
  {
    src: "https://images.pexels.com/photos/32845671/pexels-photo-32845671.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    alt: "Quality inspection of goods in a factory before export",
    cap: "Quality coordination",
  },
  {
    src: "https://images.unsplash.com/photo-1763752194641-3c5638aec65e",
    alt: "Export-grade packing and loading of goods onto a vehicle",
    cap: "Packing & dispatch",
  },
  {
    src: "https://images.pexels.com/photos/262353/pexels-photo-262353.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    alt: "Container ship carrying export cargo across the ocean",
    cap: "Shipping coordination",
  },
];

const buyerNeeds = [
  "Company name and country",
  "Commodity and grade / specification",
  "Quantity and packing preference",
  "Destination country and port",
  "Preferred Incoterm (FOB, CIF or CFR)",
  "WhatsApp and email for follow-up",
];

export default function ProcessPage() {
  // The 11-step export workflow lives on this page now, so the HowTo
  // structured data moves here with it.
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
        eyebrow="Process"
        title="A transparent, buyer-first trade process"
        description="From your first enquiry to dispatch — clear stages with a single point of contact, and the complete 11-step export workflow further down this page. Tap any step for the detail."
        scene="flow"
      >
        <Link href="/requirement" className="btn-primary">
          Start Requirement <ArrowRight className="h-4 w-4" />
        </Link>
        <Link href="#export-workflow" className="btn-ghost">
          Jump to the 11-step workflow
        </Link>
      </PageHeader>

      <main className="bg-white">
        <section className="container-x py-16 lg:py-20">
          <div className="mb-10 flex flex-wrap gap-2">
            {reassurance.map((r) => (
              <span
                key={r}
                className="rounded-full border border-ink/10 bg-brand-50/70 px-3.5 py-1.5 text-xs font-medium text-brand-700"
              >
                {r}
              </span>
            ))}
          </div>

          {/* illustrative visuals */}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {visuals.map((v) => (
              <figure
                key={v.cap}
                className="group relative overflow-hidden rounded-2xl border border-ink/10 shadow-soft"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={v.src}
                  alt={v.alt}
                  loading="lazy"
                  className="h-44 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/80 to-transparent p-3 text-sm font-semibold text-white">
                  {v.cap}
                </figcaption>
              </figure>
            ))}
          </div>

          <div className="mt-16">
            <ProcessTimeline />
          </div>

          <div className="mt-16 grid gap-6 lg:grid-cols-2 lg:items-start">
            <Checklist
              title="What you need to provide"
              items={buyerNeeds}
              icon={<Building2 className="h-5 w-5 text-brand-600" />}
            />
            <div className="rounded-3xl border border-ink/10 bg-brand-50/50 p-7">
              <h2 className="font-display text-lg font-bold text-ink">
                Why this process protects you
              </h2>
              <ul className="mt-4 space-y-3 text-sm leading-relaxed text-slate-600">
                <li className="flex items-start gap-3">
                  <Scale className="mt-0.5 h-5 w-5 shrink-0 text-brand-600" />
                  We confirm specification and terms before quoting, so your
                  quote is accurate and comparable.
                </li>
                <li className="flex items-start gap-3">
                  <Boxes className="mt-0.5 h-5 w-5 shrink-0 text-brand-600" />
                  Quality and packing are coordinated before dispatch, with
                  evidence shared where applicable.
                </li>
                <li className="flex items-start gap-3">
                  <Anchor className="mt-0.5 h-5 w-5 shrink-0 text-brand-600" />
                  Documentation is matched to your commodity and destination for
                  clean clearance.
                </li>
              </ul>
              <Link
                href="#export-workflow"
                className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600 hover:underline"
              >
                Explore the full 11-step export workflow below
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* Full export workflow — merged from the former Export Process page */}
        <section
          id="export-workflow"
          className="border-t border-ink/10 bg-[#f2f9f6] scroll-mt-24"
        >
          <div className="container-x py-16 lg:py-20">
            <div className="mx-auto max-w-2xl text-center">
              <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-brand-600">
                The full export workflow
              </p>
              <h2 className="mt-4 font-display text-3xl font-bold text-ink sm:text-4xl">
                Eleven steps, zero surprises
              </h2>
              <p className="mt-4 text-base leading-relaxed text-slate-600">
                New to importing from India? This is exactly how your order
                moves — from first inquiry to delivery at your door. Tap any
                step to see what it means, what you provide and what we handle.
              </p>
            </div>

            <div className="mt-14">
              <ExportProcessFlow variant="full" />
            </div>

            <div className="mt-16 flex flex-col items-center justify-between gap-5 rounded-3xl border border-brand-900/20 bg-gradient-to-br from-brand-700 via-brand-800 to-brand-900 px-7 py-8 text-white shadow-card sm:flex-row">
              <div>
                <p className="font-display text-xl font-bold">
                  Ready to begin your export inquiry?
                </p>
                <p className="mt-1 max-w-md text-sm text-brand-100">
                  Share your commodity, quantity, destination port and Incoterm
                  — we&apos;ll take it from step one.
                </p>
              </div>
              <Link
                href="/requirement"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-brand-800 transition-transform hover:-translate-y-0.5"
              >
                Start Export Inquiry <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
