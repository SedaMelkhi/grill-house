import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    extend: {
      // container: {
      //   screens: {
      //     xl: "1300px", // Указываем кастомный размер для xl
      //   },
      // },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        red: "var(--red)",
        green: "var(--green)",
        black: "var(--black)",
        brown: "var(--brown)",
        stroke: "var(--stroke)",
        "stroke-2": "var(--stroke-2)",
        blue: "var(--blue)",
        light: "var(--light)",
      },
    },
  },
  plugins: [],
};
export default config;
