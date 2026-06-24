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
          DEFAULT: "#0C3B2E",
          dark: "#081F19",
          mid: "#14523F",
          light: "#1A6B52",
          muted: "#2D7A62",
        },
        gold: {
          DEFAULT: "#C8963E",
          light: "#DDB96A",
          pale: "#F0DBA8",
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
