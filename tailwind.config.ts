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
      // Teinte assombrie de Wisteria (#8093f1) réservée aux usages
      // typographiques : le bleu de marque ne passe pas WCAG AA en texte
      // (2.32:1 sur alabaster, 2.85:1 sur blanc). Cette variante atteint
      // 5.15:1 sur alabaster / 6.34:1 sur blanc. Ne jamais l'utiliser en
      // fond, CTA ou décor — la marque y reste #8093f1 inchangée.
      "wisteria-text": "#2d4ce8",
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
