import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, MapPin } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SceneBackdrop from "@/components/SceneBackdrop";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Infinity Exports — Global Sourcing, Simplified",
  description:
    "The story and method behind Infinity Exports: a Kolkata-headquartered trade desk that simplifies global sourcing — supplier vetting, quality gates, documentation and freight across 25+ countries.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About Infinity Exports — Global Sourcing, Simplified",
    description:
      "How a single trade desk in Kolkata simplifies sourcing, quality, documentation and freight for buyers in 25+ countries.",
    url: `${site.url}/about`,
  },
};

const values = [
  {
    t: "Integrity first",
    d: "Every quote is itemised down to the last handling charge. If a cost changes, you hear it from us before it hits the invoice.",
  },
  {
    t: "Verified network",
    d: "Factories are visited, capacity-checked and sample-tested before they ever see your order — not after.",
  },
  {
    t: "End-to-end ownership",
    d: "Sourcing, inspection, paperwork and freight sit with one accountable team, so nothing falls between vendors.",
  },
  {
    t: "Single point of contact",
    d: "You get one named person who knows your shipment's history — not a ticket queue.",
  },
];

const milestones = [
  {
    k: "The desk",
    v: "Headquartered at Abacus, New Town — Kolkata's emerging commercial district — with sourcing reach across India's producing belts.",
  },
  {
    k: "The method",
    v: "Specification in, verified options out. Every deal runs the same gated path: sample → inspection → documents → dispatch.",
  },
  {
    k: "The portfolio",
    v: "Five focused verticals — agro & food, textiles & jute, industrial goods, chemicals & pharma inputs, and marine & seafood.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="relative overflow-hidden bg-white pt-28 text-ink">
        {/* page-signature 3D vignette — floating cargo stack */}
        <SceneBackdrop
          variant="containers"
          className="absolute right-[-3%] top-8 z-0 hidden h-[26rem] w-[30rem] opacity-80 lg:block"
        />
        <div className="pointer-events-none absolute inset-0 bg-grid-light opacity-[0.5] [background-size:60px_60px] [mask-image:radial-gradient(ellipse_at_top,black,transparent_65%)]" />

        <section className="container-x relative py-12 lg:py-16">
          <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-brand-600">
            About the company
          </p>
          <h1 className="mt-4 max-w-2xl font-display text-4xl font-extrabold tracking-tightest text-ink sm:text-5xl">
            Global sourcing, simplified from one accountable desk
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-600">
            Cross-border trade fails in the gaps — between the factory and the
            inspector, the forwarder and the bank. {site.name} exists to close
            those gaps: one team that owns your order from specification to
            delivered container.
          </p>
        </section>

        <section className="container-x relative grid gap-10 border-t border-ink/10 py-12 lg:grid-cols-2 lg:py-16">
          <div>
            <h2 className="font-display text-2xl font-bold text-ink">
              How we work
            </h2>
            <div className="mt-4 space-y-4 text-base leading-relaxed text-slate-600">
              <p>
                Led by <strong className="text-ink">{site.partner}</strong>,
                our desk pairs buyers in 25+ countries with producers across
                India&apos;s sourcing belts — Nashik onions, Bengal jute,
                engineering clusters, coastal seafood plants. We don&apos;t
                broker introductions; we run the deal.
              </p>
              <p>
                That means a sourcing brief instead of a forwarded catalogue,
                an inspection gate before your balance payment, a reconciled
                document set before the vessel sails, and tracking until the
                cargo clears your port.
              </p>
            </div>

            <div className="mt-8 space-y-4">
              {milestones.map((m) => (
                <div
                  key={m.k}
                  className="rounded-2xl border border-ink/10 bg-white p-5 shadow-soft"
                >
                  <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.28em] text-brand-600">
                    {m.k}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    {m.v}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8 flex items-start gap-3 rounded-2xl border border-ink/10 bg-brand-50/60 p-5">
              <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-brand-600" />
              <div className="text-sm leading-relaxed text-slate-700">
                {site.address.lines.join(" ")} · GSTIN: {site.gst}
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
                Put a specification in front of us
              </h2>
              <p className="mt-1 text-slate-600">
                We&apos;ll come back with verified options, an itemised landed
                cost and a realistic timeline.
              </p>
            </div>
            <Link href="/requirement" className="btn-primary shrink-0">
              Request a Quote <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
