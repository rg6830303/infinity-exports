import type { Metadata } from "next";
import { ClipboardCheck, BadgeDollarSign, Clock } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import RequirementForm from "@/components/RequirementForm";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Buyer Requirement Form",
  description:
    "Submit your buyer requirement to Infinity Exports — company, country, commodity, quantity, destination port and Incoterm. We review it before sending an itemised quote.",
  alternates: { canonical: "/requirement" },
  openGraph: {
    title: "Buyer Requirement Form | Infinity Exports",
    description:
      "Submit your export buyer requirement and get a structured, itemised quote.",
    url: `${site.url}/requirement`,
  },
};

const assurances = [
  {
    icon: ClipboardCheck,
    title: "Requirement reviewed first",
    desc: "We confirm specification, packing and terms before quoting.",
  },
  {
    icon: BadgeDollarSign,
    title: "Transparent, itemised quotes",
    desc: "Pricing per destination port and Incoterm — no hidden charges.",
  },
  {
    icon: Clock,
    title: "Fast turnaround",
    desc: "A response within a few hours on business days.",
  },
];

export default function RequirementPage({
  searchParams,
}: {
  searchParams: { product?: string | string[]; service?: string | string[] };
}) {
  const product =
    typeof searchParams.product === "string" ? searchParams.product : "";
  const service =
    typeof searchParams.service === "string" ? searchParams.service : "";

  return (
    <>
      <Navbar />
      <PageHeader
        eyebrow="Buyer requirement"
        title="Submit your buyer requirement"
        description="Tell us what you need to source from India. The more detail you share — commodity, quantity, destination port and Incoterm — the faster and sharper your quote."
      />

      <main className="bg-white">
        <section className="container-x py-16 lg:py-20">
          <div className="grid gap-8 lg:grid-cols-[1.6fr_1fr]">
            <div className="glass-card p-6 sm:p-8">
              <RequirementForm
                defaultProduct={product}
                defaultService={service}
              />
            </div>

            <aside className="flex flex-col gap-4">
              {assurances.map((a) => (
                <div
                  key={a.title}
                  className="rounded-2xl border border-ink/10 bg-white p-6 shadow-soft"
                >
                  <a.icon className="h-7 w-7 text-brand-600" strokeWidth={1.6} />
                  <h2 className="mt-4 font-display text-base font-bold text-ink">
                    {a.title}
                  </h2>
                  <p className="mt-1 text-sm leading-relaxed text-slate-600">
                    {a.desc}
                  </p>
                </div>
              ))}

              <div className="rounded-2xl border border-brand-900/20 bg-gradient-to-br from-brand-700 via-brand-800 to-brand-900 p-6 text-white shadow-card">
                <p className="font-display text-base font-bold">
                  Prefer to talk first?
                </p>
                <p className="mt-1 text-sm text-brand-100">
                  Call or message us on WhatsApp directly.
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
        </section>
      </main>
      <Footer />
    </>
  );
}
