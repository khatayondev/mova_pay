import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1340px",
      },
    },
    extend: {
      colors: {
        // High-energy MoMo Gold
        brand: {
          DEFAULT: "#FFD200",
          yellow: "#FFD200",
          hover: "#FFE875",
          active: "#D4A300",
          muted: "rgba(255, 210, 0, 0.15)",
          glow: "rgba(255, 210, 0, 0.35)",
        },
        // Premium SaaS Electric Blue (from reference design)
        saas: {
          blue: "#2563EB",
          blueHover: "#1D4ED8",
          blueLight: "#EFF6FF",
          blueMuted: "rgba(37, 99, 235, 0.1)",
          dark: "#0F172A",
          slate: "#334155",
          subtle: "#F8FAFC",
        },
        background: "var(--background)",
        foreground: "var(--foreground)",
        border: "var(--border)",
        input: "var(--input)",
        ring: "var(--ring)",
      },
      borderRadius: {
        xs: "6px",
        sm: "8px",
        md: "12px",
        lg: "16px",
        xl: "20px",
        "2xl": "28px",
        "3xl": "36px",
        full: "9999px",
      },
      fontFamily: {
        sans: ["var(--font-jakarta)", "var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-jakarta)", "var(--font-inter)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        "saas-card": "0 10px 30px -5px rgba(15, 23, 42, 0.04), 0 0 1px 1px rgba(255, 255, 255, 0.9)",
        "saas-hover": "0 20px 40px -10px rgba(37, 99, 235, 0.12), 0 0 1px 1px rgba(255, 255, 255, 1)",
        "phone-3d": "0 25px 50px -12px rgba(15, 23, 42, 0.25), 0 0 0 1px rgba(15, 23, 42, 0.08)",
        "pill-glow": "0 4px 14px 0 rgba(37, 99, 235, 0.25)",
        "brand-glow": "0 4px 18px 0 rgba(255, 210, 0, 0.4)",
      },
    },
  },
  plugins: [],
};

export default config;
