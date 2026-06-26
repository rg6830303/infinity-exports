"use client";

import { useEffect, useState } from "react";
import { Languages } from "lucide-react";

// Region-grouped languages (Google Translate codes). English is the default.
// This list is rendered by us (a native <select>), so it ALWAYS shows up —
// it does not depend on Google injecting its own widget UI.
const REGIONS: { region: string; langs: [string, string][] }[] = [
  {
    region: "Indian Subcontinent",
    langs: [
      ["hi", "हिन्दी — Hindi"],
      ["bn", "বাংলা — Bengali"],
      ["ta", "தமிழ் — Tamil"],
      ["te", "తెలుగు — Telugu"],
      ["mr", "मराठी — Marathi"],
      ["gu", "ગુજરાતી — Gujarati"],
      ["kn", "ಕನ್ನಡ — Kannada"],
      ["ml", "മലയാളം — Malayalam"],
      ["pa", "ਪੰਜਾਬੀ — Punjabi"],
      ["ur", "اردو — Urdu"],
      ["or", "ଓଡ଼ିଆ — Odia"],
      ["as", "অসমীয়া — Assamese"],
      ["ne", "नेपाली — Nepali"],
      ["si", "සිංහල — Sinhala"],
    ],
  },
  {
    region: "East Asia",
    langs: [
      ["zh-CN", "简体中文 — Chinese (Simplified)"],
      ["zh-TW", "繁體中文 — Chinese (Traditional)"],
      ["ja", "日本語 — Japanese"],
      ["ko", "한국어 — Korean"],
      ["mn", "Монгол — Mongolian"],
    ],
  },
  {
    region: "Southeast Asia",
    langs: [
      ["id", "Bahasa Indonesia — Indonesian"],
      ["ms", "Bahasa Melayu — Malay"],
      ["th", "ไทย — Thai"],
      ["vi", "Tiếng Việt — Vietnamese"],
      ["tl", "Filipino"],
      ["my", "မြန်မာ — Burmese"],
      ["km", "ខ្មែរ — Khmer"],
    ],
  },
  {
    region: "Middle East",
    langs: [
      ["ar", "العربية — Arabic"],
      ["fa", "فارسی — Persian"],
      ["iw", "עברית — Hebrew"],
      ["tr", "Türkçe — Turkish"],
      ["ps", "پښتو — Pashto"],
    ],
  },
  {
    region: "Europe",
    langs: [
      ["es", "Español — Spanish"],
      ["fr", "Français — French"],
      ["de", "Deutsch — German"],
      ["it", "Italiano — Italian"],
      ["pt", "Português — Portuguese"],
      ["ru", "Русский — Russian"],
      ["nl", "Nederlands — Dutch"],
      ["pl", "Polski — Polish"],
      ["uk", "Українська — Ukrainian"],
      ["el", "Ελληνικά — Greek"],
      ["sv", "Svenska — Swedish"],
      ["ro", "Română — Romanian"],
      ["hu", "Magyar — Hungarian"],
      ["cs", "Čeština — Czech"],
      ["da", "Dansk — Danish"],
      ["fi", "Suomi — Finnish"],
      ["no", "Norsk — Norwegian"],
    ],
  },
  {
    region: "Africa",
    langs: [
      ["sw", "Kiswahili — Swahili"],
      ["am", "አማርኛ — Amharic"],
      ["ha", "Hausa"],
      ["yo", "Yorùbá — Yoruba"],
      ["zu", "isiZulu — Zulu"],
      ["af", "Afrikaans"],
      ["so", "Soomaali — Somali"],
    ],
  },
  {
    region: "Americas",
    langs: [["ht", "Kreyòl Ayisyen — Haitian Creole"]],
  },
];

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

// Read the active target language from Google's translation cookie.
function currentLang(): string {
  if (typeof document === "undefined") return "en";
  const m = document.cookie.match(/googtrans=\/[^/]+\/([^;]+)/);
  return m ? decodeURIComponent(m[1]) : "en";
}

// Registrable root (infinityexports.org) so the choice persists across the
// apex and the www subdomain.
function rootDomain(): string {
  const parts = location.hostname.split(".");
  return parts.length > 2 ? parts.slice(-2).join(".") : location.hostname;
}

// Switch language by writing Google's `googtrans` cookie, then reloading so the
// Translate engine re-renders the page in that language. English clears it.
function switchTo(lang: string) {
  const past = "expires=Thu, 01 Jan 1970 00:00:00 GMT";
  const future = "expires=Fri, 31 Dec 2030 23:59:59 GMT";
  const host = rootDomain();
  for (const scope of ["path=/", `path=/;domain=.${host}`, `path=/;domain=${location.hostname}`]) {
    document.cookie = `googtrans=;${scope};${past}`;
  }
  if (lang && lang !== "en") {
    const v = `/en/${lang}`;
    document.cookie = `googtrans=${v};path=/;${future}`;
    document.cookie = `googtrans=${v};path=/;domain=.${host};${future}`;
  }
  location.reload();
}

export default function GoogleTranslate() {
  const [lang, setLang] = useState("en");

  useEffect(() => {
    setLang(currentLang());

    // Load the hidden Google Translate engine. With the googtrans cookie set,
    // it translates the page on load — no visible Google widget required.
    const init = () => {
      const T = window.google?.translate?.TranslateElement;
      if (!T) return;
      const host = document.getElementById("google_translate_element");
      if (host && host.childNodes.length > 0) return;
      new T({ pageLanguage: "en", autoDisplay: false }, "google_translate_element");
    };
    window.googleTranslateElementInit = init;

    if (window.google?.translate?.TranslateElement) {
      init();
    } else if (!document.getElementById("google-translate-script")) {
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
      {/* notranslate: keep the option labels in their own scripts, untouched. */}
      <select
        aria-label="Select language"
        className="gt-select notranslate"
        value={lang}
        onChange={(e) => switchTo(e.target.value)}
      >
        <option value="en">English</option>
        {REGIONS.map((r) => (
          <optgroup key={r.region} label={r.region}>
            {r.langs.map(([code, label]) => (
              <option key={code} value={code}>
                {label}
              </option>
            ))}
          </optgroup>
        ))}
      </select>
      {/* Hidden engine — drives translation via the cookie above. */}
      <div id="google_translate_element" className="gt-engine" aria-hidden />
    </div>
  );
}
