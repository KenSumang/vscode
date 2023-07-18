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