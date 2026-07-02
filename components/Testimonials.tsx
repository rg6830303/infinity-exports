"use client";

import { Quote, Star } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";
import { testimonials } from "@/lib/site";

function Stars({ n }: { n: number }) {
  return (
    <span className="flex gap-0.5 text-amber-400" aria-label={`${n} out of 5 stars`}>
      {Array.from({ length: n }).map((_, i) => (
        <Star key={i} className="h-3.5 w-3.5 fill-current" />
      ))}
    </span>
  );
}

export default function Testimonials({
  compact = false,
}: {
  compact?: boolean;
}) {
  if (compact) {
    // Slim variant for the quote-page sidebar.
    return (
      <div className="flex flex-col gap-4">
        {testimonials.slice(0, 2).map((t) => (
          <figure
            key={t.name}
            className="rounded-2xl border border-ink/10 bg-white p-5 shadow-soft"
          >
            <Stars n={t.rating} />
            <blockquote className="mt-3 text-sm leading-relaxed text-slate-600">
              &ldquo;{t.quote}&rdquo;
            </blockquote>
            <figcaption className="mt-3 text-xs text-slate-500">
              <span className="font-semibold text-ink">{t.name}</span> —{" "}
              {t.location}
            </figcaption>
          </figure>
        ))}
      </div>
    );
  }

  return (
    <section
      id="testimonials"
      className="section-a relative overflow-hidden py-20 lg:py-28"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[url('/images/patterns/trade-pattern.svg')] bg-[length:520px] opacity-40 [mask-image:radial-gradient(ellipse_at_center,black,transparent_78%)]"
        aria-hidden
      />
      <div className="pointer-events-none absolute -right-24 top-10 h-72 w-72 rounded-full bg-brand-500/10 blur-3xl" />
      <div className="container-x relative">
        <SectionHeader
          index="08"
          kicker="Buyer voices"
          title="What our trade partners say"
          highlight={["trade", "partners"]}
          description="A few words from buyers we ship for across the Gulf, Europe and Africa — representative of the feedback that keeps our repeat rate high."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.07}>
              <figure className="relative flex h-full flex-col rounded-2xl border border-ink/10 bg-white p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-brand-400/50 hover:shadow-card">
                <Quote className="h-6 w-6 text-brand-300" />
                <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-slate-600">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-5 border-t border-ink/[0.08] pt-4">
                  <div className="flex items-center justify-between gap-2">
                    <p className="font-display text-sm font-bold text-ink">
                      {t.name}
                    </p>
                    <Stars n={t.rating} />
                  </div>
                  <p className="mt-1 text-xs leading-relaxed text-slate-500">
                    {t.role}
                    <br />
                    {t.location}
                  </p>
                  <span className="mt-3 inline-block rounded-full border border-brand-200 bg-brand-50 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.14em] text-brand-700">
                    {t.category}
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
