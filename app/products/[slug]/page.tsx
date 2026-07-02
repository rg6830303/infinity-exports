import type { Metadata } from "next";
import { notFound } from "next/navigation";
import FeatureDetail from "@/components/FeatureDetail";
import { products, site } from "@/lib/site";

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
    title: `${p.name} — Import & Export`,
    description: p.desc,
    alternates: { canonical: `/products/${p.slug}` },
    openGraph: {
      title: `${p.name} | ${site.name}`,
      description: p.desc,
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

  return (
    <FeatureDetail
      eyebrow="Product category"
      title={p.name}
      overview={p.overview}
      iconName={p.icon}
      blocks={[{ heading: "What we trade", items: p.items }]}
      footnote={p.notes}
      backHref="/#products"
      backLabel="All products"
      quoteCategory={p.name}
      images={p.images}
    />
  );
}
