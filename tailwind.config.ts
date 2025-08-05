import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          black: {
            50: "#383838",
          },
          gray: {
            50: "#949494",
          },
          yellow: {
            50: "#B79A00",
            100: "#BB9D00",
            900: "#594b01",
          },
        },
      },
      // Adicionando configuração para o slider
      borderWidth: {
        "4": "10px",
      },
      borderRadius: {
        xl: "1rem",
      },
      boxShadow: {
        outline: "0 0 0 3px #B79A00",
      },
      cursor: {
        pointer: "pointer",
      },
      height: {
        "2": "0.5rem",
      },
      width: {
        full: "100%",
      },
    },
  },
  plugins: [],
};

export default config;
