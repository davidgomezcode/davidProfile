"use strict";

//Selectors:
const presentationImg = document.querySelector(".presentation-img");
const presentationImgIMG = document.querySelector(".presentation-img img");
const davidProfile = document.querySelector(".davidProfile");
// const btnCloseDavidProfile = document.querySelector(".close--presentation-img"); // ELIMINATE!!*** if there is no functionality.
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

// IntersectionObserver in the presentationImg:
// the callback function to execute in the IntersectionObserver will add and remove the class that makes the image fixed:
const stickyImg = function (e) {
  if (!e[0].isIntersecting) {
    presentationImg.classList.add("fixed");
  }
  if (e[0].isIntersecting) {
    presentationImg.classList.remove("fixed");
  }
};
// the options of the IntersectionObserver
const optionsStickyImg = {
  root: null,
  threshold: 0,
};

//The creation of the IntersectionObserver to observe the first paragraph:
new IntersectionObserver(stickyImg, optionsStickyImg).observe(firstParagraph);

presentationImgIMG.addEventListener("click", function () {
  davidProfile.scrollIntoView({ behavior: "smooth" });
});
