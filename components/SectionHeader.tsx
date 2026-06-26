"use client";

import Reveal from "./Reveal";
import AnimatedHeading from "./AnimatedHeading";

/**
 * Consistent editorial section header: a mono index/kicker line, a
 * word-reveal title, and an optional description. Used across the whole
 * site so sections feel like one designed system rather than templates.
 */
export default function SectionHeader({
  index,
  kicker,
  title,
  highlight = [],
  description,
  align = "center",
  tone = "light",
}: {
  index: string;
  kicker: string;
  title: string;
  highlight?: string[];
  description?: string;
  align?: "center" | "left";
  tone?: "dark" | "light";
}) {
  const centered = align === "center";
  const labelClass = "label-mono";
  const titleColor = "text-ink";
  const descColor = "text-slate-600";
  void tone;

  return (
    <div className={centered ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <Reveal direction={centered ? "up" : "left"}>
        <span className={labelClass}>
          <span className="opacity-60">{index}</span>
          <span className="h-px w-6 bg-current opacity-40" />
          {kicker}
        </span>
      </Reveal>
      <AnimatedHeading
        as="h2"
        text={title}
        highlight={highlight}
        className={`mt-5 text-3xl font-bold sm:text-4xl lg:text-[2.7rem] ${titleColor}`}
      />
      {description && (
        <Reveal delay={0.1}>
          <p className={`mt-4 text-base leading-relaxed ${descColor}`}>
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
}
