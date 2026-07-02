"use client";

/**
 * Soft animated aurora/mesh-gradient backdrop.
 * Pure CSS (transform/opacity only) so it stays GPU-cheap and respects
 * prefers-reduced-motion via the global media query.
 */
export default function Aurora({ className = "" }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute inset-0 -z-10 overflow-hidden ${className}`}
    >
      <div className="absolute -left-[10%] top-[-15%] h-[42rem] w-[42rem] animate-aurora rounded-full bg-[radial-gradient(circle_at_center,rgba(89,136,255,0.30),transparent_60%)] blur-3xl" />
      <div
        className="absolute right-[-12%] top-[6%] h-[38rem] w-[38rem] animate-aurora rounded-full bg-[radial-gradient(circle_at_center,rgba(31,130,109,0.22),transparent_60%)] blur-3xl"
        style={{ animationDelay: "-5s" }}
      />
      <div
        className="absolute bottom-[-25%] left-[25%] h-[40rem] w-[40rem] animate-aurora rounded-full bg-[radial-gradient(circle_at_center,rgba(143,179,255,0.22),transparent_60%)] blur-3xl"
        style={{ animationDelay: "-9s" }}
      />
    </div>
  );
}
