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
const sections = document.querySelectorAll(".section");

//Slider selectors:
//1 Arrows:
const sliderArrowRight = document.querySelector(
  ".sliderParentArrow.arrowRight"
);
const sliderArrowLeft = document.querySelector(".sliderParentArrow.arrowLeft");

//Get all the slides of the slider that is being shown:
const slides = document.querySelectorAll(".optionChosen .article.slide");

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

// IntersectionObserver in the sections to slow-show them as the user scroll down:

const showSlow = function (e, observer) {
  // console.log(e[0].isIntersecting);
  if (e[0].isIntersecting) {
    e[0].target.classList.remove("hidden"); // we remove the class hidden, so the section is shown.
    observer.unobserve(e[0].target); // we stop observing the section that is shown
  }

  // console.log(observer);
};
const optionsShowSlow = {
  root: null,
  threshold: 0.3, // the callback function is executed when 60% of the section is visible
};

const sectionObserver = new IntersectionObserver(showSlow, optionsShowSlow);

sections.forEach((section) => {
  //at the beginning:
  section.classList.add("hidden"); //all sections are hidden
  sectionObserver.observe(section); // We use the same observer to observe each section.
});

//Slider code:

//We store what slide is currently being shown

let slideShown;
const whichSlideShown = function () {
  slides.forEach(function (slide) {
    if (!slide.classList.contains("hide")) {
      slideShown = slide;
    }
  });
};

//Logic of the two arrow listeners:
sliderArrowRight.addEventListener("click", function () {
  whichSlideShown();
  slides.forEach(function (slide, i) {
    slide.classList.add("hide");
  });
  if (slideShown.nextElementSibling === null) {
    slideShown.parentElement.firstElementChild.classList.remove("hide");
  } else {
    slideShown.nextElementSibling.classList.remove("hide");
  }
});

sliderArrowLeft.addEventListener("click", function () {
  whichSlideShown();
  slides.forEach(function (slide, i) {
    slide.classList.add("hide");
  });

  if (slideShown.previousElementSibling === null) {
    slideShown.parentElement.lastElementChild.classList.remove("hide");
  } else {
    slideShown.previousElementSibling.classList.remove("hide");
  }
});
