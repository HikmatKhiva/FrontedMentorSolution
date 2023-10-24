/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/index.html"],
  theme: {
    extend: {
      fontFamily: {
        barlow: ["Barlow", "sans-serif"],
        fraunces: ["Fraunces", "serif"],
      },
      colors: {
        "soft-red": "hsl(7, 99%, 70%)",
        yellow: "hsl(51, 100%, 49%)",
        "dark-cyan": "hsl(167, 40%, 24%)",
        "dark-blue": "hsl(198, 62%, 26%)",
        "footer-cyan": "hsl(168, 34%, 41%)",
        "des-blue": "hsl(212, 27%, 19%)",
        "dark-grayish-blue": "hsl(213, 9%, 39%)",
        "grayish-blue": "hsl(232, 10%, 55%)",
      },
      backgroundImage: {
        // Desktop Image url
        "desktop-galleryCone":
          "url('../images/desktop/image-gallery-cone.jpg')",
        "desktop-galleryMilk":
          "url('../images/desktop/image-gallery-milkbottles.jpg')",
        "desktop-galleryOrange":
          "url('../images/desktop/image-gallery-orange.jpg')",
        "desktop-gallerySugar":
          "url('../images/desktop/image-gallery-sugarcubes.jpg')",
        "desktop-graphic": "url('../images/desktop/image-graphic-design.jpg')",
        "desktop-header": "url('../images/desktop/image-header.jpg')",
        "desktop-photography": "url('../images/desktop/image-photography.jpg')",
        "desktop-photography": "url('../images/desktop/image-photography.jpg')",
        "desktop-egg": "url('../images/desktop/image-transform.jpg')",
        "desktop-stand": "url('../images/desktop/image-stand-out.jpg')",
        // Mobile Image url
        "mobile-header": "url('../images/mobile/image-header.jpg')",
        "mobile-egg": "url('../images/mobile/image-transform.jpg')",
        "mobile-stand": "url('../images/mobile/image-stand-out.jpg')",

      },
    },
  },
  plugins: [],
};
