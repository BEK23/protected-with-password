import defaultTheme from "tailwindcss/defaultTheme";
import { nextui } from "@nextui-org/react";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", ...defaultTheme.fontFamily.serif],
      },
      animation: {
        "fade-up": "fadeUp 1s ease-in-out",
      },
      keyframes: () => ({
        fadeUp: {
          "0%": { opacity: 0, transform: "translate(0, 2rem)" },
          "100%": { opacity: 100 },
        },
      }),
    },
  },
  plugins: [nextui()],
};
