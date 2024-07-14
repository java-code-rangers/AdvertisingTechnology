var swiper = new Swiper('.swiper', {
  loop: false,
  rewind: true,
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
      slidesPerView: 4,
      spaceBetween: 5,
      slidesPerGroup: 2,
    },

    768: {
      slidesPerView: 6,
      spaceBetween: 10,
      slidesPerGroup: 4,
    },

    1200: {
      slidesPerView: 8,
      spaceBetween: 20,
      slidesPerGroup: 8,
    },
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
