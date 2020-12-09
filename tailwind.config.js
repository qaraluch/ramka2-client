const colors = require("tailwindcss/colors");
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        miniaturka: "150px",
      },
      fontFamily: {
        sans: ["Roboto", ...defaultTheme.fontFamily.sans],
        mono: ["Inconsolata", ...defaultTheme.fontFamily.mono],
        exo: ["Exo", "sans-serif"],
      },
    },
    colors: {
      black: "#000",
      white: "#fff",
      gunmetal: "#1E2732",
      platinium: "#EAEAEC",
      cgblue: "#02769A",
      sandybrown: "#FCA867",
      cyan: colors.cyan,
      gray: colors.gray,
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
