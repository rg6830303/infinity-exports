"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Anchor,
  Building2,
  Globe2,
  Mail,
  MapPin,
  MessageCircle,
  PackageSearch,
  Phone,
  Send,
  Instagram,
} from "lucide-react";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";
import ParticleNetwork from "./ParticleNetwork";
import { site } from "@/lib/site";

export default function Contact() {
  const [form, setForm] = useState({
    companyName: "",
    country: "",
    commodity: "",
    quantity: "",
    destinationPort: "",
    whatsapp: "",
    email: "",
    incoterm: "FOB",
  });
  const [sent, setSent] = useState<null | "email" | "whatsapp">(null);

  const enquirySummary =
    `Company Name: ${form.companyName}\n` +
    `Country: ${form.country}\n` +
    `Commodity Interested In: ${form.commodity}\n` +
    `Quantity: ${form.quantity}\n` +
    `Destination Port: ${form.destinationPort}\n` +
    `WhatsApp: ${form.whatsapp}\n` +
    `Email: ${form.email}\n` +
    `Incoterm: ${form.incoterm}`;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(
      `Trade enquiry - ${form.commodity || form.companyName || "website"}`
    );
    const body = encodeURIComponent(enquirySummary);
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
    setSent("email");
  };

  // WhatsApp is the most reliable conversion channel for an India-based SMB,
  // so offer a one-tap prefilled message as an alternative to email.
  const sendWhatsApp = () => {
    const text = encodeURIComponent(
      `Hello ${site.name}, I'd like an import/export quote.\n\n` +
        enquirySummary
    );
    window.open(`https://wa.me/${site.whatsapp}?text=${text}`, "_blank");
    setSent("whatsapp");
  };

  const update =
    (key: keyof typeof form) =>
    (
      e: React.ChangeEvent<
        HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
      >
    ) =>
      setForm((f) => ({ ...f, [key]: e.target.value }));

  const contactItems = [
    {
      icon: Phone,
      label: "Call us",
      value: site.phone,
      href: `tel:${site.phoneRaw}`,
    },
    {
      icon: Mail,
      label: "Email us",
      value: site.email,
      href: `mailto:${site.email}`,
    },
    {
      icon: MessageCircle,
      label: "WhatsApp",
      value: site.phone,
      href: site.social.whatsapp,
    },
    {
      icon: Instagram,
      label: "Instagram",
      value: `@${site.instagramHandle}`,
      href: site.social.instagram,
    },
    {
      icon: MapPin,
      label: "Visit us",
      value: site.address.short,
      href: site.address.maps,
    },
  ];

  return (
    <section id="contact" className="section-b relative overflow-hidden py-20 lg:py-28">
      <ParticleNetwork className="[mask-image:radial-gradient(ellipse_at_center,black,transparent_90%)]" />
      <div className="pointer-events-none absolute -left-20 top-10 h-72 w-72 rounded-full bg-brand-600/15 blur-3xl" />
      <div className="container-x relative">
        <SectionHeader
          index="08"
          kicker="Get in touch"
          title="Let's start your next shipment"
          highlight={["shipment"]}
          description="Share your requirement and our team will get back to you with a tailored quote."
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-5">
          {/* Contact info */}
          <Reveal direction="right" className="lg:col-span-2">
            <div className="flex h-full flex-col gap-4">
              <div className="rounded-2xl border border-brand-900/20 bg-gradient-to-br from-brand-700 via-brand-800 to-brand-900 p-8 text-white shadow-card">
                <h3 className="font-display text-xl font-bold">
                  {site.name}
                </h3>
                <p className="mt-1 text-sm text-brand-200">
                  {site.partner} • {site.partnerRole}
                </p>
                <div className="mt-6 space-y-2 text-sm leading-relaxed text-white/80">
                  {site.address.lines.map((l) => (
                    <p key={l}>{l}</p>
                  ))}
                </div>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                {contactItems.map((c) => (
                  <motion.a
                    key={c.label}
                    href={c.href}
                    target={c.href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    whileHover={{ y: -4 }}
                    className="group flex items-center gap-3 rounded-xl border border-ink/10 bg-white p-4 shadow-soft transition-colors hover:border-brand-400/50 hover:bg-brand-50/60"
                  >
                    <div className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-brand-500/30 text-brand-600 transition-colors group-hover:border-brand-500 group-hover:bg-brand-100">
                      <c.icon className="h-[18px] w-[18px]" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs font-medium text-slate-500">
                        {c.label}
                      </p>
                      <p className="truncate text-sm font-semibold text-ink">
                        {c.value}
                      </p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Form */}
          <Reveal className="lg:col-span-3">
            <form
              onSubmit={handleSubmit}
              className="glass-card flex h-full flex-col gap-5 p-8"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <Field
                  icon={<Building2 className="h-4 w-4" />}
                  placeholder="Company Name"
                  aria-label="Company Name"
                  autoComplete="name"
                  value={form.companyName}
                  onChange={update("companyName")}
                  required
                />
                <Field
                  icon={<Globe2 className="h-4 w-4" />}
                  placeholder="Country"
                  aria-label="Country"
                  autoComplete="country-name"
                  value={form.country}
                  onChange={update("country")}
                  required
                />
                <Field
                  icon={<PackageSearch className="h-4 w-4" />}
                  placeholder="Commodity Interested In"
                  aria-label="Commodity Interested In"
                  value={form.commodity}
                  onChange={update("commodity")}
                  required
                />
                <Field
                  placeholder="Quantity"
                  aria-label="Quantity"
                  value={form.quantity}
                  onChange={update("quantity")}
                  required
                />
                <Field
                  icon={<Anchor className="h-4 w-4" />}
                  placeholder="Destination Port"
                  aria-label="Destination Port"
                  value={form.destinationPort}
                  onChange={update("destinationPort")}
                  required
                />
                <Field
                  icon={<MessageCircle className="h-4 w-4" />}
                  type="tel"
                  placeholder="WhatsApp"
                  aria-label="WhatsApp"
                  autoComplete="tel"
                  value={form.whatsapp}
                  onChange={update("whatsapp")}
                  required
                />
                <Field
                  icon={<Mail className="h-4 w-4" />}
                  type="email"
                  placeholder="Email"
                  aria-label="Email"
                  autoComplete="email"
                  value={form.email}
                  onChange={update("email")}
                  required
                />
                <SelectField
                  label="Incoterm"
                  value={form.incoterm}
                  onChange={update("incoterm")}
                />
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <button type="submit" className="btn-primary w-full sm:flex-1">
                  Send via Email
                  <Send className="h-4 w-4" />
                </button>
                <button
                  type="button"
                  onClick={sendWhatsApp}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-3 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:brightness-105 active:scale-[0.98] sm:flex-1"
                >
                  <MessageCircle className="h-4 w-4" />
                  Send via WhatsApp
                </button>
              </div>

              {sent ? (
                <p className="rounded-xl border border-brand-500/30 bg-brand-50 px-4 py-3 text-xs text-brand-700">
                  {sent === "whatsapp"
                    ? "Opening WhatsApp with your message — just hit send."
                    : `Opening your email app addressed to ${site.email}. If nothing happens, email us directly or use WhatsApp.`}
                </p>
              ) : (
                <p className="text-xs text-slate-500">
                  Prefer to talk now? Call{" "}
                  <a
                    href={`tel:${site.phoneRaw}`}
                    className="font-semibold text-brand-600 hover:underline"
                  >
                    {site.phone}
                  </a>{" "}
                  — we usually reply within a few hours.
                </p>
              )}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Field({
  icon,
  ...props
}: { icon?: React.ReactNode } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div className="relative">
      {icon && (
        <span className="pointer-events-none absolute left-4 top-1/2 z-10 -translate-y-1/2 text-slate-400">
          {icon}
        </span>
      )}
      <input
        {...props}
        className={`field-dark ${icon ? "!pl-11 !pr-4" : ""}`}
      />
    </div>
  );
}

function SelectField({
  label,
  ...props
}: { label: string } & React.SelectHTMLAttributes<HTMLSelectElement>) {
  return (
    <label className="relative">
      <span className="sr-only">{label}</span>
      <select {...props} className="field-dark appearance-none">
        <option value="FOB">Incoterm: FOB</option>
        <option value="CIF">Incoterm: CIF</option>
        <option value="CFR">Incoterm: CFR</option>
      </select>
      <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-xs text-slate-400">
        v
      </span>
    </label>
  );
}
