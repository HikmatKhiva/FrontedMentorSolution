const button = document.querySelector('.btn');
const tooltip = document.querySelector('.tooltip');

button.addEventListener('mouseenter', (e) => {
    tooltip.classList.add('show');
});

button.addEventListener('mouseleave', (e) => {
    setTimeout(() => tooltip.classList.remove('show'), 500)
});