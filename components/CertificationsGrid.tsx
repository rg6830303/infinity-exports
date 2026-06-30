"use client";

import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";
import Reveal from "./Reveal";
import { certifications } from "@/lib/site";
import { getIcon } from "@/lib/icons";

const statusStyle: Record<string, string> = {
  "Available on request": "border-brand-500/25 bg-brand-50 text-brand-700",
  "To be updated after verification":
    "border-amber-500/25 bg-amber-50 text-amber-700",
  "Add if verified": "border-ink/15 bg-ink/[0.04] text-ink/60",
};

export default function CertificationsGrid({ limit }: { limit?: number }) {
  const list = limit ? certifications.slice(0, limit) : certifications;

  return (
    <div
      data-testid="certifications-grid"
      className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
    >
      {list.map((c, i) => {
        const Icon = getIcon(c.icon);
        return (
          <Reveal key={c.title} delay={i * 0.05}>
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 300, damping: 22 }}
              data-testid={`certification-${i}`}
              className="flex h-full flex-col rounded-2xl border border-ink/10 bg-white p-6 shadow-soft transition-colors hover:border-brand-400/50"
            >
              <div className="flex items-center justify-between">
                <span className="grid h-12 w-12 place-items-center rounded-xl border border-brand-500/25 bg-brand-50 text-brand-600">
                  <Icon className="h-6 w-6" strokeWidth={1.7} />
                </span>
                <span
                  className={`rounded-full border px-3 py-1 text-[11px] font-semibold ${
                    statusStyle[c.status] ?? statusStyle["Available on request"]
                  }`}
                >
                  {c.status}
                </span>
              </div>
              <h3 className="mt-5 font-display text-lg font-bold text-ink">
                {c.title}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">
                {c.desc}
              </p>
            </motion.div>
          </Reveal>
        );
      })}
    </div>
  );
}

export function CertNote() {
  return (
    <div className="mt-6 flex items-start gap-3 rounded-2xl border border-ink/10 bg-brand-50/50 px-5 py-4">
      <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-brand-600" />
      <p className="text-sm leading-relaxed text-slate-600">
        We do not publish license numbers we cannot verify. Where a registration
        is in place, the relevant details and documents are{" "}
        <span className="font-semibold text-ink">available on request</span> for
        genuine buyer due diligence.
      </p>
    </div>
  );
}
