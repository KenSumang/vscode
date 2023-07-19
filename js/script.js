const header = document.querySelector(".header");

window.addEventListener("scroll", () => {
    console.log(window.scrollY);
    if (window.scrollY >= 20) {
        header.classList.add("active");
        batches.classList.add("pink");
    } else {
        header.classList.remove("active");
        batches.classList.remove("pink");
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