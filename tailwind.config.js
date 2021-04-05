const colors = require("tailwindcss/colors");

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        black: "#1D1D20",
        white: colors.white,
        gray: colors.trueGray,
        indigo: colors.indigo,
        red: colors.rose,
        yellow: colors.amber,
      },
      height: {
        screen80: "80vh",
      },
      margin: {
        percent20: "20%",
        percent40: "40%",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
