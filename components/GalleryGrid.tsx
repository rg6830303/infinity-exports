"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { galleryItems } from "@/lib/site";

const CATEGORIES = ["All", "Products", "Logistics", "Office"] as const;

export default function GalleryGrid() {
  const [category, setCategory] = useState<(typeof CATEGORIES)[number]>("All");
  const [active, setActive] = useState<number | null>(null);

  const items = useMemo(
    () =>
      category === "All"
        ? galleryItems
        : galleryItems.filter((g) => g.category === category),
    [category]
  );

  const move = (dir: 1 | -1) => {
    if (active === null) return;
    setActive((active + dir + items.length) % items.length);
  };

  return (
    <>
      {/* filter chips */}
      <div className="flex flex-wrap gap-2">
        {CATEGORIES.map((c) => (
          <button
            key={c}
            onClick={() => {
              setCategory(c);
              setActive(null);
            }}
            className={`rounded-full border px-4 py-2 text-sm font-semibold transition-colors ${
              category === c
                ? "border-brand-600 bg-brand-600 text-white"
                : "border-ink/15 bg-white text-slate-600 hover:border-brand-400/60 hover:text-brand-700"
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      {/* masonry-ish responsive grid */}
      <motion.div layout className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {items.map((g, i) => (
            <motion.button
              layout
              key={g.src}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.3 }}
              onClick={() => setActive(i)}
              className={`group relative block w-full overflow-hidden rounded-2xl border border-ink/10 bg-white text-left shadow-soft focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 ${
                i % 5 === 0 ? "sm:row-span-2 aspect-[3/4]" : "aspect-[4/3]"
              }`}
            >
              <Image
                src={g.src}
                alt={g.alt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/70 via-ink/25 to-transparent p-4 pt-10">
                <span className="block text-sm font-semibold text-white">
                  {g.caption}
                </span>
                <span className="mt-0.5 block font-mono text-[10px] uppercase tracking-[0.22em] text-white/70">
                  {g.category}
                </span>
              </span>
            </motion.button>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* lightbox */}
      <AnimatePresence>
        {active !== null && items[active] && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[80] flex items-center justify-center bg-ink/85 p-4 backdrop-blur-sm"
            onClick={() => setActive(null)}
            role="dialog"
            aria-modal="true"
            aria-label={items[active].caption}
          >
            <button
              aria-label="Close"
              className="absolute right-5 top-5 grid h-11 w-11 place-items-center rounded-full border border-white/25 text-white transition-colors hover:bg-white/10"
              onClick={() => setActive(null)}
            >
              <X className="h-5 w-5" />
            </button>
            <button
              aria-label="Previous image"
              className="absolute left-3 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full border border-white/25 text-white transition-colors hover:bg-white/10 sm:left-6"
              onClick={(e) => {
                e.stopPropagation();
                move(-1);
              }}
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              aria-label="Next image"
              className="absolute right-3 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full border border-white/25 text-white transition-colors hover:bg-white/10 sm:right-6"
              onClick={(e) => {
                e.stopPropagation();
                move(1);
              }}
            >
              <ChevronRight className="h-5 w-5" />
            </button>

            <motion.figure
              key={items[active].src}
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.25 }}
              className="max-h-[85vh] w-full max-w-4xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl">
                <Image
                  src={items[active].src}
                  alt={items[active].alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 896px"
                  className="object-contain"
                  priority
                />
              </div>
              <figcaption className="mt-3 text-center text-sm text-white/85">
                {items[active].caption}
                <span className="ml-2 font-mono text-[10px] uppercase tracking-[0.22em] text-white/50">
                  {items[active].category}
                </span>
              </figcaption>
            </motion.figure>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
