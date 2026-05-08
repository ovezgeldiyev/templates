var swiperReal = new Swiper(".realisation__inner-slider", {
  slidesPerView: 4,
  loop: true,
  freemode: true,
  centeredSlides: false,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    200: {
      slidesPerView: 2,
    },
    540: {
      slidesPerView: 3,
    },
   750: {
      slidesPerView: 4,
    },
  },
});
var swiperAdvert = new Swiper(".advert__inner-slider", {
  loop: true,
  effect: "slide",
  loop: true,
  freeMode: true,
  slidesPerView: "auto",
  speed: 12000,
  autoplay: {
    delay: 0,
    pauseOnMouseEnter: false,
    disableOnInteraction: false,
    waitForTransition: false,
    stopOnLastSlide: false,
  },
});
