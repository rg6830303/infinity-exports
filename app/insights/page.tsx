import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { articles } from "@/lib/articles";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Insights — Import & Export Guides | Infinity Exports",
  description:
    "Practical guides on sourcing from India, export documentation and Incoterms — from the Infinity Exports team.",
  alternates: { canonical: "/insights" },
  openGraph: {
    title: "Insights — Import & Export Guides | Infinity Exports",
    description:
      "Practical guides on sourcing from India, export documentation and Incoterms from Infinity Exports.",
    url: `${site.url}/insights`,
  },
};

function fmt(date: string) {
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

export default function InsightsPage() {
  return (
    <>
      <Navbar />
      <main className="bg-white pt-28 text-ink">
        <section className="container-x py-12 lg:py-16">
          <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-brand-600">
            Insights
          </p>
          <h1 className="mt-4 max-w-3xl font-display text-4xl font-extrabold tracking-tightest sm:text-5xl">
            Guides for sourcing &amp; exporting with India
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-slate-600">
            Practical, no-jargon advice on sourcing, documentation, Incoterms and
            cross-border trade — written by the team that does it every day.
          </p>
        </section>

        <section className="container-x grid gap-6 border-t border-ink/10 py-12 sm:grid-cols-2 lg:grid-cols-3 lg:py-16">
          {articles.map((a) => (
            <Link
              key={a.slug}
              href={`/insights/${a.slug}`}
              className="group flex flex-col rounded-2xl border border-ink/10 bg-white p-6 shadow-soft transition-all hover:-translate-y-1 hover:border-brand-400/50 hover:shadow-card"
            >
              <div className="flex items-center gap-3 text-xs text-slate-500">
                <span>{fmt(a.date)}</span>
                <span className="inline-flex items-center gap-1">
                  <Clock className="h-3.5 w-3.5" /> {a.readMins} min read
                </span>
              </div>
              <h2 className="mt-3 font-display text-lg font-bold text-ink group-hover:text-brand-700">
                {a.title}
              </h2>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">
                {a.description}
              </p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-700">
                Read guide
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </section>
      </main>
      <Footer />
    </>
  );
}
