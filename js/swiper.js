var swiper = new Swiper('.swiper', {
  loop: true,
  pagination: {
    el: '.swiper-pagination',
  },
  breakpoints: {
    200: {
      slidesPerView: 1,
      spaceBetween: 10,
      slidesPerGroup: 1,
    },

    320: {
      slidesPerView: 2,
      spaceBetween: 5,
      slidesPerGroup: 1,
    },

    768: {
      slidesPerView: 4,
      spaceBetween: 20,
      slideSize: '80%',
      slidesPerGroup: 4,
    },

    1200: {
      slidesPerView: 6,
      spaceBetween: 20,
      slidesPerGroup: 4,
    },
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
