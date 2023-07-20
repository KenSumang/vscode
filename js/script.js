const header = document.querySelector(".header");
const toggle = document.querySelector(".header__button");
const headerNav = document.querySelector(".header__nav");

toggle.addEventListener('click', () => {
    toggle.classList.toggle('open');
    headerNav.classList.toggle('open');
})

window.addEventListener('scroll', () => {
    console.log(window.scrollY);
    if (window.scrollY >= 10) {
        header.classList.add("active");
    } else {
        header.classList.remove("active");
    }
});

var slider = tns({
    container: '.feedback__user',
    items: 1,
    slideBy: 'page',
    autoplay: false,
    controlsText: ['<i class="fa-solid fa-chevron-left"></i>', '<i class="fa-solid fa-chevron-right"></i>'],
    nav: false,
    speed: '850'
})