/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "lime-green": "hsl(163, 72%, 41%)",
        "bright-red": "hsl(356, 69%, 56%)",
        facebook: "hsl(208, 92%, 53%)",
        twitter: "hsl(203, 89%, 53%)",
        youtube: "hsl(348, 97%, 39%)",
        light: "hsl(230, 22%, 74%)",
        "dark-blue": "hsl(230, 17%, 14%)",
        "top-very-dark-blue": "#20222f",
        "dark-card-blue": "#252b43",
        "dark-desaturated-blue-text": "hsl(228, 34%, 66%)",
        "top-light-blue": "hsl(225, 100%, 98%)",
        "light-card-blue": " hsl(225, 100%, 98%)",
        "dark-grayish-blue": "hsl(228, 12%, 44%)",
        "light-very-dark-blue": "hsl(230, 17%, 14%)",
      },
      backgroundImage: {
        instagram: "linear-gradient(hsl(37, 97%, 70%),hsl(329, 70%, 58%))",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
