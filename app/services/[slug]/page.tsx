import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ListChecks,
  Users,
  ClipboardList,
  Workflow,
  ArrowUpRight,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import Checklist from "@/components/Checklist";
import RequirementCTA from "@/components/RequirementCTA";
import { services, products, site } from "@/lib/site";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const s = services.find((x) => x.slug === params.slug);
  if (!s) return {};
  return {
    title: s.title,
    description: s.tagline,
    alternates: { canonical: `/services/${s.slug}` },
    openGraph: {
      title: `${s.title} | ${site.name}`,
      description: s.tagline,
      url: `${site.url}/services/${s.slug}`,
    },
  };
}

export default function ServiceDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const s = services.find((x) => x.slug === params.slug);
  if (!s) notFound();

  const related = s.related
    .map((slug) => products.find((p) => p.slug === slug))
    .filter(Boolean);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: s.title,
    description: s.tagline,
    serviceType: s.title,
    areaServed: "Worldwide",
    provider: { "@type": "Organization", name: site.name, url: site.url },
  };

  return (
    <>
      <Navbar />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PageHeader
        scene="containers"
        eyebrow="Service"
        title={s.title}
        description={s.overview}
        backHref="/services"
        backLabel="All services"
      />

      <main className="bg-white">
        <section className="container-x py-16 lg:py-20">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-brand-600">
            {s.tagline}
          </p>

          <div className="grid gap-6 sm:grid-cols-2">
            <Checklist
              title="What's included"
              items={s.includes}
              icon={<ListChecks className="h-5 w-5 text-brand-600" />}
            />
            <Checklist
              title="Who it's for"
              items={s.forWho}
              icon={<Users className="h-5 w-5 text-brand-600" />}
            />
            <Checklist
              title="What we'll need from you"
              items={s.buyerInfo}
              icon={<ClipboardList className="h-5 w-5 text-brand-600" />}
            />
            <Checklist
              title="How it works"
              items={s.process}
              icon={<Workflow className="h-5 w-5 text-brand-600" />}
            />
          </div>

          {related.length > 0 && (
            <div className="mt-12">
              <h2 className="font-display text-lg font-bold text-ink">
                Related product categories
              </h2>
              <div className="mt-4 grid gap-4 sm:grid-cols-3">
                {related.map(
                  (p) =>
                    p && (
                      <Link
                        key={p.slug}
                        href={`/products/${p.slug}`}
                        className="group flex items-center justify-between gap-3 rounded-2xl border border-ink/10 bg-white p-5 shadow-soft transition-colors hover:border-brand-400/50 hover:bg-brand-50/50"
                      >
                        <span>
                          <span className="block font-display text-base font-bold text-ink">
                            {p.name}
                          </span>
                          <span className="mt-1 block text-xs text-slate-500">
                            {p.tagline}
                          </span>
                        </span>
                        <ArrowUpRight className="h-5 w-5 shrink-0 text-ink/30 transition-colors group-hover:text-brand-600" />
                      </Link>
                    )
                )}
              </div>
            </div>
          )}

          <RequirementCTA service={s.slug} cta="Submit Requirement" />
        </section>
      </main>
      <Footer />
    </>
  );
}
