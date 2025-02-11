import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class", // or 'media' or 'class'

  theme: {
    extend: {
      colors: {
        accentColor: {
          100: "#d2dbf5",
          200: "#a6b7ec",
          300: "#7994e2",
          400: "#4d70d9",
          500: "#204ccf",
          600: "#1a3da6",
          700: "#132e7c",
          800: "#0d1e53",
          900: "#060f29",
        },
      },
    },
  },
  plugins: [],
};
export default config;
