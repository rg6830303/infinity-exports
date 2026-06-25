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
        display: ["var(--font-sora)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 60px -15px rgba(47, 95, 255, 0.45)",
        card: "0 20px 50px -20px rgba(14, 24, 68, 0.25)",
        soft: "0 10px 40px -15px rgba(14, 24, 68, 0.15)",
      },
      backgroundImage: {
        "grid-light":
          "linear-gradient(to right, rgba(14,24,68,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(14,24,68,0.05) 1px, transparent 1px)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-14px)" },
        },
        shimmer: {
          "100%": { transform: "translateX(100%)" },
        },
        "marquee": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        shimmer: "shimmer 2.5s infinite",
        marquee: "marquee 30s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
