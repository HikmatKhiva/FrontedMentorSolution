const form = document.querySelector("form");
const formContainer = document.querySelector(".form-container");
const subscribe = document.querySelector(".subscribing");
const emailInput = document.querySelector("form input");
const emailContent = document.querySelector(".email-content");
const error = document.querySelector(".error");
const buttonDismiss = document.querySelector(".subscribing button");
const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
let emailAddress = "";
emailInput.addEventListener("input", (event) => {
  if (!regex.test(event.target.value.trim()) || !event.target.value?.length) {
    event.target.setCustomValidity("Invalid field.");
    error.classList.add("show");
    return;
  } else {
    event.target.setCustomValidity("");
    error.classList.remove("show");
    emailAddress = event.target.value.trim();
  }
});
form.addEventListener("submit", async (event) => {
  event.preventDefault();
  try {
    if (!emailInput.value?.length) {
      emailInput.setCustomValidity("Invalid field.");
      error.classList.add("show");
      return;
    }
    emailInput.setCustomValidity("");
    error.classList.remove("show");
    emailContent.textContent = emailAddress;
    formContainer.classList.add("hide");
    subscribe.classList.add("show");
  } catch (err) {
    console.log(err);
  }
});
buttonDismiss.addEventListener("click", () => {
  if (formContainer.classList.contains("hide")) {
    subscribe.classList.remove("show");
    formContainer.classList.remove("hide");
  }
});