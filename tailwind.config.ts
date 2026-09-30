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
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        // Mova Brand Yellow Palette (MoMo Aligned)
        brand: {
          DEFAULT: "#FFD200",
          yellow: "#FFD200",
          hover: "#FFE875",
          active: "#D4A300",
          muted: "rgba(255, 210, 0, 0.15)",
          glow: "rgba(255, 210, 0, 0.35)",
          ring: "#FFD200",
          foreground: "#0B0E14",
        },
        // Deep Obsidian & Dark Surfaces
        obsidian: {
          950: "#06080B",
          DEFAULT: "#0B0E14", // Hero Canvas
          900: "#0B0E14",
          850: "#10141D",
          800: "#141923", // Elevated Cards
          700: "#1E2638",
          600: "#2B374E",
          border: "#1F2937", // Subtle Borders
          borderElevated: "#2D3748",
        },
        // Light Crisp Accents
        crisp: {
          DEFAULT: "#F8FAFC",
          card: "#FFFFFF",
          border: "#E2E8F0",
          subtle: "#F1F5F9",
        },
        // Semantic Token Mapping
        background: "var(--background)",
        foreground: "var(--foreground)",
        surface: {
          DEFAULT: "#141923",
          subtle: "#10141D",
          border: "#1F2937",
        },
        card: {
          DEFAULT: "#141923",
          foreground: "#F8FAFC",
        },
        popover: {
          DEFAULT: "#141923",
          foreground: "#F8FAFC",
        },
        primary: {
          DEFAULT: "#FFD200",
          foreground: "#0B0E14",
          hover: "#FFE875",
          active: "#D4A300",
        },
        secondary: {
          DEFAULT: "#1F2937",
          foreground: "#F8FAFC",
          hover: "#374151",
        },
        muted: {
          DEFAULT: "#1E2638",
          foreground: "#94A3B8",
        },
        accent: {
          DEFAULT: "#FFD200",
          foreground: "#0B0E14",
        },
        destructive: {
          DEFAULT: "#EF4444",
          foreground: "#FFFFFF",
        },
        success: {
          DEFAULT: "#10B981",
          foreground: "#FFFFFF",
          glow: "rgba(16, 185, 129, 0.25)",
        },
        border: "var(--border, #1F2937)",
        input: "var(--input, #1F2937)",
        ring: "#FFD200",
      },
      borderRadius: {
        xs: "4px",
        sm: "6px",
        md: "10px",
        lg: "14px",
        xl: "18px",
        "2xl": "24px",
        "3xl": "32px",
        full: "9999px",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "var(--font-jakarta)", "system-ui", "sans-serif"],
        display: ["var(--font-jakarta)", "var(--font-inter)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        "brand-glow": "0 0 25px -4px rgba(255, 210, 0, 0.35)",
        "brand-glow-lg": "0 0 40px -2px rgba(255, 210, 0, 0.45)",
        "card-subtle": "0 4px 20px -2px rgba(0, 0, 0, 0.5)",
        "card-elevated": "0 10px 30px -5px rgba(0, 0, 0, 0.65), 0 0 1px 1px rgba(255, 255, 255, 0.05)",
        "momo-badge": "0 2px 8px rgba(255, 210, 0, 0.2)",
      },
      keyframes: {
        "pulse-slow": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.5" },
        },
        "radar-ping": {
          "0%": { transform: "scale(0.95)", opacity: "0.8" },
          "50%": { transform: "scale(1.1)", opacity: "0.3" },
          "100%": { transform: "scale(1.25)", opacity: "0" },
        },
        shimmer: {
          "100%": {
            transform: "translateX(100%)",
          },
        },
      },
      animation: {
        "pulse-slow": "pulse-slow 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "radar-ping": "radar-ping 2s cubic-bezier(0, 0, 0.2, 1) infinite",
        shimmer: "shimmer 2s infinite",
      },
    },
  },
  plugins: [],
};

export default config;
