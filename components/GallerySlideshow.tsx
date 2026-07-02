"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";
import { galleryItems } from "@/lib/site";

const INTERVAL = 4200;

/**
 * Auto-playing cinematic slideshow: crossfade + slow Ken Burns zoom,
 * caption bar, progress dots and manual arrows. Pauses on hover and via
 * the play/pause control; respects prefers-reduced-motion.
 */
export default function GallerySlideshow() {
  const [index, setIndex] = useState(0);
  const [playing, setPlaying] = useState(true);
  const [hovered, setHovered] = useState(false);
  const reduced = useRef(false);

  useEffect(() => {
    reduced.current = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (reduced.current) setPlaying(false);
  }, []);

  const go = useCallback(
    (dir: 1 | -1) =>
      setIndex((i) => (i + dir + galleryItems.length) % galleryItems.length),
    []
  );

  useEffect(() => {
    if (!playing || hovered) return;
    const t = setInterval(() => go(1), INTERVAL);
    return () => clearInterval(t);
  }, [playing, hovered, go]);

  const item = galleryItems[index];

  return (
    <div
      data-testid="gallery-slideshow"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group relative overflow-hidden rounded-3xl border border-ink/10 bg-ink shadow-card"
      role="region"
      aria-roledescription="carousel"
      aria-label="Gallery slideshow"
    >
      <div className="relative aspect-[16/9] w-full sm:aspect-[21/9]">
        <AnimatePresence mode="popLayout">
          <motion.div
            key={item.src}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.9, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            {/* slow Ken Burns drift on the active slide */}
            <motion.div
              initial={{ scale: 1 }}
              animate={{ scale: reduced.current ? 1 : 1.08 }}
              transition={{ duration: INTERVAL / 1000 + 1.2, ease: "linear" }}
              className="absolute inset-0"
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(max-width: 1280px) 100vw, 1280px"
                priority={index === 0}
                className="object-cover"
              />
            </motion.div>
          </motion.div>
        </AnimatePresence>

        {/* caption bar */}
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/85 via-ink/40 to-transparent p-5 pt-16 sm:p-7">
          <AnimatePresence mode="wait">
            <motion.div
              key={item.src}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.4 }}
            >
              <span className="font-mono text-[10px] uppercase tracking-[0.26em] text-brand-200">
                {item.category}
              </span>
              <p className="mt-1 font-display text-lg font-bold text-white sm:text-2xl">
                {item.caption}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* controls */}
        <button
          aria-label="Previous slide"
          onClick={() => go(-1)}
          className="absolute left-3 top-1/2 z-10 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full border border-white/25 bg-ink/25 text-white opacity-0 backdrop-blur-sm transition-opacity hover:bg-ink/50 focus-visible:opacity-100 group-hover:opacity-100 sm:left-5"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          aria-label="Next slide"
          onClick={() => go(1)}
          className="absolute right-3 top-1/2 z-10 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full border border-white/25 bg-ink/25 text-white opacity-0 backdrop-blur-sm transition-opacity hover:bg-ink/50 focus-visible:opacity-100 group-hover:opacity-100 sm:right-5"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
        <button
          aria-label={playing ? "Pause slideshow" : "Play slideshow"}
          onClick={() => setPlaying((p) => !p)}
          className="absolute right-4 top-4 z-10 grid h-9 w-9 place-items-center rounded-full border border-white/25 bg-ink/25 text-white backdrop-blur-sm transition-colors hover:bg-ink/50"
        >
          {playing ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
        </button>
      </div>

      {/* progress dots */}
      <div className="absolute bottom-4 right-5 z-10 flex gap-1.5 sm:bottom-6 sm:right-7">
        {galleryItems.map((g, i) => (
          <button
            key={g.src}
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => setIndex(i)}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              i === index
                ? "w-6 bg-white"
                : "w-1.5 bg-white/40 hover:bg-white/70"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
