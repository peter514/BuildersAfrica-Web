/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#15803d",
        secondary: "#a1a1aa",
        tertiary: "#b45309"
      },
      backgroundImage: {
        homeImage: "url('./assets/HeroBg.jpg')"
      }
    },

  },
  plugins: [],
}