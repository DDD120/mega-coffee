// Scroll Animation
const spyEls = document.querySelectorAll("div.scroll-spy");

spyEls.forEach(function (spyEl) {
  new ScrollMagic.Scene({
    triggerElement: spyEl, //보여짐 여부를 감시할 요소를 지정
    triggerHook: 0.8,
  })
    .setClassToggle(spyEl, "show")
    .addTo(new ScrollMagic.Controller());
});

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
import { throttle } from "lodash";

const countUp = new CountUp("line-banner-num", 5390, {
  startVal: "1000",
  duration: 3,
  separator: "",
  useEasing: true,
});
if (!countUp.error) {
  window.addEventListener(
    "scroll",
    throttle(function () {
      if (scrollY > 900) countUp.start();
    }, 200)
  );
} else {
  console.error(countUp.error);
}

// FOOTER
const thisYear = document.querySelector(".this-year");
thisYear.textContent = new Date().getFullYear();
