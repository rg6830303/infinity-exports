import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Clock, ShieldCheck, BadgeDollarSign } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Aurora from "@/components/Aurora";
import SceneBackdrop from "@/components/SceneBackdrop";
import Testimonials from "@/components/Testimonials";
import TradeEnquiryForm from "@/components/TradeEnquiryForm";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Request a Quote",
  description:
    "Request a free, itemised import/export quote from Infinity Exports. Tell us your product, volume, destination and Incoterm — we reply within a few hours on business days.",
  alternates: { canonical: "/quote" },
};

const assurances = [
  {
    icon: ShieldCheck,
    title: "Verified supply",
    desc: "Vetted manufacturers and pre-shipment QC on every order.",
  },
  {
    icon: BadgeDollarSign,
    title: "Transparent pricing",
    desc: "Clear, itemised landed cost — no hidden charges.",
  },
  {
    icon: Clock,
    title: "Fast turnaround",
    desc: "A response within a few hours on business days.",
  },
];

export default function QuotePage({
  searchParams,
}: {
  searchParams: { category?: string | string[] };
}) {
  const category =
    typeof searchParams.category === "string" ? searchParams.category : "";

  return (
    <>
      <Navbar />
      <main className="relative overflow-hidden bg-white pt-28">
        <Aurora className="opacity-50" />
        <div className="pointer-events-none absolute inset-0 bg-grid-light opacity-[0.6] [background-size:60px_60px] [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]" />
        {/* page-signature 3D vignette — orbiting trade rings */}
        <SceneBackdrop
          variant="orbits"
          className="absolute right-[-2%] top-2 z-0 hidden h-[24rem] w-[28rem] opacity-75 lg:block"
        />

        <div className="container-x relative pb-20 pt-6 lg:pb-28">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 transition-colors hover:text-brand-600"
          >
            <ArrowLeft className="h-4 w-4" /> Back to home
          </Link>

          <div className="mt-6 max-w-2xl">
            <span className="label-mono">
              <span className="opacity-60">00</span>
              <span className="h-px w-6 bg-current opacity-40" />
              Request a quote
            </span>
            <h1 className="mt-5 font-display text-3xl font-extrabold tracking-tightest text-ink sm:text-4xl lg:text-5xl">
              Get a free, itemised{" "}
              <span className="text-brand-600">trade quote</span>
            </h1>
            <p className="mt-4 text-base leading-relaxed text-slate-600">
              The more you tell us about your product, volume, destination and
              preferred terms, the faster and sharper your quote. Submit by
              email or send it straight to our desk on WhatsApp.
            </p>
          </div>

          <div className="mt-10 grid gap-8 lg:grid-cols-[1.6fr_1fr]">
            <div className="glass-card p-6 sm:p-8">
              <TradeEnquiryForm defaultCategory={category} />
            </div>

            <aside className="flex flex-col gap-4">
              {assurances.map((a) => (
                <div
                  key={a.title}
                  className="relative overflow-hidden rounded-2xl border border-ink/10 bg-white p-6 shadow-soft"
                >
                  <div
                    className="pointer-events-none absolute inset-0 bg-[url('/images/patterns/trade-pattern.svg')] bg-cover opacity-35"
                    aria-hidden
                  />
                  <div className="relative">
                    <a.icon className="h-7 w-7 text-brand-600" strokeWidth={1.6} />
                    <h2 className="mt-4 font-display text-base font-bold text-ink">
                      {a.title}
                    </h2>
                    <p className="mt-1 text-sm leading-relaxed text-slate-600">
                      {a.desc}
                    </p>
                  </div>
                </div>
              ))}

              {/* what buyers say */}
              <Testimonials compact />

              <div className="rounded-2xl border border-brand-900/20 bg-gradient-to-br from-brand-700 via-brand-800 to-brand-900 p-6 text-white shadow-card">
                <p className="font-display text-base font-bold">
                  Prefer to talk first?
                </p>
                <p className="mt-1 text-sm text-brand-100">
                  Call or WhatsApp us directly.
                </p>
                <a
                  href={`tel:${site.phoneRaw}`}
                  className="mt-4 inline-block font-semibold underline-offset-4 hover:underline"
                >
                  {site.phone}
                </a>
              </div>
            </aside>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
