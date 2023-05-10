/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,vue}",
  ],
  theme: {
    extend: {
      colors:{
        'intro':'hsl(217, 28%, 15%)',
        'ain':'hsl(218, 28%, 13%)',
        'footer':'hsl(216, 53%, 9%)',
        'testimonial':'hsl(219, 30%, 18%)',
        'aqua':'hsl(176, 68%, 64%)'
      },
      backgroundImage:{
        'mountainDesktop':'url("./src/assets/images/bg-curvy-desktop.svg")',
        'mountainMobile':'url("./src/assets/images/bg-curvy-mobile.svg")',
      }
    },
  },
  plugins: [],
}