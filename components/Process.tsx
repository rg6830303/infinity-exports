"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";
import Grid3D from "./Grid3D";
import ProcessTimeline from "./ProcessTimeline";

export default function Process() {
  return (
    <section
      id="process"
      className="section-b relative overflow-hidden py-20 lg:py-28"
    >
      <Grid3D className="opacity-50" />
      <div className="pointer-events-none absolute right-1/4 top-10 h-72 w-72 rounded-full bg-brand-600/10 blur-3xl" />
      <div className="container-x relative">
        <SectionHeader
          index="04"
          kicker="How it works"
          title="A transparent, buyer-first process"
          highlight={["buyer-first", "process"]}
          description="Tap any step to see what it means, what you provide and what we handle. Nothing jumps you to a form — only the clear CTAs do."
        />

        <div className="mt-14">
          <ProcessTimeline />
        </div>

        <Reveal delay={0.1}>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/process"
              data-testid="home-view-full-process"
              className="btn-ghost"
            >
              View Full Process <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/export-process"
              data-testid="home-process-to-export"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600 hover:underline"
            >
              See the full 11-step export workflow
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
