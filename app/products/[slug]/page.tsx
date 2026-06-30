import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  Boxes,
  Package,
  ClipboardList,
  FileText,
  ShieldCheck,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import Checklist from "@/components/Checklist";
import RequirementCTA from "@/components/RequirementCTA";
import { products, site, PRICING_NOTE } from "@/lib/site";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const p = products.find((x) => x.slug === params.slug);
  if (!p) return {};
  return {
    title: p.name,
    description: p.tagline,
    alternates: { canonical: `/products/${p.slug}` },
    openGraph: {
      title: `${p.name} | ${site.name}`,
      description: p.tagline,
      url: `${site.url}/products/${p.slug}`,
    },
  };
}

export default function ProductDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const p = products.find((x) => x.slug === params.slug);
  if (!p) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: p.name,
    description: p.tagline,
    category: "Export commodity",
    brand: { "@type": "Organization", name: site.name },
  };

  return (
    <>
      <Navbar />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PageHeader
        eyebrow="Product category"
        title={p.name}
        description={p.overview}
        backHref="/products"
        backLabel="All products"
      />

      <main className="bg-white">
        <section className="container-x py-16 lg:py-20">
          <div className="grid gap-6 sm:grid-cols-2">
            <Checklist
              title="What we source & export"
              items={p.items}
              icon={<Boxes className="h-5 w-5 text-brand-600" />}
            />
            <Checklist
              title="Packing info"
              items={p.packing}
              icon={<Package className="h-5 w-5 text-brand-600" />}
            />
            <Checklist
              title="Common buyer requirements"
              items={p.specs}
              icon={<ClipboardList className="h-5 w-5 text-brand-600" />}
            />
            <Checklist
              title="Typical documents"
              items={p.documents}
              icon={<FileText className="h-5 w-5 text-brand-600" />}
            />
          </div>

          <div className="mt-6">
            <Checklist
              title="Quality checks"
              items={p.qualityChecks}
              icon={<ShieldCheck className="h-5 w-5 text-brand-600" />}
            />
          </div>

          <div className="mt-6 rounded-3xl border border-brand-500/20 bg-brand-50/60 p-7">
            <h2 className="font-display text-lg font-bold text-ink">
              Container &amp; destination-port pricing
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">
              {PRICING_NOTE}
            </p>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">
              Quotes are prepared per destination port and Incoterm (FOB, CIF or
              CFR). Share your destination port and target quantity and we&apos;ll
              return an itemised quote for your specific requirement.
            </p>
          </div>

          <RequirementCTA
            product={p.slug}
            title="Request a quote for this product"
            subtitle="Submit your requirement with quantity, destination port and Incoterm — we'll review and return an itemised quote."
            cta="Submit Requirement"
          />
        </section>
      </main>
      <Footer />
    </>
  );
}
