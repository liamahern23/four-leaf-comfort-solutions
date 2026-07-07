import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        green: {
          DEFAULT: "#2D6B4F",
          dark: "#255445",
          mid: "#3A7A5E",
          light: "#4A8A6E",
          muted: "#5A9A7E",
        },
        gold: {
          DEFAULT: "#D6B261",
          light: "#E8CB85",
          pale: "#F4E4B8",
        },
        cream: {
          DEFAULT: "#F7F3EE",
          warm: "#EDE8E1",
          dark: "#D8D0C4",
        },
        charcoal: {
          DEFAULT: "#1C1C1C",
          mid: "#2E2E2E",
          light: "#4A4A4A",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        serif: ["var(--font-playfair)", "Georgia", "serif"],
      },
      letterSpacing: {
        widest: "0.2em",
      },
    },
  },
  plugins: [],
};
export default config;
