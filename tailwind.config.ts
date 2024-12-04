import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    extend: {
      screens: {
        wrapper: "1380px",
        xl: "1300px", // Указываем кастомный размер для xl
      },
      boxShadow: {
        cartHeader: "0px 1.67px 5.01px 0px rgba(0, 0, 0, 0.1)",
        recom: "0px 4px 22px -6px rgba(6, 5, 50, 0.15)",
        dop: "0px 4px 22px -6px #06053226",
        menuShadow: "0px 4px 4px 0px #00000040",
      },
      fontFamily: {
        raleway: ["Raleway"],
      },
      backgroundImage: {
        "custom-gradient-left":
          "linear-gradient(90deg, rgba(255, 255, 255, 0.98) 0%, rgba(255, 255, 255, 0.01) 100%)",
        "custom-gradient-right":
          "linear-gradient(270deg, rgba(255, 255, 255, 0.98) 0%, rgba(255, 255, 255, 0.01) 100%)",
      },
      width: {
        "custom-width": "calc(100% - 1650px)",
      },
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
