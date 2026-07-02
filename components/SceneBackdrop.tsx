"use client";

import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";
import type { SceneVariant } from "./PageScene";

const PageScene = dynamic(() => import("./PageScene"), {
  ssr: false,
  loading: () => (
    <div className="flex h-full w-full items-center justify-center">
      <div className="h-28 w-28 animate-pulse rounded-full bg-brand-500/25 blur-2xl" />
    </div>
  ),
});

/**
 * Client shell that mounts a per-page 3D vignette only while it is on
 * screen. Server pages can drop this anywhere as a decorative layer.
 */
export default function SceneBackdrop({
  variant,
  className = "",
}: {
  variant: SceneVariant;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  // Mount once the block first scrolls into view, then keep the WebGL
  // context alive to avoid re-init flicker on scroll bounce.
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        setMounted(true);
        io.disconnect();
      }
    }, { threshold: 0.05 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={ref} className={`pointer-events-none ${className}`} aria-hidden>
      {mounted && <PageScene variant={variant} />}
    </div>
  );
}
