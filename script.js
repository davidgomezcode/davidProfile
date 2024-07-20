"use strict";

//Selectors:
const profileImg = document.querySelector(".presentation-img");
const davidProfile = document.querySelector(".davidProfile");
const btnCloseDavidProfile = document.querySelector(".close--presentation-img");
const scrollBackToTheTop = document.querySelector(".scrollBackToTheTop");
const firstParagraph = document.querySelector(".firstParagraph");
const lawyerWord = document.querySelector(".lawyerWord");
const lawyerImage = document.querySelector(".lawyerImage");

//Listener to hide or unhide the lawyer image:
lawyerWord.addEventListener("click", function () {
  lawyerImage.classList.toggle("hidden");
});
lawyerImage.addEventListener("click", function () {
  lawyerImage.classList.toggle("hidden");
});

//Button to scroll back to the top:
scrollBackToTheTop.addEventListener("click", function () {
  davidProfile.scrollIntoView({ behavior: "smooth" });
});
