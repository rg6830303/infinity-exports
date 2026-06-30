import type { Metadata } from "next";
import { Search, Globe2, MessageCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import GooglePresenceContent from "@/components/GooglePresenceContent";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Google Presence",
  description:
    "Infinity Exports on Google Search and Google Business Profile — a verifiable online presence for international buyers performing due diligence before they trade.",
  alternates: { canonical: "/google-presence" },
  openGraph: {
    title: "Google Presence | Infinity Exports",
    description:
      "Verify Infinity Exports on Google Search and Google Business Profile.",
    url: `${site.url}/google-presence`,
  },
};

export default function GooglePresencePage() {
  return (
    <>
      <Navbar />
      <PageHeader
        eyebrow="Verified online"
        title="Infinity Exports on Google"
        description="Due diligence matters in international trade. A consistent presence on Google Search and Google Business Profile lets buyers verify who they are dealing with before sending a single message."
      />

      <main className="bg-white">
        <section className="container-x py-16 lg:py-20">
          <GooglePresenceContent />

          <div className="mt-16 grid gap-6 sm:grid-cols-3">
            <div className="rounded-2xl border border-ink/10 bg-white p-6 shadow-soft">
              <Search className="h-7 w-7 text-brand-600" strokeWidth={1.6} />
              <h2 className="mt-4 font-display text-base font-bold text-ink">
                Discoverable on Google Search
              </h2>
              <p className="mt-1 text-sm leading-relaxed text-slate-600">
                Search &ldquo;Infinity Exports Kolkata&rdquo; to find our brand,
                website and business information.
              </p>
            </div>
            <div className="rounded-2xl border border-ink/10 bg-white p-6 shadow-soft">
              <Globe2 className="h-7 w-7 text-brand-600" strokeWidth={1.6} />
              <h2 className="mt-4 font-display text-base font-bold text-ink">
                Google Business Profile
              </h2>
              <p className="mt-1 text-sm leading-relaxed text-slate-600">
                A verifiable business listing with consistent name, location and
                contact details for buyer confidence.
              </p>
            </div>
            <div className="rounded-2xl border border-ink/10 bg-white p-6 shadow-soft">
              <MessageCircle className="h-7 w-7 text-brand-600" strokeWidth={1.6} />
              <h2 className="mt-4 font-display text-base font-bold text-ink">
                Reachable & responsive
              </h2>
              <p className="mt-1 text-sm leading-relaxed text-slate-600">
                Beyond Google, we&apos;re quick to respond on WhatsApp and email
                for buyer enquiries and quotes.
              </p>
            </div>
          </div>

          <div className="mt-10 rounded-3xl border border-ink/10 bg-brand-50/50 p-7">
            <h2 className="font-display text-lg font-bold text-ink">
              Business overview
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">
              {site.name} is an India-based export and trade-solutions partner
              based in {site.location}. We help international buyers source
              products from India with supplier coordination, quality and
              packaging coordination, export documentation support and trade
              compliance guidance — managing the requirement end to end.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
