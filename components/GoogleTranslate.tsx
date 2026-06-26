"use client";

import { useEffect } from "react";
import { Languages } from "lucide-react";

// Auto-translation into 100+ languages via the Google Website Translator.
// Client-only: the Google Translate Element rewrites the page's visible text
// in place into whatever language the visitor selects — no per-language
// routes or content duplication required.
declare global {
  interface Window {
    googleTranslateElementInit?: () => void;
    // The Google Translate Element is an untyped third-party global.
    google?: {
      translate?: {
        TranslateElement: new (
          options: Record<string, unknown>,
          element: string
        ) => void;
      } & {
        TranslateElement: { InlineLayout: { SIMPLE: number } };
      };
    };
  }
}

export default function GoogleTranslate() {
  useEffect(() => {
    const init = () => {
      const T = window.google?.translate?.TranslateElement;
      if (!T) return;
      // Guard against re-initialising on fast refresh / re-mounts.
      const host = document.getElementById("google_translate_element");
      if (host && host.childNodes.length > 0) return;
      new T(
        {
          pageLanguage: "en",
          // No `includedLanguages` => every supported language is offered.
          layout: T.InlineLayout.SIMPLE,
          autoDisplay: false,
        },
        "google_translate_element"
      );
    };

    window.googleTranslateElementInit = init;

    if (window.google?.translate?.TranslateElement) {
      init();
      return;
    }

    if (!document.getElementById("google-translate-script")) {
      const s = document.createElement("script");
      s.id = "google-translate-script";
      s.src =
        "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      s.async = true;
      document.body.appendChild(s);
    }
  }, []);

  return (
    <div className="gt-pill" title="Translate this page">
      <Languages className="h-4 w-4 shrink-0 text-brand-600" aria-hidden />
      <div id="google_translate_element" aria-label="Translate this page" />
    </div>
  );
}
