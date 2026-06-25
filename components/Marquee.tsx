"use client";

const items = [
  "Ocean Freight",
  "Air Cargo",
  "Customs Clearance",
  "Global Sourcing",
  "Warehousing",
  "Export Documentation",
  "Quality Control",
  "Door-to-Door Delivery",
];

export default function Marquee() {
  return (
    <div className="relative overflow-hidden border-y border-ink/5 bg-ink py-4">
      <div className="flex w-max animate-marquee">
        {[...items, ...items].map((item, i) => (
          <div key={i} className="flex items-center">
            <span className="px-8 text-sm font-semibold uppercase tracking-[0.2em] text-white/80">
              {item}
            </span>
            <span className="h-1.5 w-1.5 rounded-full bg-brand-500" />
          </div>
        ))}
      </div>
    </div>
  );
}
