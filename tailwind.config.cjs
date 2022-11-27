/** @type {import('tailwindcss').Config} */
const deafultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily : {
        sans : ['Inter var', ...deafultTheme.fontFamily.sans]
      }
    },
  },
  plugins: [],
}
