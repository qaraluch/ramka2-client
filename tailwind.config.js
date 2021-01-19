const colors = require("tailwindcss/colors");
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        pelnywidok: "60%",
        miniaturka: "150px",
        logopositionx: "5.25rem",
        logopositiony: "15.5rem",
        128: "32rem",
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
      logobg: "#22252C",
      cyan: colors.cyan,
      gray: colors.gray,
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
