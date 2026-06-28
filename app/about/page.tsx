import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, MapPin } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Infinity Exports — Import & Export Company in Kolkata",
  description:
    "Learn about Infinity Exports, a Kolkata-based import & export company led by Krishna Kumar. Verified global sourcing, freight, customs documentation and dependable trade across 25+ countries.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About Infinity Exports — Import & Export Company in Kolkata",
    description:
      "A Kolkata-based import & export company delivering reliable global trade — sourcing, freight, documentation and logistics.",
    url: `${site.url}/about`,
  },
};

const values = [
  {
    t: "Integrity first",
    d: "Transparent, itemised pricing with no hidden costs — at every stage of the trade.",
  },
  {
    t: "Verified network",
    d: "We work only with vetted manufacturers and carriers, protecting quality and your capital.",
  },
  {
    t: "End-to-end ownership",
    d: "Sourcing, quality control, documentation and last-mile logistics handled under one roof.",
  },
  {
    t: "Single point of contact",
    d: "One dedicated partner guiding your shipment from first enquiry to final delivery.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="bg-white pt-28 text-ink">
        <section className="container-x py-12 lg:py-16">
          <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-brand-600">
            About the company
          </p>
          <h1 className="mt-4 max-w-3xl font-display text-4xl font-extrabold tracking-tightest text-ink sm:text-5xl">
            A reliable bridge between Indian manufacturers and global buyers
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-600">
            {site.name} is a Kolkata-based import &amp; export company built on
            integrity and precision. We handle the complexity of cross-border
            trade — sourcing, compliance, logistics and delivery — so businesses
            around the world can buy from and sell to India with confidence.
          </p>
        </section>

        <section className="container-x grid gap-10 border-t border-ink/10 py-12 lg:grid-cols-2 lg:py-16">
          <div>
            <h2 className="font-display text-2xl font-bold text-ink">
              Who we are
            </h2>
            <div className="mt-4 space-y-4 text-base leading-relaxed text-slate-600">
              <p>
                Led by <strong className="text-ink">{site.partner}</strong>,
                {" "}{site.name} serves importers and exporters across more than
                25 countries. From spices, grains and textiles to industrial
                goods, leather and specialty chemicals, we source quality
                products from a vetted manufacturer network and move them
                reliably by sea and air.
              </p>
              <p>
                Our focus is simple: make global trade dependable. That means
                honest pricing, rigorous quality control, compliant
                documentation and a single point of contact who owns your
                shipment end to end.
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

        <section className="container-x py-12 lg:py-16">
          <div className="flex flex-col items-center justify-between gap-5 rounded-3xl border border-ink/10 bg-gradient-to-r from-brand-100 via-brand-50 to-transparent px-7 py-8 text-center sm:flex-row sm:text-left">
            <div>
              <h2 className="font-display text-2xl font-bold text-ink">
                Ready to trade with India?
              </h2>
              <p className="mt-1 text-slate-600">
                Tell us what you need to import or export — we&apos;ll reply with
                a clear plan.
              </p>
            </div>
            <Link href="/#contact" className="btn-primary shrink-0">
              Request a Quote <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
