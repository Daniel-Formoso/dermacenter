const swiper = new Swiper(".swiper", {
  loop: true,
  gradCursor: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    680: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1188: {
      slidesPerView: 3,
      spaceBetween: 0,
    },
    1920: {
      slidesPerView: 4,
      spaceBetween: 0,
    },
  },
});
