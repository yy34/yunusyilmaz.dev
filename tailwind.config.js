const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",

  theme: {
    extend: {
      colors: {
        hwred: "#dc143c",
        purp: "#9E4784",
        crio: "#212f45",
        clare: "#3e1f47",
        hw: "#e55164",
        sa: "#ffe802",
        secondaryLight: "#957fef",
        primary: "#1565c0",
        primaryLight: "#42a5f5",
        borderLight: "#ffffff08",
        bgBlack: "#121212",
      },
      gridTemplateColumns: {
        fluid: "repeat(auto-fit, minmax(5rem, 1fr))",
      },
      fontFamily: {
        sans: ["Ovo", ...defaultTheme.fontFamily.sans],
        mukta: ["Mukta", ...defaultTheme.fontFamily.sans],
        outfit: ["Outfit", ...defaultTheme.fontFamily.sans],
      },

      animation: {
        "fade-in": "fade-in 1s ease-in-out forwards",
        "fade-in-short": "fade-in .7s ease-in-out forwards",
        title: "title 2s ease-out forwards",
        "fade-left": "fade-left 3s ease-in-out forwards",
        "fade-right": "fade-right 3s ease-in-out forwards",
        marquee: "marquee 30s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        "fade-in": {
          "0%": {
            opacity: "0%",
          },
          "75%": {
            opacity: "0%",
          },
          "100%": {
            opacity: "100%",
          },
        },
        "fade-left": {
          "0%": {
            transform: "translateX(100%)",
            opacity: "0%",
          },

          "30%": {
            transform: "translateX(0%)",
            opacity: "100%",
          },
          "100%": {
            opacity: "0%",
          },
        },
        "fade-right": {
          "0%": {
            transform: "translateX(-100%)",
            opacity: "0%",
          },

          "30%": {
            transform: "translateX(0%)",
            opacity: "100%",
          },
          "100%": {
            opacity: "0%",
          },
        },
        title: {
          "0%": {
            "letter-spacing": "0.115em",
            opacity: "0",
          },
          "25%": {
            "letter-spacing": "0.225em",
            opacity: "0%",
          },
          "80%": {
            opacity: "100%",
          },

          "100%": {
            opacity: "100%",
          },
        },
      },
    },
  },
};
