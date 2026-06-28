import type { Metadata } from "next";
import { notFound } from "next/navigation";
import FeatureDetail from "@/components/FeatureDetail";
import { services, site } from "@/lib/site";

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
    title: `${s.title} — Services`,
    description: s.desc,
    alternates: { canonical: `/services/${s.slug}` },
    openGraph: {
      title: `${s.title} | ${site.name}`,
      description: s.desc,
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

  return (
    <FeatureDetail
      eyebrow="Service"
      title={s.title}
      overview={s.overview}
      iconName={s.icon}
      blocks={[
        { heading: "What's included", items: s.highlights },
        { heading: "What you get", items: s.deliverables },
      ]}
      backHref="/#services"
      backLabel="All services"
      quoteCategory=""
    />
  );
}
