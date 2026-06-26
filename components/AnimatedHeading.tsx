"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

/**
 * Word-by-word mask reveal for headings — the kind of typographic motion
 * you see on studio / agency sites. `highlight` words render in the brand
 * gradient.
 */
export default function AnimatedHeading({
  text,
  highlight = [],
  className = "",
  as = "h2",
  delay = 0,
}: {
  text: string;
  highlight?: string[];
  className?: string;
  as?: "h1" | "h2" | "h3";
  delay?: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const words = text.split(" ");
  const Tag = motion[as];
  const lower = highlight.map((h) => h.toLowerCase());

  return (
    <Tag ref={ref} className={className} aria-label={text}>
      {words.map((word, i) => {
        const clean = word.replace(/[.,]/g, "").toLowerCase();
        const isHi = lower.includes(clean);
        return (
          <span
            key={i}
            className="inline-block overflow-hidden align-bottom"
            aria-hidden
          >
            <motion.span
              className={`inline-block ${isHi ? "text-brand-600" : ""}`}
              initial={{ y: "110%" }}
              animate={inView ? { y: 0 } : { y: "110%" }}
              transition={{
                duration: 0.7,
                delay: delay + i * 0.06,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              {word}
            </motion.span>
            {i < words.length - 1 && " "}
          </span>
        );
      })}
    </Tag>
  );
}
