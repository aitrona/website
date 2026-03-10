import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["system-ui", "Segoe UI", "Inter", "sans-serif"],
        display: ["system-ui", "SF Pro Display", "Inter", "sans-serif"]
      },
      colors: {
        border: "hsl(var(--border))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        muted: "hsl(var(--muted))",
        "muted-foreground": "hsl(var(--muted-foreground))",
        card: "hsl(var(--card))",
        "card-foreground": "hsl(var(--card-foreground))",
        primary: "hsl(var(--primary))",
        "primary-foreground": "hsl(var(--primary-foreground))",
        accent: "hsl(var(--accent))",
        "accent-foreground": "hsl(var(--accent-foreground))",
        ring: "hsl(var(--ring))"
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.25rem"
      },
      boxShadow: {
        glow:
          "0 0 0 1px rgba(148, 163, 184, 0.35), 0 18px 60px rgba(15, 23, 42, 0.9), 0 0 120px rgba(56, 189, 248, 0.35)"
      },
      backgroundImage: {
        "hero-glow":
          "radial-gradient(800px circle at var(--x, 50%) var(--y, 20%), rgba(99,102,241,0.18), transparent 60%), radial-gradient(700px circle at 20% 80%, rgba(34,211,238,0.14), transparent 55%), radial-gradient(700px circle at 80% 75%, rgba(168,85,247,0.12), transparent 55%)",
        "grid-dark":
          "linear-gradient(to right, rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.06) 1px, transparent 1px)",
        "grid-light":
          "linear-gradient(to right, rgba(2,6,23,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(2,6,23,0.06) 1px, transparent 1px)"
      },
      animation: {
        "float-slow": "floatSlow 10s ease-in-out infinite"
      },
      keyframes: {
        floatSlow: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" }
        }
      }
    }
  },
  plugins: []
} satisfies Config;

