import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { whatsappCta } from "@/lib/site";
import WhatsAppIcon from "./WhatsAppIcon";

/**
 * Reusable "Submit Requirement" CTA band for detail pages. Passes product /
 * service context to the requirement form so the buyer's source is captured.
 */
export default function RequirementCTA({
  product,
  service,
  title = "Ready to take this forward?",
  subtitle = "Submit your requirement and we'll review it before sending a structured, itemised quote.",
  cta = "Submit Requirement",
}: {
  product?: string;
  service?: string;
  title?: string;
  subtitle?: string;
  cta?: string;
}) {
  const params = new URLSearchParams();
  if (product) params.set("product", product);
  if (service) params.set("service", service);
  const href = params.toString()
    ? `/requirement?${params.toString()}`
    : "/requirement";

  return (
    <div className="mt-12 flex flex-col items-center justify-between gap-5 rounded-3xl border border-brand-900/20 bg-gradient-to-br from-brand-700 via-brand-800 to-brand-900 px-7 py-8 text-white shadow-card sm:flex-row">
      <div>
        <p className="font-display text-xl font-bold">{title}</p>
        <p className="mt-1 max-w-md text-sm text-brand-100">{subtitle}</p>
      </div>
      <div className="flex flex-col gap-3 sm:flex-row">
        <Link
          href={href}
          data-testid="detail-requirement-cta"
          className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-brand-800 transition-transform hover:-translate-y-0.5"
        >
          {cta} <ArrowRight className="h-4 w-4" />
        </Link>
        <a
          href={whatsappCta}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
        >
          <WhatsAppIcon className="h-4 w-4" /> WhatsApp
        </a>
      </div>
    </div>
  );
}
