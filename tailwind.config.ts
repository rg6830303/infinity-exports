import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#0a0e17",
          soft: "#111827",
          muted: "#374151",
        },
        brand: {
          50: "#eef4ff",
          100: "#dae6ff",
          200: "#bcd2ff",
          300: "#8eb3ff",
          400: "#5988ff",
          500: "#2f5fff",
          600: "#1a3fe6",
          700: "#1530b4",
          800: "#162a8f",
          900: "#172a73",
          950: "#0e1844",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      boxShadow: {
        glow: "0 0 60px -15px rgba(47, 95, 255, 0.45)",
        card: "0 24px 60px -24px rgba(14, 24, 68, 0.28)",
        soft: "0 12px 40px -18px rgba(14, 24, 68, 0.16)",
        "inner-light": "inset 0 1px 0 0 rgba(255,255,255,0.8)",
        ring: "0 0 0 1px rgba(14,24,68,0.06), 0 18px 50px -24px rgba(14,24,68,0.28)",
      },
      backgroundImage: {
        "grid-light":
          "linear-gradient(to right, rgba(14,24,68,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(14,24,68,0.05) 1px, transparent 1px)",
        "dot-light":
          "radial-gradient(rgba(14,24,68,0.08) 1px, transparent 1px)",
      },
      letterSpacing: {
        tightest: "-0.04em",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-14px)" },
        },
        shimmer: {
          "100%": { transform: "translateX(100%)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        aurora: {
          "0%, 100%": { transform: "translate(0,0) scale(1)", opacity: "0.6" },
          "33%": { transform: "translate(8%,-6%) scale(1.15)", opacity: "0.85" },
          "66%": { transform: "translate(-6%,8%) scale(0.95)", opacity: "0.7" },
        },
        "gradient-x": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        "spin-slow": {
          to: { transform: "rotate(360deg)" },
        },
        "pulse-ring": {
          "0%": { transform: "scale(0.8)", opacity: "0.5" },
          "80%, 100%": { transform: "scale(2.2)", opacity: "0" },
        },
        dash: {
          to: { strokeDashoffset: "0" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        shimmer: "shimmer 2.5s infinite",
        marquee: "marquee 32s linear infinite",
        aurora: "aurora 16s ease-in-out infinite",
        "gradient-x": "gradient-x 6s ease infinite",
        "spin-slow": "spin-slow 28s linear infinite",
        "pulse-ring": "pulse-ring 3s ease-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
