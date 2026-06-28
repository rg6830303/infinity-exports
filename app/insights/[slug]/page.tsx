import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Clock } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { articles, getArticle } from "@/lib/articles";
import { site } from "@/lib/site";

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const a = getArticle(params.slug);
  if (!a) return {};
  return {
    title: `${a.title} | Infinity Exports`,
    description: a.description,
    keywords: a.keywords,
    alternates: { canonical: `/insights/${a.slug}` },
    openGraph: {
      title: a.title,
      description: a.description,
      url: `${site.url}/insights/${a.slug}`,
      type: "article",
      publishedTime: a.date,
    },
  };
}

function fmt(date: string) {
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function ArticlePage({
  params,
}: {
  params: { slug: string };
}) {
  const a = getArticle(params.slug);
  if (!a) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: a.title,
    description: a.description,
    datePublished: a.date,
    dateModified: a.date,
    inLanguage: "en",
    author: { "@type": "Organization", name: site.name, url: site.url },
    publisher: {
      "@type": "Organization",
      name: site.name,
      logo: {
        "@type": "ImageObject",
        url: `${site.url}/images/logo.jpg`,
      },
    },
    mainEntityOfPage: `${site.url}/insights/${a.slug}`,
  };

  return (
    <>
      <Navbar />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="bg-white pt-28 text-ink">
        <article className="container-x max-w-3xl py-12 lg:py-16">
          <Link
            href="/insights"
            className="inline-flex items-center gap-2 text-sm font-medium text-brand-700 hover:underline"
          >
            <ArrowLeft className="h-4 w-4" /> All insights
          </Link>

          <h1 className="mt-6 font-display text-3xl font-extrabold tracking-tightest text-ink sm:text-4xl">
            {a.title}
          </h1>
          <div className="mt-4 flex items-center gap-3 text-sm text-slate-500">
            <span>{fmt(a.date)}</span>
            <span className="inline-flex items-center gap-1">
              <Clock className="h-3.5 w-3.5" /> {a.readMins} min read
            </span>
          </div>

          <div className="mt-8 space-y-5">
            {a.body.map((b, i) => {
              if (b.type === "h2")
                return (
                  <h2
                    key={i}
                    className="pt-3 font-display text-xl font-bold text-ink sm:text-2xl"
                  >
                    {b.text}
                  </h2>
                );
              if (b.type === "ul")
                return (
                  <ul key={i} className="space-y-2 pl-1">
                    {b.items.map((it) => (
                      <li
                        key={it}
                        className="flex gap-3 text-base leading-relaxed text-slate-600"
                      >
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-500" />
                        {it}
                      </li>
                    ))}
                  </ul>
                );
              return (
                <p
                  key={i}
                  className="text-base leading-relaxed text-slate-600"
                >
                  {b.text}
                </p>
              );
            })}
          </div>

          <div className="mt-12 flex flex-col items-center justify-between gap-4 rounded-3xl border border-ink/10 bg-gradient-to-r from-brand-100 via-brand-50 to-transparent px-7 py-7 text-center sm:flex-row sm:text-left">
            <p className="font-display text-lg font-bold text-ink">
              Planning a shipment to or from India?
            </p>
            <Link href="/#contact" className="btn-primary shrink-0">
              Request a Quote <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
