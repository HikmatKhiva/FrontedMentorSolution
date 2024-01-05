const form = document.querySelector(".form-card");
const inputs = document.querySelectorAll(".form-card input");
const successCard = document.querySelector(".complete-container");
const cardNumber = document.querySelector(".card-numbers");
const cardOwner = document.querySelector(".user-info");
const cardMonth = document.querySelector(".month");
const cardYear = document.querySelector(".years");
const cardCVC = document.querySelector(".card-back__code");
const date = new Date();
const card_info = {
  name: "",
  number: "",
  month: "",
  year: "",
  cvc: "",
};

inputs.forEach((input) => {
  input.addEventListener("input", (event) => {
    checkInput(event.target);
    card_info[event.target.name] = event.target.value;
    if (event.target.name === "number" && event.target.value.length < 16) {
      cardNumber.textContent = card_info.number;
    } else if (event.target.name === "name") {
      cardOwner.textContent = card_info.name;
    } else if (event.target.name === "month") {
      cardMonth.textContent = event.target.value;
    } else if (event.target.name === "year") {
      cardYear.textContent = event.target.value;
    } else if (event.target.name === "cvc") {
      cardCVC.textContent = event.target.value;
    }
  });
});
function checkInput(input) {
  if (input.name === "number" && input.value.length != 16) {
    input.setCustomValidity("Invalid card number");
    return false;
  } else if (input.name === "name" && input.value.length < 3) {
    input.setCustomValidity("Invalid name");
    return false;
  } else if (
    (input.name === "month" && input.value > 12) ||
    input.value < 0 ||
    !input.value.length
  ) {
    input.setCustomValidity("Invalid month");
    return false;
  } else if (
    (input.name === "year" && input.value.length > 2) ||
    !input.value.length
  ) {
    input.setCustomValidity("Invalid year");
    return false;
  } else if (
    (input.name === "cvc" && input.value.length !== 3) ||
    !input.value.length
  ) {
    input.setCustomValidity("Invalid cvc");
    return false;
  } else {
    input.setCustomValidity("");
    return true;
  }
}
form.addEventListener("submit", async (event) => {
  event.preventDefault();
  try {
    const { cvc, month, name, number, year } = card_info;
    if (
      !year.length ||
      !month.length ||
      !name.length ||
      !number.length ||
      !cvc.length
    ) {
      inputs.forEach((item) => checkInput(item));
      return
    }
    form.classList.add("hide");
    successCard.classList.add("show");
  } catch (err) {
    alert(err?.message);
  }
});