const hamburger = document.querySelector('.hamburger'),
    menu = document.querySelector('.menu'),
    close = document.querySelector('.menu__close');

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});

close.addEventListener('click', () => {
    menu.classList.remove('active');
});

const percents = document.querySelectorAll('.skills__scale-percent'),
    lines = document.querySelectorAll('.skills__scale-row span');

percents.forEach( (item, i) => {
    lines[i].style.width = item.innerHTML;
});