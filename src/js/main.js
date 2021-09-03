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

// LINE BANNER
import { CountUp } from "countup.js";

const countUp = new CountUp("line-banner-num", 5390, {
  separator: "",
  useEasing: true,
});
if (!countUp.error) {
  countUp.start();
} else {
  console.error(countUp.error);
}
