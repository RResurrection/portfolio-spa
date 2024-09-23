import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        "fill-left-to-right-Next": {
          "0%": { width: "0%" },
          "10%": { width: "100%" }, // анімація завершується за 1 секунду
          "100%": { width: "100%" }, // зберігає ширину протягом решти часу (9 секунд паузи)
        },
        "fill-left-to-right-Redux": {
          "0%": { width: "0%" },
          "20%": { width: "100%" }, // анімація завершується за 1 секунду
          "100%": { width: "100%" }, // зберігає ширину протягом решти часу (9 секунд паузи)
        },
        "fill-left-to-right-Typescript": {
          "0%": { width: "0%" },
          "30%": { width: "100%" }, // анімація завершується за 1 секунду
          "100%": { width: "100%" }, // зберігає ширину протягом решти часу (9 секунд паузи)
        },
        "fill-left-to-right-Tailwind": {
          "0%": { width: "0%" },
          "40%": { width: "100%" }, // анімація завершується за 1 секунду
          "100%": { width: "100%" }, // зберігає ширину протягом решти часу (9 секунд паузи)
        },
      },
      animation: {
        "fill-left-to-right-Next":
          "fill-left-to-right-Next 10s ease-in-out infinite",
        "fill-left-to-right-Redux":
          "fill-left-to-right-Next 12s ease-in-out infinite",
        "fill-left-to-right-Typescript":
          "fill-left-to-right-Next 14s ease-in-out infinite",
        "fill-left-to-right-Tailwind":
          "fill-left-to-right-Next 16s ease-in-out infinite",
      },
      transitionDelay: {
        "5000": "5000ms",
      },
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
