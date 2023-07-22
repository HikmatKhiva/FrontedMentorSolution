/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {
      colors: {
        "dark-gray": "hsl(0, 0%, 17%)",
        "gray": "hsl(0, 0%, 59%)"
      },
      fontFamily: {
        'base': ['Rubik', 'sans-serif']
      },
      backgroundImage:{
        "hero":"url('../assets/images/pattern-bg-desktop.png')"
      }
    },
  },
  plugins: [],
}