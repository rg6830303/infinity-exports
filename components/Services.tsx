"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";
import FlowLines from "./FlowLines";
import ServicesGrid from "./ServicesGrid";

export default function Services() {
  return (
    <section
      id="services"
      className="section-b relative overflow-hidden py-20 lg:py-28"
    >
      <FlowLines className="opacity-60" />
      <div className="container-x relative">
        <SectionHeader
          index="02"
          kicker="What we do"
          title="End-to-end trade solutions"
          highlight={["trade", "solutions"]}
          description="Six connected services that take a buyer requirement from first enquiry to dispatch — sourcing, coordination, quality, documentation and compliance, all in one place."
        />

        <div className="mt-14">
          <ServicesGrid />
        </div>

        <Reveal delay={0.1}>
          <div className="mt-10 flex justify-center">
            <Link
              href="/services"
              data-testid="home-view-all-services"
              className="btn-ghost"
            >
              View All Services <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
