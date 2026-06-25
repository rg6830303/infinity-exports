"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, MessageCircle, Phone, Send, User } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";
import { site } from "@/lib/site";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(
      form.subject || `Trade enquiry from ${form.name || "website"}`
    );
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
    );
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
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
    <section id="contact" className="relative overflow-hidden bg-brand-50/40 py-20 lg:py-28">
      <div className="pointer-events-none absolute -left-20 top-10 -z-10 h-72 w-72 rounded-full bg-brand-300/20 blur-3xl" />
      <div className="container-x">
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
              <div className="rounded-2xl bg-gradient-to-br from-ink via-brand-900 to-brand-700 p-8 text-white shadow-card">
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
                    className="group flex items-start gap-3 rounded-xl border border-ink/[0.06] bg-white p-4 shadow-soft"
                  >
                    <div className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-brand-50 text-brand-600 transition-colors group-hover:bg-brand-600 group-hover:text-white">
                      <c.icon className="h-5 w-5" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs font-medium text-ink-muted">
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
                  icon={<User className="h-4 w-4" />}
                  placeholder="Your name"
                  value={form.name}
                  onChange={update("name")}
                  required
                />
                <Field
                  icon={<Mail className="h-4 w-4" />}
                  type="email"
                  placeholder="Email address"
                  value={form.email}
                  onChange={update("email")}
                  required
                />
              </div>
              <Field
                placeholder="Subject (e.g. Import enquiry — Spices)"
                value={form.subject}
                onChange={update("subject")}
              />
              <div>
                <textarea
                  placeholder="Tell us about your requirement…"
                  value={form.message}
                  onChange={update("message")}
                  required
                  rows={5}
                  className="w-full resize-none rounded-xl border border-ink/10 bg-white px-4 py-3 text-sm text-ink outline-none transition-colors placeholder:text-ink-muted/60 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20"
                />
              </div>
              <button type="submit" className="btn-primary w-full sm:w-auto">
                Send Message
                <Send className="h-4 w-4" />
              </button>
              <p className="text-xs text-ink-muted">
                By submitting, your message will open in your email client
                addressed to {site.email}.
              </p>
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
        <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-ink-muted">
          {icon}
        </span>
      )}
      <input
        {...props}
        className={`w-full rounded-xl border border-ink/10 bg-white py-3 text-sm text-ink outline-none transition-colors placeholder:text-ink-muted/60 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 ${
          icon ? "pl-11 pr-4" : "px-4"
        }`}
      />
    </div>
  );
}
