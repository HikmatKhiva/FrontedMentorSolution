const input = document.querySelector('input[type="text"]');
const btn = document.querySelector('form button');
const form = document.querySelector('form');
const error = document.querySelector('.error');
let inputValue = '';
/* get input value && validate email */
input.addEventListener('input', (e) => {
    inputValue = e.target.value
    if (!validateEmail(inputValue) && inputValue != "") {
        error.classList.add('show')
        input.classList.add('invalid')
    } else {
        error.classList.remove('show');
        input.classList.remove('invalid')
    }
})
form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (validateEmail(inputValue)) {
        inputValue = ''
    }
})
/* Validate email */
function validateEmail(mail) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) return true;
    return false;
}