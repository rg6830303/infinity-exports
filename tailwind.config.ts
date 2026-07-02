import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Warm near-black with a green cast — pairs with the petrol brand.
        ink: {
          DEFAULT: "#0c1613",
          soft: "#15211d",
          muted: "#3c4a44",
        },
        // Primary: deep petrol / teal — an established trading-house green
        // instead of the default-template blue.
        brand: {
          50: "#f0faf7",
          100: "#dcf3ec",
          200: "#bfe7db",
          300: "#8fd5c2",
          400: "#58b9a2",
          500: "#2f9e85",
          600: "#1f826d",
          700: "#196857",
          800: "#175347",
          900: "#15453c",
          950: "#0a2a24",
        },
        // Secondary: brass/amber for highlights, ratings and small accents.
        accent: {
          50: "#fdf6e9",
          100: "#faeacc",
          200: "#f5d694",
          300: "#eebd5c",
          400: "#e5a232",
          500: "#d4881b",
          600: "#b96e12",
          700: "#935413",
          800: "#784417",
          900: "#653a17",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      boxShadow: {
        glow: "0 0 60px -15px rgba(47, 158, 133, 0.45)",
        card: "0 24px 60px -24px rgba(10, 42, 36, 0.28)",
        soft: "0 12px 40px -18px rgba(10, 42, 36, 0.16)",
        "inner-light": "inset 0 1px 0 0 rgba(255,255,255,0.8)",
        ring: "0 0 0 1px rgba(10,42,36,0.06), 0 18px 50px -24px rgba(10,42,36,0.28)",
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
