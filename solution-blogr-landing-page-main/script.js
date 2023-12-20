const headerNavButton = document.querySelector(".header-nav__menu");
const headerNavButtonIcon = document.querySelector(".header-nav__menu img");
const headerNav = document.querySelector(".header-nav");
const dropDowns = document.querySelectorAll(".drop-down");
const navItems = document.querySelectorAll(".header-nav__list > ul > li");
headerNavButton.addEventListener("click", () => {
  if (headerNav.classList.contains("open")) {
    headerNavButtonIcon.setAttribute("src", "./images/icon-hamburger.svg");
    headerNav.classList.remove("open");
  } else {
    headerNavButtonIcon.setAttribute("src", "./images/icon-close.svg");
    headerNav.classList.add("open");
  }
});
navItems.forEach((item) => {
  item.addEventListener("click", () => {
    if (item.nextElementSibling.classList.contains("open")) {
      item.nextElementSibling.classList.remove("open");
      item.children[0].style.transform = "rotateZ(0deg)";
      item.children[1].style.transform = "rotateZ(0deg)";
      return;
    }
    dropDowns.forEach(
      (item) => item.classList.contains("open") && item.classList.remove("open")
    );
    item.nextElementSibling.classList.toggle("open");
    item.children[0].style.transform = "rotateZ(-180deg)";
    item.children[1].style.transform = "rotateZ(-180deg)";
  });
});

window.onclick = function (event) {
  if (!event.target?.matches(".header-nav__list > ul > li")) {
    var dropdowns = document.querySelectorAll(".drop-down");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("open")) {
        openDropdown.classList.remove("open");
      }
    }
  }
};
