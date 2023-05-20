const numbers = document.querySelectorAll('.number');
const HTMLrate = document.querySelector('.rate');
const first = document.querySelector('.first');
const second = document.querySelector('.second');
const btn = document.querySelector('.btn');
let rate = 0
numbers.forEach(first => {
    first.addEventListener('click', () => {
        numbers.forEach(second => {
            if (first == second) {
                second.classList.add('active')
                rate = Number(second.textContent);
            }
            else {
                second.classList.remove('active');
            }
        })
    })
});
btn.addEventListener('click', () => {
    if(rate) {
        first.classList.add('hide');
        second.classList.remove('hide');
        HTMLrate.textContent = `You selected ${rate} out of 5`;
    }
})