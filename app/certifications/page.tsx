import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ShieldCheck } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import CertificationsGrid, { CertNote } from "@/components/CertificationsGrid";
import { site, certWhyItMatters } from "@/lib/site";

export const metadata: Metadata = {
  title: "Certifications & Licenses",
  description:
    "Certifications and licenses that give international buyers a transparent basis for trust — IEC, GST / business registration, MSME / Udyam, APEDA / FIEO and quality & compliance documents. No invented numbers.",
  alternates: { canonical: "/certifications" },
  openGraph: {
    title: "Certifications & Licenses | Infinity Exports",
    description:
      "Professional certifications and licenses for transparent buyer due diligence.",
    url: `${site.url}/certifications`,
  },
};

export default function CertificationsPage() {
  return (
    <>
      <Navbar />
      <PageHeader
        scene="beacon"
        eyebrow="Trust & compliance"
        title="Certifications & licenses"
        description="The registrations and documents that confirm a legitimate Indian exporter. We display only what is verified — and provide details on request for genuine buyer due diligence."
      >
        <Link href="/requirement" className="btn-primary">
          Request documents <ArrowRight className="h-4 w-4" />
        </Link>
      </PageHeader>

      <main className="bg-white">
        <section className="container-x py-16 lg:py-20">
          <CertificationsGrid />
          <CertNote />

          <div className="mt-12 rounded-3xl border border-ink/10 bg-brand-50/50 p-7">
            <h2 className="flex items-center gap-2 font-display text-lg font-bold text-ink">
              <ShieldCheck className="h-5 w-5 text-brand-600" />
              Why these documents matter for buyers
            </h2>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2">
              {certWhyItMatters.map((c) => (
                <li
                  key={c}
                  className="flex items-start gap-3 text-sm leading-relaxed text-slate-600"
                >
                  <ArrowRight className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" />
                  {c}
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
