"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, MessageCircle, Phone, Instagram } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";
import ParticleNetwork from "./ParticleNetwork";
import TradeEnquiryForm from "./TradeEnquiryForm";
import { site } from "@/lib/site";

export default function Contact() {
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
          description="Share your requirement and our team will get back to you with a tailored quote — usually within a few hours on business days."
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-5">
          {/* Contact info */}
          <Reveal direction="right" className="lg:col-span-2">
            <div className="flex h-full flex-col gap-4">
              <div className="rounded-2xl border border-brand-900/20 bg-gradient-to-br from-brand-700 via-brand-800 to-brand-900 p-8 text-white shadow-card">
                <h3 className="font-display text-xl font-bold">{site.name}</h3>
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

          {/* Trade-intelligent enquiry form */}
          <Reveal className="lg:col-span-3">
            <div className="glass-card h-full p-8">
              <TradeEnquiryForm heading="Tell us what you need" />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
