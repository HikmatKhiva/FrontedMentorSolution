/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "light-cyan": "hsl(193, 38%, 86%)",
        "light-green": "hsl(150, 100%, 66%)",
        "grayish-blue": "hsl(217, 19%, 38%)",
        "dark-grayish-blue": "hsl(217, 19%, 24%)",
        "dark-blue": "hsl(218, 23%, 16%)"
      },
      fontFamily: {
        "base": ["Manrope", "sans-serif"]
      },
      boxShadow:{
        'btn':'0 0 0px #79b697, 0 0 20px #52ffa8, 0 0 35px #52ffa8'
      }
    },
  },
  plugins: [],
}