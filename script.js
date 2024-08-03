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
//Pet selection:
//Nyx
const optionNyxImg = document.querySelector(".optionNyxImg");
const optionChosenNyx = document.querySelector(".optionChosenNyx");

//Cleo:
const optionCleoImg = document.querySelector(".optionCleoImg");
const optionChosenCleo = document.querySelector(".optionChosenCleo");

//1 Arrows:
const sliderArrowRight = document.querySelector(
  ".sliderParentArrow.arrowRight"
);
const sliderArrowLeft = document.querySelector(".sliderParentArrow.arrowLeft");

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

//Pet selection:
let slides;

optionNyxImg.addEventListener("click", function () {
  //We hide all the sliders
  document
    .querySelectorAll(".sliderParent .optionChosen")
    .forEach((optionChosen) => optionChosen.classList.add("sliderChildHide"));
  //All articles lose the class slide
  document
    .querySelectorAll(".article")
    .forEach((article) => article.classList.remove("slide"));

  //We show the chosen slider
  optionChosenNyx.classList.remove("sliderChildHide");
  //We add the slide class to all the slides of the chosen slider
  optionChosenNyx.querySelectorAll(".article").forEach((article) => {
    article.classList.add("slide");
  });
  slides = document.querySelectorAll(".optionChosen .article.slide");
});

optionCleoImg.addEventListener("click", function () {
  //We hide all the sliders
  document
    .querySelectorAll(".sliderParent .optionChosen")
    .forEach((optionChosen) => optionChosen.classList.add("sliderChildHide"));
  //All articles lose the class slide
  document
    .querySelectorAll(".article")
    .forEach((article) => article.classList.remove("slide"));
  //We show the chosen slider
  optionChosenCleo.classList.remove("sliderChildHide");
  //We add the slide class to all the slides of the chosen slider
  optionChosenCleo.querySelectorAll(".article").forEach((article) => {
    article.classList.add("slide");
  });
  slides = document.querySelectorAll(".optionChosen .article.slide");
});

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
    //We remove all the additional classes that could be present from the previous clicking:
    slide.classList.remove("slideAtRight");
    slide.classList.remove("slideAtLeft");
    slide.classList.remove("slideGetIntoView");

    //We hide all the slides and set them to the right:
    slide.classList.add("hide");
    slide.classList.add("slideAtRight");
  });
  if (slideShown.nextElementSibling === null) {
    // if there are no more slides to the right
    slideShown.parentElement.firstElementChild.classList.remove("hide"); //Show the first slide
    setTimeout(function () {
      //And bring it into view in 180 milliseconds:
      slideShown.parentElement.firstElementChild.classList.add(
        "slideGetIntoView"
      );
    }, 180);
  } else {
    //If there are more slides to the right, bring the next one into view:
    slideShown.nextElementSibling.classList.remove("hide");
    setTimeout(function () {
      slideShown.nextElementSibling.classList.add("slideGetIntoView");
    }, 180);
  }
});

//Security copy:
// sliderArrowRight.addEventListener("click", function () {
//   console.log("The click is heard");
//   whichSlideShown();
//   slides.forEach(function (slide, i) {
//     // slide.classList.remove("slideAtRight");
//     // slide.classList.remove("slideGetIntoView");

//     slide.classList.add("hide");
//     // slide.classList.add("slideAtRight");
//   });
//   if (slideShown.nextElementSibling === null) {
//     slideShown.parentElement.firstElementChild.classList.remove("hide");
//     // setTimeout(function () {
//     //   slideShown.parentElement.firstElementChild.classList.add(
//     //     "slideGetIntoView"
//     //   );
//     // }, 250);
//     // slideShown.parentElement.firstElementChild.classList.add(
//     //   "slideGetIntoView"
//     // );
//   } else {
//     slideShown.nextElementSibling.classList.remove("hide");
//     // setTimeout(function () {
//     //   slideShown.nextElementSibling.classList.add("slideGetIntoView");
//     // }, 250);
//     // setTimeout(function () {
//     //   whichSlideShown();
//     //   slideShown.classList.remove("slideAtRight");
//     //   slideShown.classList.remove("slideGetIntoView");
//     // }, 500);
//   }
// });

sliderArrowLeft.addEventListener("click", function () {
  whichSlideShown();
  slides.forEach(function (slide, i) {
    //We remove all the additional classes that could be present from the previous clicking:
    slide.classList.remove("slideAtRight");
    slide.classList.remove("slideAtLeft");
    slide.classList.remove("slideGetIntoView");
    //We hide all the slides and set them to the left:
    slide.classList.add("hide");
    slide.classList.add("slideAtLeft");
  });

  if (slideShown.previousElementSibling === null) {
    // if there are no more slides to the left
    slideShown.parentElement.lastElementChild.classList.remove("hide"); //Show the last slide
    setTimeout(function () {
      //And bring it into view in 180 milliseconds:
      slideShown.parentElement.lastElementChild.classList.add(
        "slideGetIntoView"
      );
    }, 180);
  } else {
    //If there are more slides to the left, bring the previous one into view:
    slideShown.previousElementSibling.classList.remove("hide");
    setTimeout(function () {
      slideShown.previousElementSibling.classList.add("slideGetIntoView");
    }, 180);
  }
});
