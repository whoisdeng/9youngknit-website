import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#17201c",
        stonewash: "#eef0ec",
        oat: "#f8f6ef",
        moss: "#486552",
        clay: "#9b604a",
        ocean: "#2f6f73",
        flax: "#c9a65d",
      },
      boxShadow: {
        soft: "0 16px 48px rgba(23, 32, 28, 0.08)",
        card: "0 10px 30px rgba(23, 32, 28, 0.06)",
      },
    },
  },
  plugins: [],
};

export default config;
