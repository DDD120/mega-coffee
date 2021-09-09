const mediaQuery = window.matchMedia("screen and (max-width: 768px)");

mediaQuery.addListener(function (e) {
  if (e.matches) {
    console.log("sds");
    // TIRGGER
    const triggerEl = document.querySelector("header .trigger");
    const mainMenuEl = document.querySelector("header .main-menu");

    triggerEl.addEventListener("click", () => {
      if (triggerEl.classList.contains("active")) {
        mainMenuEl.classList.remove("active");
        triggerEl.classList.remove("active");
      } else {
        mainMenuEl.classList.add("active");
        triggerEl.classList.add("active");
      }
    });

    // SHOW MENU CONTENTS
    const nameEls = document.querySelectorAll("header .name");

    for (nameEl of nameEls) {
      nameEl.addEventListener("click", (event) => {
        event.target.classList.contains("show")
          ? event.target.classList.remove("show")
          : event.target.classList.add("show");
      });
    }
  }
});
