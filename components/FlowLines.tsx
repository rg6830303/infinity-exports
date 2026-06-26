"use client";

/**
 * Animated flowing "trade current" lines — layered sine curves drifting
 * horizontally. Pure SVG + CSS transform (GPU-cheap), evokes shipping
 * lanes / data flow without another canvas.
 */
export default function FlowLines({ className = "" }: { className?: string }) {
  const rows = [
    { y: 120, amp: 26, dur: "22s", op: 0.5 },
    { y: 200, amp: 40, dur: "30s", op: 0.35 },
    { y: 300, amp: 30, dur: "26s", op: 0.45 },
    { y: 400, amp: 50, dur: "34s", op: 0.28 },
  ];
  const wave = (y: number, amp: number) =>
    `M -200 ${y} ` +
    Array.from({ length: 9 }, (_, i) => {
      const x = -200 + i * 175;
      const cy = y + (i % 2 === 0 ? -amp : amp);
      return `Q ${x + 87} ${cy} ${x + 175} ${y}`;
    }).join(" ");

  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
    >
      <svg
        className="h-full w-full"
        viewBox="0 0 1200 500"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id="flow-grad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#2f5fff" stopOpacity="0" />
            <stop offset="50%" stopColor="#2f5fff" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#2f5fff" stopOpacity="0" />
          </linearGradient>
        </defs>
        {rows.map((r, i) => (
          <g key={i} style={{ opacity: r.op }}>
            <path
              d={wave(r.y, r.amp)}
              fill="none"
              stroke="url(#flow-grad)"
              strokeWidth="1.5"
              style={{
                animation: `flow-x ${r.dur} linear infinite`,
                animationDelay: `${i * -4}s`,
              }}
            />
          </g>
        ))}
      </svg>
    </div>
  );
}
