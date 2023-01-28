


let left = document.querySelector(".all-coffee .left")
let right = document.querySelector(".all-coffee .right")
let allCoffee = document.querySelector(".all-coffee")
let ss= document.querySelector(".all-coffee div")

window.onload=function (){
    if (window.innerWidth < 1200) {
        right.removeAttribute("data-aos")
        left.removeAttribute("data-aos")

    }
}

/*======Swiper=====*/
var swiper = new Swiper(".content", {
    slidesPerView: 3,
    spaceBetween: 25,
    loop: true,
    centerSlide: 'true',
    fade: 'true',
    grabCursor: 'true',
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true,
    },
    autoplay: {
        delay: 3000,
    },
    breakpoints:{
        0: {
            slidesPerView: 1,
        },

        992: {
            slidesPerView: 2,
        },
        1001: {
            slidesPerView: 2,
        },
        1400:{
            slidesPerView: 3,
        }
    },

});


var swiper = new Swiper('.testmonials', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    //watchOverflow: true,
    loop: true,
    coverflowEffect: {
        rotate: -2,
        stretch: 5,
        depth: 180,
        modifier: 1,
        slideShadows : true,
    },
    pagination: {
        //el: '.swiper-pagination',
        //type: 'fraction',
    },
});
