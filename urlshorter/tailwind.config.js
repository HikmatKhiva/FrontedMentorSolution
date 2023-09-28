/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "boots-mobile": "url('./bg-boost-mobile.svg')",
        "boots-desktop": "url('./bg-boost-desktop.svg')",
        "shorten-desktop": "url('./bg-shorten-desktop.svg')",
        "shorten-mobile": "url('./bg-shorten-mobile.svg')",
      },
      colors: {
        'cyan': "hsl(180, 66%, 49%)",
        'dark-violet': "hsl(257, 27%, 26%)",
        'red': "hsl(0, 87%, 67%)",
        'gray': "hsl(0, 0%, 75%)",
        'gray-violet': "hsl(257, 7%, 63%)",
        'very-dark-blue': "hsl(255, 11%, 22%)",
        'very-dark-violet': "hsl(260, 8%, 14%)",
        'light':"#eff0f5"
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif']
      }
    },
  },
  plugins: [],
}