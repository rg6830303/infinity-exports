import type { Metadata } from "next";
import { notFound } from "next/navigation";
import FeatureDetail from "@/components/FeatureDetail";
import { steps, site } from "@/lib/site";

export function generateStaticParams() {
  return steps.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const idx = steps.findIndex((x) => x.slug === params.slug);
  if (idx === -1) return {};
  const s = steps[idx];
  return {
    title: `${s.title} — Our Process`,
    description: s.desc,
    alternates: { canonical: `/process/${s.slug}` },
    openGraph: {
      title: `${s.title} | ${site.name}`,
      description: s.desc,
      url: `${site.url}/process/${s.slug}`,
    },
  };
}

export default function ProcessDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const idx = steps.findIndex((x) => x.slug === params.slug);
  if (idx === -1) notFound();
  const s = steps[idx];

  return (
    <FeatureDetail
      eyebrow={`Step ${String(idx + 1).padStart(2, "0")}`}
      title={s.title}
      overview={s.overview}
      numberLabel={String(idx + 1).padStart(2, "0")}
      blocks={[{ heading: "What happens at this stage", items: s.points }]}
      footnote={`Outcome: ${s.output}`}
      backHref="/#process"
      backLabel="Full process"
    />
  );
}
