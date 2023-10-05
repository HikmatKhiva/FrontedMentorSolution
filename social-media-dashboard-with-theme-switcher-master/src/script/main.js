$(document).ready(() => {
  let rootElement = $("html");
  let btn = $(".theme-btn");
  let circle = $(".theme-btn span");
  let themeMode = "light";
  btn.on("click", () => {
    if (themeMode == "light") {
      themeMode = "dark";
      rootElement.addClass(themeMode);
      rootElement.removeClass("light");
      circle.animate({
        left: "20px",
      });
    } else {
      themeMode = "light";
      circle.animate({
        left: "0px",
      });
      rootElement.addClass(themeMode);
      rootElement.removeClass("dark");
    }
  });
});
