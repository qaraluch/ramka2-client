const colors = require("tailwindcss/colors");

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        miniaturka: "150px",
      },
    },
    colors: {
      black: "#000",
      white: "#fff",
      cyan: colors.cyan,
      gray: colors.gray,
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
