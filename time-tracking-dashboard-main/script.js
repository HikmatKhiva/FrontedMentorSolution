const exerciseCards = document.querySelectorAll(".card-exercise");
const buttons = document.querySelectorAll(".date-button");
let data_exercise;
let time = "weekly";
const getData = async () => {
  try {
    const response = await fetch("data.json");
    const data = await response.json();
    data_exercise = data;
  } catch (err) {
    console.log(err);
  }
};
function control(values) {
  exerciseCards.forEach((card) => {
    values.forEach((value) => {
      if (
        card.getAttribute("data-name").startsWith(value.title.toLowerCase())
      ) {
        const currentTime = card.querySelector(".current-time");
        const lastTime = card.querySelector(".current-time");
        currentTime.textContent = value.timeframes[time].current + "hrs";
        lastTime.textContent = value.timeframes[time].previous + "hrs";
      }
    });
  });
}
buttons.forEach((btn) => {
  btn.addEventListener("click", (event) => {
    if(!data_exercise) return
    time = event.target.name;
    if (time === event.target.name) {
      event.target.classList.add("active");
    }
    buttons.forEach((btn1) => {
      if (event.target != btn1) {
        btn1.classList.remove("active");
      }
    });
    control(data_exercise);
  });
});
window.addEventListener("DOMContentLoaded", getData);