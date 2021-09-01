// PROMOTION
new Swiper(".promotion .swiper", {
  autoplay: {
    delay: 4000,
  },
  loop: true,
  pagination: {
    el: ".promotion .swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".promotion .swiper-button-next",
    prevEl: ".promotion .swiper-button-prev",
  },
});
