"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";
import ExportProcessFlow from "./ExportProcessFlow";
import { reassurance } from "@/lib/site";

export default function ExportProcessSection() {
  return (
    <section
      id="export-process"
      className="section-a relative overflow-hidden py-20 lg:py-28"
    >
      <div className="pointer-events-none absolute inset-0 bg-grid-light opacity-[0.4] [background-size:54px_54px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_78%)]" />
      <div className="container-x relative">
        <SectionHeader
          index="05"
          kicker="Export workflow"
          title="The full export process, explained"
          highlight={["export", "process,"]}
          description="From buyer inquiry to delivery — eleven clear steps. Tap any step to understand what it means for you as an international buyer."
        />

        <Reveal delay={0.1}>
          <div className="mx-auto mt-8 flex max-w-3xl flex-wrap items-center justify-center gap-2">
            {reassurance.slice(0, 4).map((r) => (
              <span
                key={r}
                className="rounded-full border border-ink/10 bg-brand-50/70 px-3.5 py-1.5 text-xs font-medium text-brand-700"
              >
                {r}
              </span>
            ))}
          </div>
        </Reveal>

        <div className="mt-14">
          <ExportProcessFlow variant="preview" />
        </div>

        <Reveal delay={0.1}>
          <div className="mt-12 flex justify-center">
            <Link
              href="/export-process"
              data-testid="home-view-export-process"
              className="btn-primary"
            >
              View Export Process <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
