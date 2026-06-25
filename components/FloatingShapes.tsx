"use client";

import { motion } from "framer-motion";

/**
 * Subtle drifting geometric shapes (rings, squares, plus marks) that add
 * gentle depth/motion to a section background without distracting from
 * content. GPU-only transforms.
 */
const shapes = [
  { type: "ring", top: "12%", left: "6%", size: 80, dur: 12, delay: 0 },
  { type: "square", top: "68%", left: "10%", size: 36, dur: 16, delay: 1.5 },
  { type: "plus", top: "22%", left: "88%", size: 28, dur: 10, delay: 0.8 },
  { type: "ring", top: "78%", left: "82%", size: 56, dur: 14, delay: 2.2 },
  { type: "square", top: "40%", left: "94%", size: 22, dur: 13, delay: 1 },
];

export default function FloatingShapes({
  className = "",
}: {
  className?: string;
}) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
    >
      {shapes.map((s, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{ top: s.top, left: s.left }}
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            y: [0, -22, 0],
            rotate: s.type === "square" ? [0, 90, 180] : [0, 18, 0],
          }}
          transition={{
            opacity: { duration: 1 },
            y: { duration: s.dur, repeat: Infinity, ease: "easeInOut", delay: s.delay },
            rotate: { duration: s.dur * 1.4, repeat: Infinity, ease: "easeInOut", delay: s.delay },
          }}
        >
          {s.type === "ring" && (
            <div
              className="rounded-full border border-brand-400/20"
              style={{ width: s.size, height: s.size }}
            />
          )}
          {s.type === "square" && (
            <div
              className="rounded-lg border border-brand-400/20"
              style={{ width: s.size, height: s.size }}
            />
          )}
          {s.type === "plus" && (
            <div className="relative" style={{ width: s.size, height: s.size }}>
              <span className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-brand-400/25" />
              <span className="absolute top-1/2 left-0 h-px w-full -translate-y-1/2 bg-brand-400/25" />
            </div>
          )}
        </motion.div>
      ))}
    </div>
  );
}
