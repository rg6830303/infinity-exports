"use client";

import { useMemo, useState } from "react";
import {
  Building2,
  Globe,
  Mail,
  MessageCircle,
  Send,
  Loader2,
  CheckCircle2,
  AlertCircle,
  Package,
} from "lucide-react";
import { site, products, incoterms } from "@/lib/site";

const commodityOptions = [...products.map((p) => p.name), "Other / not listed"];

type Status = "idle" | "loading" | "success" | "error";

type FormState = {
  company: string;
  country: string;
  commodity: string;
  quantity: string;
  port: string;
  whatsapp: string;
  email: string;
  incoterm: string;
  message: string;
  botcheck: boolean;
};

export default function RequirementForm({
  defaultProduct = "",
  defaultService = "",
}: {
  defaultProduct?: string;
  defaultService?: string;
}) {
  const defaultCommodity = useMemo(() => {
    const p = products.find((x) => x.slug === defaultProduct);
    return p ? p.name : "";
  }, [defaultProduct]);

  const [form, setForm] = useState<FormState>({
    company: "",
    country: "",
    commodity: defaultCommodity,
    quantity: "",
    port: "",
    whatsapp: "",
    email: "",
    incoterm: "",
    message: "",
    botcheck: false,
  });
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>(
    {}
  );

  const update =
    (key: keyof FormState) =>
    (
      e: React.ChangeEvent<
        HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
      >
    ) => {
      const value = e.target.value;
      setForm((f) => ({ ...f, [key]: value }));
      setErrors((prev) => (prev[key] ? { ...prev, [key]: undefined } : prev));
    };

  const validate = () => {
    const next: Partial<Record<keyof FormState, string>> = {};
    if (!form.company.trim()) next.company = "Company name is required.";
    if (!form.country.trim()) next.country = "Country is required.";
    if (!form.commodity.trim()) next.commodity = "Please select a commodity.";
    if (!form.email.trim()) next.email = "Email address is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim()))
      next.email = "Please enter a valid email address.";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const summary = () =>
    [
      `Company: ${form.company}`,
      `Country: ${form.country}`,
      `Commodity: ${form.commodity}`,
      form.quantity && `Quantity: ${form.quantity}`,
      form.port && `Destination port: ${form.port}`,
      form.incoterm && `Incoterm: ${form.incoterm}`,
      form.whatsapp && `WhatsApp: ${form.whatsapp}`,
      form.email && `Email: ${form.email}`,
      defaultProduct && `Product page: ${defaultProduct}`,
      defaultService && `Service page: ${defaultService}`,
      form.message && `\nMessage:\n${form.message}`,
    ]
      .filter(Boolean)
      .join("\n");

  const whatsappHref = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(
    `Hello ${site.name}, here is my buyer requirement:\n\n${summary()}`
  )}`;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (form.botcheck) return; // honeypot tripped
    if (!validate()) return; // block submit until required fields are valid

    setStatus("loading");
    setErrorMsg("");

    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_KEY;

    const payload = {
      access_key: accessKey,
      subject: "New Infinity Exports Buyer Requirement",
      from_name: `${site.name} Website`,
      replyto: form.email,
      botcheck: "",
      "Company Name": form.company,
      Country: form.country,
      "Commodity Interested In": form.commodity,
      Quantity: form.quantity,
      "Destination Port": form.port,
      WhatsApp: form.whatsapp,
      Email: form.email,
      Incoterm: form.incoterm,
      Message: form.message,
      product_slug: defaultProduct,
      service_slug: defaultService,
    };

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (res.ok && data.success) {
        setStatus("success");
      } else {
        setStatus("error");
        setErrorMsg(
          data.message ||
            "We couldn't submit your requirement right now. Please try again or reach us on WhatsApp."
        );
      }
    } catch {
      setStatus("error");
      setErrorMsg(
        "Network error — please try again, or send your requirement on WhatsApp."
      );
    }
  };

  if (status === "success") {
    return (
      <div
        data-testid="requirement-success"
        className="flex flex-col items-center rounded-3xl border border-brand-500/20 bg-brand-50/60 p-8 text-center sm:p-10"
      >
        <span className="grid h-16 w-16 place-items-center rounded-full bg-brand-100 text-brand-700">
          <CheckCircle2 className="h-8 w-8" />
        </span>
        <h3 className="mt-5 font-display text-2xl font-bold text-ink">
          Requirement received — thank you
        </h3>
        <p className="mt-3 max-w-md text-sm leading-relaxed text-slate-600">
          Thank you for sharing your requirement with {site.name}. Our team will
          review the details and respond with a structured quote and next steps,
          usually within a few hours on business days.
        </p>
        <div className="mt-7 flex flex-col gap-3 sm:flex-row">
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            data-testid="requirement-whatsapp-cta"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-3 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5"
          >
            <MessageCircle className="h-4 w-4" /> Continue on WhatsApp
          </a>
          <a href={`mailto:${site.email}`} className="btn-ghost">
            <Mail className="h-4 w-4" /> Email us
          </a>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      data-testid="requirement-form"
      className="flex flex-col gap-5"
      noValidate
    >
      {/* honeypot */}
      <input
        type="checkbox"
        name="botcheck"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        style={{ display: "none" }}
        checked={form.botcheck}
        onChange={(e) => setForm((f) => ({ ...f, botcheck: e.target.checked }))}
      />

      <div className="grid gap-5 sm:grid-cols-2">
        <Field
          icon={<Building2 className="h-4 w-4" />}
          placeholder="Company name *"
          aria-label="Company name"
          autoComplete="organization"
          value={form.company}
          onChange={update("company")}
          data-testid="field-company"
          error={errors.company}
          required
        />
        <Field
          icon={<Globe className="h-4 w-4" />}
          placeholder="Country *"
          aria-label="Country"
          autoComplete="country-name"
          value={form.country}
          onChange={update("country")}
          data-testid="field-country"
          error={errors.country}
          required
        />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Select
          aria-label="Commodity interested in"
          value={form.commodity}
          onChange={update("commodity")}
          placeholder="Commodity interested in *"
          options={commodityOptions}
          data-testid="field-commodity"
          error={errors.commodity}
          required
        />
        <Field
          icon={<Package className="h-4 w-4" />}
          placeholder="Quantity (e.g. 2 × 20ft FCL, 5 MT)"
          aria-label="Quantity"
          value={form.quantity}
          onChange={update("quantity")}
          data-testid="field-quantity"
        />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field
          placeholder="Destination port"
          aria-label="Destination port"
          value={form.port}
          onChange={update("port")}
          data-testid="field-port"
        />
        <Select
          aria-label="Preferred Incoterm"
          value={form.incoterm}
          onChange={update("incoterm")}
          placeholder="Preferred Incoterm"
          options={incoterms}
          data-testid="field-incoterm"
        />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field
          icon={<MessageCircle className="h-4 w-4" />}
          placeholder="WhatsApp number"
          aria-label="WhatsApp number"
          autoComplete="tel"
          value={form.whatsapp}
          onChange={update("whatsapp")}
          data-testid="field-whatsapp"
        />
        <Field
          icon={<Mail className="h-4 w-4" />}
          type="email"
          placeholder="Email address *"
          aria-label="Email address"
          autoComplete="email"
          value={form.email}
          onChange={update("email")}
          data-testid="field-email"
          error={errors.email}
          required
        />
      </div>

      <textarea
        placeholder="Message — share grade, packing, target price, certifications or any specifics."
        aria-label="Message"
        value={form.message}
        onChange={update("message")}
        rows={4}
        data-testid="field-message"
        className="field-dark resize-none"
      />

      {status === "error" && (
        <div
          data-testid="requirement-error"
          className="flex items-start gap-2 rounded-xl border border-red-300 bg-red-50 px-4 py-3 text-sm text-red-700"
        >
          <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
          <span>
            {errorMsg}{" "}
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold underline"
            >
              Send on WhatsApp
            </a>
          </span>
        </div>
      )}

      <div className="flex flex-col gap-3 sm:flex-row">
        <button
          type="submit"
          disabled={status === "loading"}
          data-testid="requirement-submit"
          className="btn-primary w-full sm:flex-1 disabled:cursor-not-allowed disabled:opacity-70"
        >
          {status === "loading" ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" /> Submitting…
            </>
          ) : (
            <>
              Submit Buyer Requirement <Send className="h-4 w-4" />
            </>
          )}
        </button>
        <a
          href={whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-3 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5 sm:flex-1"
        >
          <MessageCircle className="h-4 w-4" /> Send via WhatsApp
        </a>
      </div>

      <p className="text-xs text-slate-500">
        Fields marked * are required. The more detail you share, the faster and
        sharper your quote. {PRICING_NOTE_SHORT}
      </p>
    </form>
  );
}

const PRICING_NOTE_SHORT =
  "Pricing depends on quantity, grade, packing, destination port and Incoterm.";

function Field({
  icon,
  error,
  ...props
}: { icon?: React.ReactNode; error?: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div>
      <div className="relative">
        {icon && (
          <span className="pointer-events-none absolute left-4 top-1/2 z-10 -translate-y-1/2 text-slate-400">
            {icon}
          </span>
        )}
        <input
          {...props}
          aria-invalid={error ? true : undefined}
          className={`field-dark ${icon ? "!pl-11 !pr-4" : ""} ${
            error ? "!border-red-400 focus:!ring-red-200" : ""
          }`}
        />
      </div>
      {error && (
        <p className="mt-1.5 text-xs font-medium text-red-600">{error}</p>
      )}
    </div>
  );
}

function Select({
  options,
  placeholder,
  value,
  error,
  ...props
}: {
  options: string[];
  placeholder: string;
  error?: string;
} & React.SelectHTMLAttributes<HTMLSelectElement>) {
  return (
    <div>
      <select
        {...props}
        value={value}
        aria-invalid={error ? true : undefined}
        className={`field-dark appearance-none ${value ? "text-ink" : "text-ink/40"} ${
          error ? "!border-red-400 focus:!ring-red-200" : ""
        }`}
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
      {error && (
        <p className="mt-1.5 text-xs font-medium text-red-600">{error}</p>
      )}
    </div>
  );
}
