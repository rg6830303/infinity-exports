import type { Metadata } from "next";
import { Mail, MapPin, MessageCircle, Phone, Instagram } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import RequirementForm from "@/components/RequirementForm";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: "Contact | Buyer Requirement Form" },
  description:
    "Contact Infinity Exports — submit a buyer requirement, or reach us on WhatsApp, email and Instagram. India-based export & trade solutions partner.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact | Buyer Requirement Form",
    description:
      "Contact Infinity Exports and submit your buyer requirement for a structured quote.",
    url: `${site.url}/contact`,
  },
};

export default function ContactPage({
  searchParams,
}: {
  searchParams: { product?: string | string[]; service?: string | string[] };
}) {
  const product =
    typeof searchParams.product === "string" ? searchParams.product : "";
  const service =
    typeof searchParams.service === "string" ? searchParams.service : "";

  const channels = [
    { icon: Phone, label: "Call us", value: site.phone, href: `tel:${site.phoneRaw}` },
    {
      icon: MessageCircle,
      label: "WhatsApp",
      value: site.phone,
      href: site.social.whatsapp,
    },
    { icon: Mail, label: "Email us", value: site.email, href: `mailto:${site.email}` },
    {
      icon: Instagram,
      label: "Instagram",
      value: `@${site.instagramHandle}`,
      href: site.social.instagram,
    },
  ];

  return (
    <>
      <Navbar />
      <PageHeader
        eyebrow="Get in touch"
        title="Contact Infinity Exports"
        description="The best way to reach us is to submit a buyer requirement — we'll review it and respond with a structured quote. You can also reach us directly on WhatsApp or email."
      />

      <main className="bg-white">
        <section className="container-x py-16 lg:py-20">
          <div className="grid gap-8 lg:grid-cols-5">
            <div className="lg:col-span-2">
              <div className="rounded-3xl border border-brand-900/20 bg-gradient-to-br from-brand-700 via-brand-800 to-brand-900 p-8 text-white shadow-card">
                <h2 className="font-display text-xl font-bold">{site.name}</h2>
                <p className="mt-1 text-sm text-brand-200">
                  India Export &amp; Trade Solutions
                </p>
                <div className="mt-6 flex items-start gap-3 text-sm leading-relaxed text-white/85">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-300" />
                  <a
                    href={site.address.maps}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    {site.address.lines.join(" ")}
                  </a>
                </div>
              </div>

              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {channels.map((c) => (
                  <a
                    key={c.label}
                    href={c.href}
                    target={c.href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    data-testid={`contact-page-${c.label.toLowerCase().replace(/\s+/g, "-")}`}
                    className="group flex items-center gap-3 rounded-2xl border border-ink/10 bg-white p-4 shadow-soft transition-colors hover:border-brand-400/50 hover:bg-brand-50/60"
                  >
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-brand-500/30 text-brand-600">
                      <c.icon className="h-[18px] w-[18px]" />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-xs font-medium text-slate-500">
                        {c.label}
                      </span>
                      <span className="block truncate text-sm font-semibold text-ink">
                        {c.value}
                      </span>
                    </span>
                  </a>
                ))}
              </div>
            </div>

            <div className="lg:col-span-3">
              <div className="glass-card p-6 sm:p-8">
                <h2 className="font-display text-lg font-bold text-ink">
                  Submit your requirement
                </h2>
                <p className="mt-1 text-sm text-slate-500">
                  We&apos;ll review and reply with a structured quote.
                </p>
                <div className="mt-6">
                  <RequirementForm
                    defaultProduct={product}
                    defaultService={service}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
