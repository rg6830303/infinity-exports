"use client";

import { useState } from "react";
import { Mail, MessageCircle, Send, User } from "lucide-react";
import {
  site,
  products,
  tradeDirections,
  incoterms,
  shippingModes,
  timelines,
} from "@/lib/site";

const categoryOptions = [
  ...products.map((p) => p.name),
  "Other / not listed",
];

type FormState = {
  name: string;
  company: string;
  email: string;
  phone: string;
  direction: string;
  category: string;
  product: string;
  quantity: string;
  destination: string;
  incoterm: string;
  mode: string;
  timeline: string;
  message: string;
};

/**
 * Trade-intelligent enquiry / quote form. Captures the details an
 * import-export desk actually needs to scope and price a deal (direction,
 * category, volume, destination, Incoterm, mode, timeline) and hands off
 * via email or a pre-filled WhatsApp message — the channels an India-based
 * trade SMB converts on.
 */
export default function TradeEnquiryForm({
  defaultCategory = "",
  heading,
}: {
  defaultCategory?: string;
  heading?: string;
}) {
  const [form, setForm] = useState<FormState>({
    name: "",
    company: "",
    email: "",
    phone: "",
    direction: "",
    category: defaultCategory,
    product: "",
    quantity: "",
    destination: "",
    incoterm: "",
    mode: "",
    timeline: "",
    message: "",
  });
  const [sent, setSent] = useState<null | "email" | "whatsapp">(null);

  const update =
    (key: keyof FormState) =>
    (
      e: React.ChangeEvent<
        HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
      >
    ) =>
      setForm((f) => ({ ...f, [key]: e.target.value }));

  const summaryLines = () =>
    [
      `Name: ${form.name}`,
      form.company && `Company: ${form.company}`,
      `Email: ${form.email}`,
      form.phone && `Phone/WhatsApp: ${form.phone}`,
      form.direction && `Trade direction: ${form.direction}`,
      form.category && `Product category: ${form.category}`,
      form.product && `Product / spec: ${form.product}`,
      form.quantity && `Estimated quantity/volume: ${form.quantity}`,
      form.destination && `Destination country: ${form.destination}`,
      form.incoterm && `Preferred Incoterm: ${form.incoterm}`,
      form.mode && `Shipping mode: ${form.mode}`,
      form.timeline && `Timeline: ${form.timeline}`,
      form.message && `\nDetails:\n${form.message}`,
    ]
      .filter(Boolean)
      .join("\n");

  const handleEmail = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(
      `Quote request${form.category ? ` — ${form.category}` : ""}${
        form.name ? ` (${form.name})` : ""
      }`
    );
    const body = encodeURIComponent(
      `Hello ${site.name},\n\nI'd like a quote for the following:\n\n${summaryLines()}`
    );
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
    setSent("email");
  };

  const sendWhatsApp = () => {
    const text = encodeURIComponent(
      `Hello ${site.name}, I'd like an import/export quote.\n\n${summaryLines()}`
    );
    window.open(`https://wa.me/${site.whatsapp}?text=${text}`, "_blank");
    setSent("whatsapp");
  };

  return (
    <form onSubmit={handleEmail} className="flex flex-col gap-5">
      {heading && (
        <h3 className="font-display text-lg font-bold text-ink">{heading}</h3>
      )}

      <div className="grid gap-5 sm:grid-cols-2">
        <Field
          icon={<User className="h-4 w-4" />}
          placeholder="Your name *"
          aria-label="Your name"
          autoComplete="name"
          value={form.name}
          onChange={update("name")}
          required
        />
        <Field
          placeholder="Company (optional)"
          aria-label="Company"
          autoComplete="organization"
          value={form.company}
          onChange={update("company")}
        />
        <Field
          icon={<Mail className="h-4 w-4" />}
          type="email"
          placeholder="Email address *"
          aria-label="Email address"
          autoComplete="email"
          value={form.email}
          onChange={update("email")}
          required
        />
        <Field
          placeholder="Phone / WhatsApp"
          aria-label="Phone or WhatsApp"
          autoComplete="tel"
          value={form.phone}
          onChange={update("phone")}
        />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Select
          aria-label="Trade direction"
          value={form.direction}
          onChange={update("direction")}
          placeholder="I want to… *"
          options={tradeDirections}
          required
        />
        <Select
          aria-label="Product category"
          value={form.category}
          onChange={update("category")}
          placeholder="Product category *"
          options={categoryOptions}
          required
        />
      </div>

      <Field
        placeholder="Product / specification (e.g. Basmati rice 1121, grade A)"
        aria-label="Product or specification"
        value={form.product}
        onChange={update("product")}
      />

      <div className="grid gap-5 sm:grid-cols-2">
        <Field
          placeholder="Estimated quantity (e.g. 2 × 20ft FCL, 500 kg)"
          aria-label="Estimated quantity or volume"
          value={form.quantity}
          onChange={update("quantity")}
        />
        <Field
          placeholder="Destination country *"
          aria-label="Destination country"
          autoComplete="country-name"
          value={form.destination}
          onChange={update("destination")}
          required
        />
      </div>

      <div className="grid gap-5 sm:grid-cols-3">
        <Select
          aria-label="Preferred Incoterm"
          value={form.incoterm}
          onChange={update("incoterm")}
          placeholder="Incoterm"
          options={incoterms}
        />
        <Select
          aria-label="Shipping mode"
          value={form.mode}
          onChange={update("mode")}
          placeholder="Shipping mode"
          options={shippingModes}
        />
        <Select
          aria-label="Timeline"
          value={form.timeline}
          onChange={update("timeline")}
          placeholder="Timeline"
          options={timelines}
        />
      </div>

      <textarea
        placeholder="Anything else we should know? Target price, certifications, packaging…"
        aria-label="Additional details"
        value={form.message}
        onChange={update("message")}
        rows={4}
        className="field-dark resize-none"
      />

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
            ? "Opening WhatsApp with your request — just hit send."
            : `Opening your email app addressed to ${site.email}. If nothing happens, email us directly or use WhatsApp.`}
        </p>
      ) : (
        <p className="text-xs text-slate-500">
          The more detail you share, the faster and more accurate your quote.
          Prefer to talk?{" "}
          <a
            href={`tel:${site.phoneRaw}`}
            className="font-semibold text-brand-600 hover:underline"
          >
            Call {site.phone}
          </a>
          .
        </p>
      )}
    </form>
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
      <input {...props} className={`field-dark ${icon ? "!pl-11 !pr-4" : ""}`} />
    </div>
  );
}

function Select({
  options,
  placeholder,
  value,
  ...props
}: {
  options: string[];
  placeholder: string;
} & React.SelectHTMLAttributes<HTMLSelectElement>) {
  return (
    <select
      {...props}
      value={value}
      className={`field-dark appearance-none ${value ? "text-ink" : "text-ink/40"}`}
    >
      <option value="" disabled>
        {placeholder}
      </option>
      {options.map((o) => (
        <option key={o} value={o} className="text-ink">
          {o}
        </option>
      ))}
    </select>
  );
}
