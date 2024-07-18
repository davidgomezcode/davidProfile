"use strict";

//Selectors:
const profileImg = document.querySelector(".presentation-img");
const davidProfile = document.querySelector(".davidProfile");
const btnCloseDavidProfile = document.querySelector(".close--presentation-img");
const scrollBackToTheTop = document.querySelector(".scrollBackToTheTop");

//Buttons:
davidProfile.addEventListener("click", function () {
  profileImg.classList.toggle("hidden");
});
btnCloseDavidProfile.addEventListener("click", function () {
  profileImg.classList.toggle("hidden");
});

scrollBackToTheTop.addEventListener("click", function () {
  davidProfile.scrollIntoView({ behavior: "smooth" });
});
