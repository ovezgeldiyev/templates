var swiperReal = new Swiper(".realisation__inner-slider", {
  slidesPerView: 2,
  loop: true,
  freemode: true,
  centeredSlides: false,
  pagination: {
    el: ".swiper-pagination",
    type: "progressbar",
  },
  breakpoints: {
    200: {
      slidesPerView: 1.1,
      centeredSlides: true,
    },
    540: {
      slidesPerView: 1.6,
      centeredSlides: true,
    },
    750: {
      slidesPerView: 2,
      centeredSlides: false,
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
