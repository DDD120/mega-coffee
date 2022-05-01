# mega-coffee

## HTML, SCSS, Vanilla JS로 만든 Maga Coffee 메인 페이지 클론 코딩

[maga-coffee](https://ddd120-mega-coffee.netlify.app/)

기존의 메가 커피 사이트 디자인을 바탕으로 CSS 애니메이션, YOUTUBE API, 스크롤 애니메이션 등의 기능들을 추가하였다.

---

### Drap Down Menu

<img src="./Images/markdown/nav-Animation.gif" alt="드롭다운 메뉴 gif">

```html
<ul class="main-menu">
  <li class="item">
    <a href="#" class="name">BRAND STORY</a>
    <ul class="contents">
      <li><a href="#">회사 소개</a></li>
      <li><a href="#">브랜드 소개</a></li>
      <li><a href="#">비전</a></li>
      <li><a href="#">BI</a></li>
      <li><a href="#">오시는 길</a></li>
    </ul>
  </li>
</ul>
```

.contents의 요소들을 `visibility: hidden;` `pointer-events: none;` `height: 0;` 처리. </br>
.main-menu에 hover 이벤트가 발생시 `visibility: visible;` `pointer-events: auto;` `height: 300px;`으로 변경

---

### Slider

<img src="./Images/markdown/slide-Animation.gif" alt="요소 슬라이더 gif">

**[swiper.js](https://swiperjs.com/)** 라이브러리 사용

---

### Count Up Animation

<img src="./Images/markdown/countUp-Animation.gif" alt="카운트 애니메이션">

**_[countup.js](https://inorganik.github.io/countUp.js/)_** 라이브러리 사용

`Scroll` 이벤트가 발생했을 때 `if (scrollY > 900)`이면 실행. 많은 양의 이벤트 발생을 최적화하기 위해 `throttle`을 사용.

```javascript
import { throttle } from "lodash";

if (!countUp.error) {
  window.addEventListener(
    "scroll",
    throttle(function () {
      if (scrollY > 900) countUp.start();
      scrollY > 100
        ? toTopEl.classList.add("show")
        : toTopEl.classList.remove("show");
    }, 200)
  );
}
```

---

### Youtube iframe Api

[IFrame Player API
](https://developers.google.com/youtube/iframe_api_reference?hl=ko) 를 통해 JavaScript를 사용하여 영상을 제어할 수 있다. 이를 사용하여 메가 커피 유튜브 영상을 배경으로 사용.

<img src="./Images/markdown/youtube-Animation.gif" alt="카운트 애니메이션">

```javascript
function onYouTubeIframeAPIReady() {
  new YT.Player("player", {
    videoId: "WjxawH-9b3Q",
    playerVars: {
      autoplay: 1,
      loop: 1,
      rel: 0,
    },
    events: {
      onReady: function (event) {
        event.target.mute();
      },
    },
  });
}
```

`onYouTubeIframeAPIReady` 함수는 플레이어 API 코드가 다운로드되는 즉시 실행. 전역 변수 player를 정의하며 함수가 동영상 플레이어 개체를 구성.

---

### Scroll Animation

<img src="./Images/markdown/scroll-Animation.gif" alt="스크롤 애니메이션">

[ScrollMagic](https://scrollmagic.io/) 라이브러리 사용

```javascript
const spyEls = document.querySelectorAll("div.scroll-spy");

spyEls.forEach(function (spyEl) {
  new ScrollMagic.Scene({
    triggerElement: spyEl, //보여짐 여부를 감시할 요소를 지정
    triggerHook: 0.8,
  })
    .setClassToggle(spyEl, "show")
    .addTo(new ScrollMagic.Controller());
});
```

div 요소의 `scroll-spy` 클래스를 모두 찾아 배열에 담음. </br>
`forEach`문으로 배열의 요소들을 반복하여 `spyEl`로 받아 함수를 등록.

---

### To Top

<img src="./Images/markdown/toTop-Animation.gif" alt="상단 이동 애니메이션">

</br>

버튼에 `click` 이벤트 발생 시 `window.scrollTo(0, 0);` 실행

---

### Responsive Web

<img src="./Images/markdown/responsive-Animation.gif" alt="반응형 애니메이션">

</br>

CSS3 Media Query를 이용한 반응형 웹 만들기</br>
`@media screen and (max-width: 768px)` 와
`@media screen and (max-width: 370px)`에 따른 반응형 스타일 시트 제작

### 리팩토링 예정

- swiper.js, countup.js 라이브러리 대신 직접 구현해보기
