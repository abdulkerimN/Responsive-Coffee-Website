const menuOpenButton = document.querySelector("#menu-open-button");
const menuCloseButton = document.querySelector("#menu-close-button");
const navLinks = document.querySelectorAll(".nav-menu .nav-link");



menuOpenButton.addEventListener("click", () => {
    // Mobile Menu open
    document.body.classList.toggle("show-mobile-menu");
});

menuCloseButton.addEventListener("click", () => {
    // Mobile Menu close
    document.body.classList.toggle("show-mobile-menu");
});


// close menu when nav link is clicked
navLinks.forEach(links => {
    links.addEventListener("click", () => menuOpenButton.click());
});







//initialize swiper
const swiper = new Swiper('.slider-wrapper', {
    loop: true,
    spaceBetween: 25,
    grabCursor: true,

    // if we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true,
    },

    // navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // responsive breakpoints
    breakpoints: {
        0: {
            slidesPerView: 1
        },
        768: {
            slidesPerView: 2
        },
        1024: {
            slidesPerView: 3
        },
    }
});