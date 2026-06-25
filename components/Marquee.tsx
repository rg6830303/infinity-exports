"use client";

const ports = [
  "Rotterdam",
  "Singapore",
  "Shanghai",
  "Dubai · Jebel Ali",
  "Hamburg",
  "New York",
  "Antwerp",
  "Los Angeles",
  "Felixstowe",
  "Busan",
  "Mundra",
  "Colombo",
];

export default function Marquee() {
  return (
    <div className="relative overflow-hidden border-y border-white/10 bg-[#0a1030] py-5">
      <div className="container-x mb-3">
        <p className="text-center font-mono text-[11px] uppercase tracking-[0.28em] text-white/40">
          Trusted across the world&apos;s major trade gateways
        </p>
      </div>
      <div className="mask-fade-x">
        <div className="flex w-max animate-marquee items-center">
          {[...ports, ...ports].map((p, i) => (
            <div key={i} className="flex items-center">
              <span className="px-6 font-display text-lg font-semibold text-white/30 transition-colors hover:text-brand-300 sm:text-xl">
                {p}
              </span>
              <span className="h-1 w-1 rounded-full bg-brand-400/60" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
