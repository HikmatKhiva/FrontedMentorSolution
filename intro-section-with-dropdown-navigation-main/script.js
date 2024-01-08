const btnDropDown = document.querySelectorAll(".drop-down__button");
const dropDowns = document.querySelectorAll(".drop-down");
const nav = document.querySelector("nav");
const navOpenButton = document.querySelector(".menu-button");
const navCloseButton = document.querySelector(".close-menu");
navOpenButton.addEventListener("click", () => {
  nav.classList.add("open");
});
navCloseButton.addEventListener("click", () => {
  nav.classList.remove("open");
});
btnDropDown.forEach((btn) => {
  btn.addEventListener("click", (event) => {
    const dropDown = btn.nextElementSibling;
    dropDown.classList.toggle("show");
    dropDowns.forEach((item) => {
      if (dropDown !== item) {
        item.classList.remove("show");
        item.parentElement.children[0].children[0].setAttribute(
          "src",
          "images/icon-arrow-down.svg"
        );
      }
    });
    const img = btn.querySelector("img");
    if (dropDown.classList.contains("show")) {
      img.setAttribute("src", "images/icon-arrow-up.svg");
    } else {
      img.setAttribute("src", "images/icon-arrow-down.svg");
    }
  });
});
