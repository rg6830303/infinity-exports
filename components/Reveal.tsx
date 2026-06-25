"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

type Direction = "up" | "down" | "left" | "right" | "none";

const offset: Record<Direction, { x: number; y: number }> = {
  up: { x: 0, y: 40 },
  down: { x: 0, y: -40 },
  left: { x: 40, y: 0 },
  right: { x: -40, y: 0 },
  none: { x: 0, y: 0 },
};

export default function Reveal({
  children,
  direction = "up",
  delay = 0,
  className,
  once = true,
}: {
  children: React.ReactNode;
  direction?: Direction;
  delay?: number;
  className?: string;
  once?: boolean;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once, margin: "-80px" });
  const { x, y } = offset[direction];

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, x, y }}
      animate={inView ? { opacity: 1, x: 0, y: 0 } : { opacity: 0, x, y }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
