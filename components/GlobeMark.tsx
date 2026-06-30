"use client";

/**
 * GlobeMark — the secondary globe motif used across the brand
 * (navbar, footer, loader, section watermarks). Lightweight inline SVG,
 * no WebGL. Rotation respects prefers-reduced-motion via the global CSS rule.
 */
export default function GlobeMark({
  className = "",
  spin = false,
  strokeWidth = 1.25,
}: {
  className?: string;
  spin?: boolean;
  strokeWidth?: number;
}) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      role="img"
      aria-label="Infinity Exports globe motif"
      className={className}
    >
      <circle
        cx="24"
        cy="24"
        r="20"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeOpacity="0.9"
      />
      <g
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeOpacity="0.45"
        className={spin ? "origin-center animate-spin-slow" : ""}
        style={{ transformBox: "fill-box" }}
      >
        <ellipse cx="24" cy="24" rx="9" ry="20" />
        <ellipse cx="24" cy="24" rx="20" ry="9" transform="rotate(90 24 24)" />
        <line x1="4" y1="24" x2="44" y2="24" />
        <line x1="24" y1="4" x2="24" y2="44" />
      </g>
      {/* origin node (India) + a destination node */}
      <circle cx="29" cy="20" r="2.4" fill="currentColor" />
      <circle cx="15" cy="30" r="1.6" fill="currentColor" fillOpacity="0.55" />
    </svg>
  );
}
