import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import ProductsGrid from "@/components/ProductsGrid";
import { site, PRICING_NOTE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Product categories we source and export from India — agro & food, textiles & apparel, handicrafts & décor, industrial goods, leather and chemicals & pharma inputs. Packing, specs and quote on request.",
  alternates: { canonical: "/products" },
  openGraph: {
    title: "Products | Infinity Exports",
    description:
      "Product categories sourced and exported from India, with packing, specifications and pricing on request.",
    url: `${site.url}/products`,
  },
};

export default function ProductsPage() {
  return (
    <>
      <Navbar />
      <PageHeader
        scene="lattice"
        eyebrow="Products"
        title="Product categories we source & export"
        description="Tap the arrow on any category for packing details, common buyer requirements and a pricing note — or open the full product page for documents and quality checks."
      >
        <Link href="/requirement" className="btn-primary">
          Submit Requirement <ArrowRight className="h-4 w-4" />
        </Link>
      </PageHeader>

      <main className="bg-white">
        <section className="container-x py-16 lg:py-20">
          <ProductsGrid />

          <div className="mt-10 rounded-2xl border border-brand-500/20 bg-brand-50/60 px-6 py-5">
            <p className="text-sm font-semibold uppercase tracking-wider text-brand-700">
              Pricing note
            </p>
            <p className="mt-1.5 text-sm leading-relaxed text-slate-600">
              {PRICING_NOTE}
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
