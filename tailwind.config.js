/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  transitionProperty: {
    transform: "transform",
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
