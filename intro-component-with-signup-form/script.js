const form = document.querySelector("form");
const firstName = document.querySelector("#firstName");
const lastName = document.querySelector("#lastName");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const emailRegex = /(?:[a-z0-9+!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/gi
form.addEventListener("submit", (e) => {
  e.preventDefault();
  validateInput()
  if (firstName.value && lastName.value && email.value && password.value) {
    /* Send something somewhere */
    alert('Message sended!');
    window.location.reload(true);
  }
})
/* validate email */
const validateEmail = (email) => email.match(emailRegex) ? email : '';
/* check password length  */
const validatePassword = (password) => password.length >= 8 ? password : '';
/* check validate and show error */
function checkInput(input, value) {
  if (!value) return input.classList.add("invalid-input");
  return input.classList.remove("invalid-input");
}
/* validate inputs */
function validateInput() {
  checkInput(firstName, firstName.value.trim());
  checkInput(lastName, lastName.value.trim());
  checkInput(email, validateEmail(email.value.trim()));
  checkInput(password, validatePassword(password.value.trim()));
}

