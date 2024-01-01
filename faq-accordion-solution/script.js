const details = document.querySelectorAll(".accordion-body details");
details.forEach((detail) => {
  detail.addEventListener("toggle", (e) => {
    e.currentTarget.firstElementChild.lastElementChild.setAttribute(
      "src",
      "./images/icon-minus.svg"
    );
    if (e.target.open) {
      details.forEach((item) => {
        if (item != e.target) {
          item.open = false;
        }
      });
    } else {
      e.currentTarget.firstElementChild.lastElementChild.setAttribute(
        "src",
        "./images/icon-plus.svg"
      );
    }
  });
});