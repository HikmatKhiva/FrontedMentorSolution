/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,vue}",
  ],
  darkMode:"class",
  theme: {
    extend: {
      colors:{
        "dark-card":"hsl(209, 23%, 22%)",
        "dark":"hsl(207, 26%, 17%)",
        "light-text":"hsl(200, 15%, 8%)",
        "light-input": "hsl(0, 0%, 52%)",
        "light":"hsl(0, 0%, 98%)",
      }
    },
  },
  plugins: [],
}