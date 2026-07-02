import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import ServicesGrid from "@/components/ServicesGrid";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { site, reassurance, whatsappCta } from "@/lib/site";

export const metadata: Metadata = {
  title: "Services",
  description:
    "End-to-end export & trade solutions from India — product sourcing, supplier coordination, export documentation, quality & packaging coordination, trade compliance guidance and buyer requirement handling.",
  alternates: { canonical: "/services" },
  openGraph: {
    title: "Services | Infinity Exports",
    description:
      "End-to-end export & trade solutions from India — sourcing, coordination, quality, documentation and compliance.",
    url: `${site.url}/services`,
  },
};

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <PageHeader
        scene="helix"
        eyebrow="Services"
        title="End-to-end trade solutions for international buyers"
        description="Six connected services that take your requirement from first enquiry to dispatch. Open any service for the full breakdown — only the clear quote buttons go to the requirement form."
      >
        <Link href="/requirement" className="btn-primary">
          Submit Requirement <ArrowRight className="h-4 w-4" />
        </Link>
        <a
          href={whatsappCta}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-ghost"
        >
          <WhatsAppIcon className="h-4 w-4" /> Chat on WhatsApp
        </a>
      </PageHeader>

      <main className="bg-white">
        <section className="container-x py-16 lg:py-20">
          <div className="mb-10 flex flex-wrap gap-2">
            {reassurance.map((r) => (
              <span
                key={r}
                className="rounded-full border border-ink/10 bg-brand-50/70 px-3.5 py-1.5 text-xs font-medium text-brand-700"
              >
                {r}
              </span>
            ))}
          </div>
          <ServicesGrid />
        </section>
      </main>
      <Footer />
    </>
  );
}
