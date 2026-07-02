"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";
import CertificationsGrid, { CertNote } from "./CertificationsGrid";

export default function CertificationsSection() {
  return (
    <section
      id="certifications"
      className="section-c relative overflow-hidden py-20 lg:py-28"
    >
      <div className="pointer-events-none absolute -left-20 top-10 h-72 w-72 rounded-full bg-brand-500/10 blur-3xl" />
      <div className="container-x relative">
        <SectionHeader
          index="07"
          kicker="Trust & compliance"
          title="Certifications & licenses"
          highlight={["licenses"]}
          description="Professional documentation that gives international buyers a transparent basis for trust. We show only what is verified — never invented numbers."
        />

        <div className="mt-14">
          <CertificationsGrid limit={3} />
          <CertNote />
        </div>

        <Reveal delay={0.1}>
          <div className="mt-10 flex justify-center">
            <Link
              href="/certifications"
              data-testid="home-view-certifications"
              className="btn-ghost"
            >
              View Certifications <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
