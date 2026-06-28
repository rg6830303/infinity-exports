"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Check, ChevronDown, Globe2, Languages } from "lucide-react";

const languages = [
  { code: "en", label: "English", region: "Default" },
  { code: "hi", label: "Hindi", region: "India" },
  { code: "bn", label: "Bengali", region: "East India" },
  { code: "ar", label: "Arabic", region: "Middle East" },
  { code: "fr", label: "French", region: "Europe / Africa" },
  { code: "es", label: "Spanish", region: "Americas / Europe" },
];

const includedLanguages = languages.map((language) => language.code).join(",");

declare global {
  interface Window {
    googleTranslateElementInit?: () => void;
    google?: {
      translate?: {
        TranslateElement: new (
          options: Record<string, unknown>,
          element: string
        ) => void;
      };
    };
  }
}

export default function LanguageSwitcher() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("en");
  const pendingLanguage = useRef<string | null>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!document.getElementById("google_translate_element")) {
      const mount = document.createElement("div");
      mount.id = "google_translate_element";
      mount.className = "hidden";
      document.body.appendChild(mount);
    }

    window.googleTranslateElementInit = () => {
      if (!window.google?.translate?.TranslateElement) return;
      new window.google.translate.TranslateElement(
        {
          pageLanguage: "en",
          includedLanguages,
          autoDisplay: false,
          layout: 0,
        },
        "google_translate_element"
      );

      if (pendingLanguage.current) {
        applyLanguage(pendingLanguage.current);
        pendingLanguage.current = null;
      }
    };

    if (!document.getElementById("google-translate-script")) {
      const script = document.createElement("script");
      script.id = "google-translate-script";
      script.src =
        "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      script.async = true;
      document.body.appendChild(script);
    } else {
      window.googleTranslateElementInit?.();
    }
  }, []);

  useEffect(() => {
    const onPointerDown = (event: PointerEvent) => {
      if (!panelRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    if (open) document.addEventListener("pointerdown", onPointerDown);
    return () => document.removeEventListener("pointerdown", onPointerDown);
  }, [open]);

  const applyLanguage = (code: string) => {
    const combo = document.querySelector<HTMLSelectElement>(".goog-te-combo");

    if (!combo) {
      pendingLanguage.current = code;
      setTimeout(() => applyLanguage(code), 400);
      return;
    }

    combo.value = code;
    combo.dispatchEvent(new Event("change"));
  };

  const selectLanguage = (code: string) => {
    setSelected(code);
    applyLanguage(code);
    setOpen(false);
  };

  const active = languages.find((language) => language.code === selected);

  return (
    <>
      <style jsx global>{`
        .goog-te-banner-frame,
        .goog-te-gadget,
        .skiptranslate,
        iframe[id^=":"] {
          display: none !important;
        }
        body {
          top: 0 !important;
        }
      `}</style>

      <div
        ref={panelRef}
        className="fixed bottom-24 right-4 z-[65] sm:right-6 lg:bottom-28"
      >
        <button
          type="button"
          aria-label="Change language"
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
          className="flex h-12 items-center gap-2 rounded-full border border-ink/10 bg-white/95 px-3 text-sm font-semibold text-ink shadow-card backdrop-blur transition-all hover:-translate-y-0.5 hover:border-brand-400/50"
        >
          <Globe2 className="h-4 w-4 text-brand-600" />
          <span className="min-w-6 uppercase">{active?.code}</span>
          <ChevronDown
            className={`h-4 w-4 text-slate-400 transition-transform ${
              open ? "rotate-180" : ""
            }`}
          />
        </button>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: 12, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 12, scale: 0.96 }}
              transition={{ duration: 0.2 }}
              className="absolute bottom-14 right-0 w-[min(18rem,calc(100vw-2rem))] overflow-hidden rounded-2xl border border-ink/10 bg-white shadow-card"
            >
              <div className="flex items-center gap-3 border-b border-ink/10 px-4 py-3">
                <span className="grid h-9 w-9 place-items-center rounded-full bg-brand-50 text-brand-600">
                  <Languages className="h-4 w-4" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-ink">Language</p>
                  <p className="text-xs text-slate-500">
                    Region-wise options
                  </p>
                </div>
              </div>

              <div className="max-h-[17rem] overflow-y-auto p-2">
                {languages.map((language) => {
                  const isActive = language.code === selected;
                  return (
                    <button
                      key={language.code}
                      type="button"
                      onClick={() => selectLanguage(language.code)}
                      className={`flex w-full items-center justify-between gap-3 rounded-xl px-3 py-3 text-left transition-colors ${
                        isActive
                          ? "bg-brand-50 text-brand-700"
                          : "text-slate-700 hover:bg-brand-50/70 hover:text-ink"
                      }`}
                    >
                      <span>
                        <span className="block text-sm font-semibold">
                          {language.label}
                        </span>
                        <span className="block text-xs text-slate-500">
                          {language.region}
                        </span>
                      </span>
                      {isActive ? <Check className="h-4 w-4" /> : null}
                    </button>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}
