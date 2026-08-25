import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    // Overridden (not extended): only the 5 CLAUDE.md colors are available,
    // plus the two keywords Tailwind's internals rely on.
    colors: {
      transparent: "transparent",
      current: "currentColor",
      onyx: "#12130f",
      white: "#ffffff",
      wisteria: "#8093f1",
      alabaster: "#eae7e4",
      dust: "#e1ddd8",
    },
    extend: {
      fontFamily: {
        asap: ["var(--font-asap)"],
        "dm-sans": ["var(--font-dm-sans)"],
      },
    },
  },
};

export default config;
