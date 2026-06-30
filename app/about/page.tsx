import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, MapPin } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "About Infinity Exports — an India-based export & trade-solutions partner helping international buyers source from India with sourcing, supplier coordination, quality, documentation and compliance support.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About | Infinity Exports",
    description:
      "An India-based export & trade-solutions partner for international buyers.",
    url: `${site.url}/about`,
  },
};

const values = [
  {
    t: "Transparency first",
    d: "Clear, itemised quotes and a documented workflow — no hidden costs, no black boxes.",
  },
  {
    t: "Buyer-first handling",
    d: "We review every requirement before quoting, so the response actually fits your need.",
  },
  {
    t: "End-to-end coordination",
    d: "Sourcing, supplier alignment, quality, packing and documentation — coordinated under one roof.",
  },
  {
    t: "Single point of contact",
    d: "One responsive partner guiding your order from first enquiry to dispatch.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <PageHeader
        eyebrow="About the company"
        title="An India-based bridge between buyers and Indian suppliers"
        description={`${site.name} helps international buyers source from India with confidence — handling sourcing, supplier coordination, quality and packaging, export documentation and trade compliance guidance, end to end.`}
      />
      <main className="bg-white text-ink">
        <section className="container-x grid gap-10 py-16 lg:grid-cols-2 lg:py-20">
          <div>
            <h2 className="font-display text-2xl font-bold text-ink">
              Who we are
            </h2>
            <div className="mt-4 space-y-4 text-base leading-relaxed text-slate-600">
              <p>
                {site.name} is an India-based export and trade-solutions partner.
                We work across agro &amp; food products, textiles, handicrafts,
                industrial goods, leather and chemicals &amp; pharma inputs —
                coordinating sourcing from a network of Indian suppliers and
                managing the requirement through to dispatch.
              </p>
              <p>
                Our focus is simple: make sourcing from India dependable. That
                means honest pricing, requirement review before any quote,
                quality and packing coordination, compliant documentation and a
                single point of contact who owns your order end to end. We are a
                trade-solutions partner — not a freight-forwarding company.
              </p>
            </div>

            <div className="mt-8 flex items-start gap-3 rounded-2xl border border-ink/10 bg-brand-50/60 p-5">
              <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-brand-600" />
              <div className="text-sm leading-relaxed text-slate-700">
                {site.address.lines.join(" ")}
              </div>
            </div>
          </div>

          <div>
            <h2 className="font-display text-2xl font-bold text-ink">
              What we value
            </h2>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {values.map((v) => (
                <div
                  key={v.t}
                  className="rounded-2xl border border-ink/10 bg-white p-5 shadow-soft"
                >
                  <CheckCircle2 className="h-5 w-5 text-brand-600" />
                  <h3 className="mt-3 font-display text-base font-bold text-ink">
                    {v.t}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-slate-600">
                    {v.d}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="container-x pb-16 lg:pb-20">
          <div className="flex flex-col items-center justify-between gap-5 rounded-3xl border border-ink/10 bg-gradient-to-r from-brand-100 via-brand-50 to-transparent px-7 py-8 text-center sm:flex-row sm:text-left">
            <div>
              <h2 className="font-display text-2xl font-bold text-ink">
                Ready to source from India?
              </h2>
              <p className="mt-1 text-slate-600">
                Submit your requirement — we&apos;ll review it and reply with a
                clear plan.
              </p>
            </div>
            <Link href="/requirement" className="btn-primary shrink-0">
              Submit Requirement <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
