"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";
import GooglePresenceContent from "./GooglePresenceContent";

export default function GooglePresenceSection() {
  return (
    <section
      id="google-presence"
      className="section-a relative overflow-hidden py-20 lg:py-28"
    >
      <div className="container-x relative">
        <SectionHeader
          index="08"
          kicker="Verified online"
          title="Find Infinity Exports on Google"
          highlight={["Google"]}
          description="A consistent, verifiable business presence helps international buyers do their due diligence with confidence before they trade."
        />

        <div className="mt-14">
          <GooglePresenceContent />
        </div>

        <Reveal delay={0.1}>
          <div className="mt-10 flex justify-center">
            <Link
              href="/google-presence"
              data-testid="home-view-google-presence"
              className="btn-ghost"
            >
              More about our presence <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
