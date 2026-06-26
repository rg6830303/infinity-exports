"use client";

import { useEffect, useRef } from "react";

/**
 * 2D "connection network" backdrop with pseudo-3D depth — drifting nodes
 * (sized/brightened by depth) linked by fading lines, plus a few glowing
 * hubs. Single rAF, DPR capped, pauses off-screen, honours reduced motion.
 */
export default function ParticleNetwork({
  className = "",
  density = 0.00011,
  color = "120,160,255",
  linkColor = "89,136,255",
  hubColor = "180,205,255",
}: {
  className?: string;
  density?: number;
  color?: string;
  linkColor?: string;
  hubColor?: string;
}) {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Animate only on larger pointer devices; on phones draw a single
    // static frame so scrolling stays buttery.
    const reduce =
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      window.innerWidth < 1024;

    let w = 0;
    let h = 0;
    let dpr = Math.min(window.devicePixelRatio || 1, 1.5);
    type P = {
      x: number;
      y: number;
      vx: number;
      vy: number;
      z: number; // depth 0.35..1
      hub: boolean;
      ph: number;
    };
    let pts: P[] = [];
    let raf = 0;
    let running = true;
    let t = 0;

    const build = () => {
      const rect = canvas.parentElement!.getBoundingClientRect();
      w = rect.width;
      h = rect.height;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const count = Math.min(80, Math.max(20, Math.floor(w * h * density)));
      pts = Array.from({ length: count }, (_, i) => {
        const z = 0.35 + Math.random() * 0.65;
        return {
          x: Math.random() * w,
          y: Math.random() * h,
          vx: (Math.random() - 0.5) * 0.28 * z,
          vy: (Math.random() - 0.5) * 0.28 * z,
          z,
          hub: i % 11 === 0,
          ph: Math.random() * Math.PI * 2,
        };
      });
    };

    const draw = () => {
      t += 0.016;
      ctx.clearRect(0, 0, w, h);
      const maxDist = Math.min(170, w / 5);

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
            const a = (1 - d / maxDist) * 0.22 * Math.min(p.z, q.z);
            ctx.strokeStyle = `rgba(${linkColor},${a})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(q.x, q.y);
            ctx.stroke();
          }
        }
      }

      // nodes on top
      for (const p of pts) {
        if (p.hub) {
          const pulse = 0.6 + 0.4 * Math.sin(t * 1.6 + p.ph);
          ctx.shadowBlur = 14 * p.z;
          ctx.shadowColor = `rgba(${hubColor},0.8)`;
          ctx.fillStyle = `rgba(${hubColor},${0.7 * pulse})`;
          ctx.beginPath();
          ctx.arc(p.x, p.y, 2.6 * p.z + 0.6, 0, Math.PI * 2);
          ctx.fill();
          ctx.shadowBlur = 0;
        } else {
          ctx.fillStyle = `rgba(${color},${0.45 * p.z})`;
          ctx.beginPath();
          ctx.arc(p.x, p.y, 1.5 * p.z, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      if (running && !reduce) raf = requestAnimationFrame(draw);
    };

    build();
    if (reduce) draw();
    else raf = requestAnimationFrame(draw);

    const onResize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      build();
    };
    window.addEventListener("resize", onResize);

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
  }, [density, color, linkColor, hubColor]);

  return (
    <canvas
      ref={ref}
      aria-hidden
      className={`pointer-events-none absolute inset-0 h-full w-full ${className}`}
    />
  );
}
