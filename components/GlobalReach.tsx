"use client";

import { motion } from "framer-motion";
import { Plane, Ship } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";
import Aurora from "./Aurora";

const W = 1000;
const H = 520;

const hub = { x: 430, y: 250, label: "Kolkata" };

const nodes = [
  { x: 150, y: 170, label: "New York" },
  { x: 300, y: 120, label: "London" },
  { x: 360, y: 220, label: "Dubai" },
  { x: 640, y: 175, label: "Shanghai" },
  { x: 600, y: 300, label: "Singapore" },
  { x: 770, y: 410, label: "Sydney" },
];

function arc(x1: number, y1: number, x2: number, y2: number) {
  const mx = (x1 + x2) / 2;
  const my = (y1 + y2) / 2 - Math.hypot(x2 - x1, y2 - y1) * 0.35;
  return `M ${x1} ${y1} Q ${mx} ${my} ${x2} ${y2}`;
}

export default function GlobalReach() {
  return (
    <section className="section-b relative overflow-hidden py-20 lg:py-28">
      <Aurora className="opacity-45" />
      <div className="pointer-events-none absolute inset-0 bg-grid-light opacity-[0.05] [background-size:46px_46px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />
      <div className="container-x relative">
        <SectionHeader
          index="04"
          kicker="Global network"
          title="One hub. Routes to every continent."
          highlight={["continent."]}
          description="From our base in Kolkata, we orchestrate shipments across major trade lanes — by sea and by air — keeping your cargo moving on the fastest viable route."
        />

        <Reveal delay={0.1}>
          <div className="relative mx-auto mt-14 max-w-5xl overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-[#0c1130] to-[#0a0f2a] p-4 shadow-ring">
            <svg
              viewBox={`0 0 ${W} ${H}`}
              className="h-auto w-full"
              role="img"
              aria-label="Animated map of Infinity Exports trade routes from Kolkata"
            >
              <defs>
                <radialGradient id="grGlow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#5988ff" stopOpacity="0.35" />
                  <stop offset="100%" stopColor="#5988ff" stopOpacity="0" />
                </radialGradient>
                <linearGradient id="grLine" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#2f5fff" stopOpacity="0.1" />
                  <stop offset="50%" stopColor="#8eb3ff" stopOpacity="0.9" />
                  <stop offset="100%" stopColor="#2f5fff" stopOpacity="0.1" />
                </linearGradient>
              </defs>

              {/* faint lat/long grid */}
              <g stroke="#5988ff" strokeOpacity="0.08">
                {Array.from({ length: 9 }).map((_, i) => (
                  <line
                    key={`v${i}`}
                    x1={(i + 1) * (W / 10)}
                    y1="0"
                    x2={(i + 1) * (W / 10)}
                    y2={H}
                  />
                ))}
                {Array.from({ length: 5 }).map((_, i) => (
                  <line
                    key={`h${i}`}
                    x1="0"
                    y1={(i + 1) * (H / 6)}
                    x2={W}
                    y2={(i + 1) * (H / 6)}
                  />
                ))}
              </g>

              {/* routes */}
              {nodes.map((n, i) => {
                const d = arc(hub.x, hub.y, n.x, n.y);
                const id = `route-${i}`;
                return (
                  <g key={n.label}>
                    <path d={d} fill="none" stroke="#3450c9" strokeOpacity="0.35" strokeWidth="1.5" />
                    <motion.path
                      d={d}
                      fill="none"
                      stroke="url(#grLine)"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      initial={{ pathLength: 0, opacity: 0 }}
                      whileInView={{ pathLength: 1, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.4, delay: 0.2 + i * 0.15, ease: "easeInOut" }}
                    />
                    {/* moving cargo dot */}
                    <circle r="3.5" fill="#bcd2ff">
                      <animateMotion
                        dur={`${4 + i * 0.6}s`}
                        repeatCount="indefinite"
                        path={d}
                        rotate="auto"
                      />
                    </circle>
                    <path id={id} d={d} fill="none" stroke="none" />
                  </g>
                );
              })}

              {/* destination nodes */}
              {nodes.map((n, i) => (
                <g key={`node-${n.label}`}>
                  <motion.circle
                    cx={n.x}
                    cy={n.y}
                    r="14"
                    fill="#5988ff"
                    fillOpacity="0.25"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: [0, 1.6, 1] }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, delay: 0.4 + i * 0.15, repeat: Infinity, repeatDelay: 1.5 }}
                    style={{ transformOrigin: `${n.x}px ${n.y}px` }}
                  />
                  <circle cx={n.x} cy={n.y} r="4.5" fill="#dae6ff" />
                  <text
                    x={n.x}
                    y={n.y - 18}
                    textAnchor="middle"
                    className="fill-white/70 text-[13px] font-medium"
                  >
                    {n.label}
                  </text>
                </g>
              ))}

              {/* hub */}
              <circle cx={hub.x} cy={hub.y} r="60" fill="url(#grGlow)" />
              <circle cx={hub.x} cy={hub.y} r="8" fill="#fff" />
              <circle cx={hub.x} cy={hub.y} r="8" fill="none" stroke="#8eb3ff" strokeWidth="2">
                <animate attributeName="r" from="8" to="34" dur="2.4s" repeatCount="indefinite" />
                <animate attributeName="opacity" from="0.9" to="0" dur="2.4s" repeatCount="indefinite" />
              </circle>
              <text
                x={hub.x}
                y={hub.y + 28}
                textAnchor="middle"
                className="fill-white text-[15px] font-semibold"
              >
                {hub.label}, India
              </text>
            </svg>

            {/* legend */}
            <div className="flex flex-wrap items-center justify-center gap-6 px-4 pb-3 pt-1 text-xs font-medium text-white/70">
              <span className="inline-flex items-center gap-2">
                <Ship className="h-4 w-4 text-brand-300" /> Ocean freight
              </span>
              <span className="inline-flex items-center gap-2">
                <Plane className="h-4 w-4 text-brand-300" /> Air cargo
              </span>
              <span className="inline-flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-white" /> Active trade lane
              </span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
