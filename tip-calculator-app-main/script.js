const inputs = document.querySelectorAll(".form input");
const amountTitle = document.querySelector(".title-price.amount");
const totalTitle = document.querySelector(".title-price.total");
const buttons = document.querySelectorAll(".form button.btn");
const customInput = document.querySelector(".form .custom");
const reset = document.querySelector("button.reset");

let price = {
  money: 0,
  person: 0,
  tip: 0,
};
// get inputs value
inputs.forEach((input) => {
  input.addEventListener("input", (event) => {
    if (event.target.value <= 0) {
      event.target.setCustomValidity("Can't be zero");
      return;
    }
    price[event.target.name] = +event.target.value;
    event.target.setCustomValidity("");
    checkOutput();
  });
});

customInput.addEventListener("input", (event) => {
  if (event.target.value <= 0) {
    event.target.setCustomValidity("Can't be zero");
    return;
  }
  customInput.setCustomValidity("");
  buttons.forEach((btn) => btn.classList.remove("active"));
  price.tip = +event.target.value;
  checkOutput();
});
buttons.forEach((btn) => {
  btn.addEventListener("click", (event) => {
    event.target.classList.add("active");
    price.tip = +event.target.value;
    customInput.value = "";
    buttons.forEach((btn2) => {
      if (event.target !== btn2) {
        btn2.classList.remove("active");
      }
    });
    checkOutput();
  });
});

function checkOutput() {
  if (price.money <= 0 || price.person <= 0) {
    totalTitle.textContent = "$0.00";
    amountTitle.textContent = "$0.00";
    return;
  }
  let total = Math.floor(price.money / price.person);
  let amount = total * (price.tip / 100);
  if (price.tip) {
    amountTitle.textContent = `$${amount}`;
  }
  totalTitle.textContent = `$${total + amount}`;
}
// RESET
reset.addEventListener("click", () => {
  price = {
    money: 0,
    person: 0,
    tip: 0,
  };
  inputs.forEach((input) => (input.value = ""));
  buttons.forEach((btn) => btn.classList.remove("active"));
  checkOutput();
});