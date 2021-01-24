module.exports = {
  plugins: [require("@tailwindcss/forms")],
  purge: ["./components/**/*.js", "./pages/**/*.js"],
  theme: {
    extend: {
      colors: {
        "pdc-orange": "#ff9d12",
        "pdc-purple": "#8646ad",
        "pdc-dark-purple": "#5e0c8b",
        "pdc-green": "#00af3f",
      },
    },
  },
};
