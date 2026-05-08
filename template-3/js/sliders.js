var swiperReal = new Swiper(".offer__inner-slider", {
  slidesPerView: 3,
  loop: true,
  centeredSlides: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    200: {
      slidesPerView: 1.3,
    },
    540: {
      slidesPerView: 1.6,
    },
    750: {
      slidesPerView: 2,
    },
    930: {
      slidesPerView: 3,
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
