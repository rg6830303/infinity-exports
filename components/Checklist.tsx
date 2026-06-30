import { Check } from "lucide-react";

/** Simple server-safe checklist card used across detail pages. */
export default function Checklist({
  title,
  items,
  icon,
}: {
  title: string;
  items: string[];
  icon?: React.ReactNode;
}) {
  return (
    <div className="rounded-3xl border border-ink/10 bg-white p-7 shadow-soft">
      <h2 className="flex items-center gap-2 font-display text-lg font-bold text-ink">
        {icon}
        {title}
      </h2>
      <ul className="mt-4 space-y-3">
        {items.map((it) => (
          <li key={it} className="flex items-start gap-3">
            <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-brand-100 text-brand-700">
              <Check className="h-3.5 w-3.5" strokeWidth={2.5} />
            </span>
            <span className="text-sm leading-relaxed text-slate-600">{it}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
