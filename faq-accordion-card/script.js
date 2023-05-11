window.addEventListener('DOMContentLoaded', () => {
    const accordions = document.querySelectorAll('.accordion');
    accordions.forEach(accordionsItem => {
        accordionsItem.addEventListener('click', () => {
            accordions.forEach(accordion => accordionsItem !== accordion && accordion.classList.remove('show'));
            accordionsItem.classList.toggle('show');
        })
    })
})