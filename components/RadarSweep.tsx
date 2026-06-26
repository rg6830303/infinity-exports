"use client";

/**
 * Slow rotating radar/searchlight sweep with faint range rings — a
 * logistics-control-room motif. Pure CSS, very cheap.
 */
export default function RadarSweep({ className = "" }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
    >
      <div className="absolute left-1/2 top-1/2 aspect-square w-[120%] -translate-x-1/2 -translate-y-1/2 [mask-image:radial-gradient(circle,black,transparent_70%)]">
        <div className="radar-sweep absolute inset-0" />
        {[0.35, 0.6, 0.85].map((s) => (
          <div
            key={s}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-brand-400/12"
            style={{ width: `${s * 100}%`, height: `${s * 100}%` }}
          />
        ))}
      </div>
    </div>
  );
}
