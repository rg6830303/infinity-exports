"use client";

import { useEffect, useRef } from "react";

/**
 * Lightweight 2D "connection network" backdrop — drifting nodes linked by
 * fading lines. Evokes global logistics routes, costs almost nothing
 * (single rAF, capped DPR), pauses when off-screen and honours
 * prefers-reduced-motion.
 */
export default function ParticleNetwork({
  className = "",
  density = 0.00009,
  color = "89,136,255",
  linkColor = "89,136,255",
}: {
  className?: string;
  density?: number;
  color?: string;
  linkColor?: string;
}) {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    let w = 0;
    let h = 0;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);
    type P = { x: number; y: number; vx: number; vy: number };
    let pts: P[] = [];
    let raf = 0;
    let running = true;

    const build = () => {
      const rect = canvas.parentElement!.getBoundingClientRect();
      w = rect.width;
      h = rect.height;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const count = Math.min(90, Math.max(18, Math.floor(w * h * density)));
      pts = Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
      }));
    };

    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      const maxDist = Math.min(160, w / 6);
      for (let i = 0; i < pts.length; i++) {
        const p = pts[i];
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > w) p.vx *= -1;
        if (p.y < 0 || p.y > h) p.vy *= -1;

        for (let j = i + 1; j < pts.length; j++) {
          const q = pts[j];
          const dx = p.x - q.x;
          const dy = p.y - q.y;
          const d = Math.hypot(dx, dy);
          if (d < maxDist) {
            ctx.strokeStyle = `rgba(${linkColor},${(1 - d / maxDist) * 0.16})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(q.x, q.y);
            ctx.stroke();
          }
        }
        ctx.fillStyle = `rgba(${color},0.55)`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, 1.6, 0, Math.PI * 2);
        ctx.fill();
      }
      if (running && !reduce) raf = requestAnimationFrame(draw);
    };

    build();
    if (reduce) {
      draw(); // single static frame
    } else {
      raf = requestAnimationFrame(draw);
    }

    const onResize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      build();
    };
    window.addEventListener("resize", onResize);

    // Pause when the section scrolls out of view
    const io = new IntersectionObserver(
      ([e]) => {
        running = e.isIntersecting;
        if (running && !reduce) {
          cancelAnimationFrame(raf);
          raf = requestAnimationFrame(draw);
        }
      },
      { threshold: 0 }
    );
    io.observe(canvas);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
      io.disconnect();
    };
  }, [density, color, linkColor]);

  return (
    <canvas
      ref={ref}
      aria-hidden
      className={`pointer-events-none absolute inset-0 h-full w-full ${className}`}
    />
  );
}
