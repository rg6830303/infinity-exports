"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, MessageCircle, Phone, Send, User } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";
import ParticleNetwork from "./ParticleNetwork";
import { site } from "@/lib/site";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [sent, setSent] = useState<null | "email" | "whatsapp">(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(
      form.subject || `Trade enquiry from ${form.name || "website"}`
    );
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
    );
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
    setSent("email");
  };

  // WhatsApp is the most reliable conversion channel for an India-based SMB,
  // so offer a one-tap prefilled message as an alternative to email.
  const sendWhatsApp = () => {
    const text = encodeURIComponent(
      `Hello ${site.name}, I'd like an import/export quote.\n\n` +
        `Name: ${form.name}\nEmail: ${form.email}\n` +
        `Subject: ${form.subject || "Trade enquiry"}\n\n${form.message}`
    );
    window.open(`https://wa.me/${site.whatsapp}?text=${text}`, "_blank");
    setSent("whatsapp");
  };

  const update =
    (key: keyof typeof form) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
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
      icon: MapPin,
      label: "Visit us",
      value: site.address.short,
      href: site.address.maps,
    },
  ];

  return (
    <section id="contact" className="section-b relative overflow-hidden py-20 lg:py-28">
      <ParticleNetwork className="opacity-50 [mask-image:radial-gradient(ellipse_at_center,black,transparent_85%)]" />
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
              <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-brand-800/60 via-brand-900/50 to-[#0a1030] p-8 text-white shadow-card">
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
                    className="card-dark group flex items-start gap-3 rounded-xl p-4"
                  >
                    <div className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-brand-500/15 text-brand-300 transition-colors group-hover:bg-brand-500 group-hover:text-white">
                      <c.icon className="h-5 w-5" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs font-medium text-white/50">
                        {c.label}
                      </p>
                      <p className="truncate text-sm font-semibold text-white">
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
                  icon={<User className="h-4 w-4" />}
                  placeholder="Your name"
                  aria-label="Your name"
                  autoComplete="name"
                  value={form.name}
                  onChange={update("name")}
                  required
                />
                <Field
                  icon={<Mail className="h-4 w-4" />}
                  type="email"
                  placeholder="Email address"
                  aria-label="Email address"
                  autoComplete="email"
                  value={form.email}
                  onChange={update("email")}
                  required
                />
              </div>
              <Field
                placeholder="Subject (e.g. Import enquiry — Spices)"
                aria-label="Subject"
                value={form.subject}
                onChange={update("subject")}
              />
              <div>
                <textarea
                  placeholder="Tell us about your requirement…"
                  aria-label="Your message"
                  value={form.message}
                  onChange={update("message")}
                  required
                  rows={5}
                  className="field-dark resize-none"
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
                <p className="rounded-xl border border-brand-400/30 bg-brand-500/10 px-4 py-3 text-xs text-brand-100">
                  {sent === "whatsapp"
                    ? "Opening WhatsApp with your message — just hit send."
                    : `Opening your email app addressed to ${site.email}. If nothing happens, email us directly or use WhatsApp.`}
                </p>
              ) : (
                <p className="text-xs text-white/50">
                  Prefer to talk now? Call{" "}
                  <a
                    href={`tel:${site.phoneRaw}`}
                    className="font-semibold text-brand-300 hover:underline"
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
        <span className="pointer-events-none absolute left-4 top-1/2 z-10 -translate-y-1/2 text-white/40">
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
