/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        neutral: "#555",
        "neutral-dark": "#333",
        "orange-gold-dark": "#f39200",
        silver: "#c0c0c0",
        "main-blue": "#008eaa",
      },
      backgroundImage: {
        "hero-pattern":
          "url('https://www.minuc.se/globalassets/produktsidor/forlustanmalan/forlustanmalan-hero-desktop.png')",
      },
    },
    plugins: [],
  },
};
