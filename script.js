"use strict";

//Selectors:
const presentationImg = document.querySelector(".presentation-img");
const presentationImgIMG = document.querySelector(".presentation-img img");
const davidProfile = document.querySelector(".davidProfile");
// const btnCloseDavidProfile = document.querySelector(".close--presentation-img"); // ELIMINATE!!*** if there is no functionality.
const scrollBackToTheTop = document.querySelector(".scrollBackToTheTop");
const firstParagraph = document.querySelector(".firstParagraph");
const lawyerImage = document.querySelector(".lawyerImage");
const sections = document.querySelectorAll(".section");

const countryUserInput = document.querySelector(".countryUserInput");
const countryUserInputButton = document.querySelector(
  ".countryUserInputButton"
);

//Slider selectors:
//Pet selection:

const petOptionsParent = document.querySelector(".petOptionsParent");
//Nyx:
const optionChosenNyx = document.querySelector(".optionChosenNyx");
//Cleo:
const optionChosenCleo = document.querySelector(".optionChosenCleo");
//Jordan:
const optionChosenJordan = document.querySelector(".optionChosenJordan");
//1 Arrows:
const sliderArrowRight = document.querySelector(
  ".sliderParentArrow.arrowRight"
);
const sliderArrowLeft = document.querySelector(".sliderParentArrow.arrowLeft");

//Dots:
const dots = document.querySelector(".dots");
let dotsDot;

//Listener to hide or unhide the lawyer image:
// lawyerWord.addEventListener("click", function () {
//   lawyerImage.classList.remove("hidden");
// });
// lawyerImage.addEventListener("click", function () {
//   lawyerImage.classList.add("hidden");
// });
// //We close the image when we click in any other place that is not the image:
// document.addEventListener("click", function (e) {
//   if (!e.target.classList.contains("lawyerWord")) {
//     lawyerImage.classList.add("hidden");
//   }
// });

//Button to scroll back to the top:
scrollBackToTheTop.addEventListener("click", function () {
  davidProfile.scrollIntoView({ behavior: "smooth" });
});

// IntersectionObserver in the presentationImg:
// the callback function to execute in the IntersectionObserver will add and remove the class that makes the image fixed:
const stickyImg = function (e) {
  if (!e[0].isIntersecting) {
    presentationImg.classList.add("fixed");
    // lawyerImage.classList.add("hidden"); //if its not intersecting, add the hidden class to the lawyer image
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

// Displaying country:

const countryContainer = document.querySelector(".countryContainer");

const renderCountry = function (countryData) {
  const html = `
          <article class="countryData">
            <img class="countryFlag" src="${countryData.flags.png}" />
            <div class="country__data">
              <h3 class="country__name">${countryData.name.common}</h3>
              <h4 class="country__region">Region: ${countryData.region}</h4>
              <p class="country__row"><span>👫</span> ${countryData.population.toLocaleString()}</p>
              <p class="country__row"><span>🗣️</span> ${
                countryData.languages.spa
              }</p>
              <p class="country__row"><span>💰</span> ${
                countryData.currencies[Object.keys(countryData.currencies)[0]]
                  .name
              }</p>
              <img class="countryFlag" src="${countryData.coatOfArms.png}" />
            </div>
          </article>
         `;

  countryContainer.insertAdjacentHTML("beforeend", html);
};

let population;

const getCountryData = async function (country) {
  const countryFetched = await fetch(
    `https://restcountries.com/v3.1/name/${country}`
  );
  const [countryData] = await countryFetched.json();

  console.log(countryData);
  renderCountry(countryData);
};

// getCountryData("Colombia");

countryUserInput.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    //If the user hits enter
    document.querySelector(".countryContainer").innerHTML = ""; //Clean the content
    getCountryData(countryUserInput.value); // Display the information of the country
  }
});

countryUserInputButton.addEventListener("click", function () {
  //If the user hits enter
  document.querySelector(".countryContainer").innerHTML = ""; //Clean the content
  getCountryData(countryUserInput.value); // Display the information of the country
});

//Slider code:

let slideShown; //We store what slide is currently being shown
let slideShownDot; //To store the dot that will be highlighted
let sideOfSlide; // Variable used to determine if the slides should go to the left or to the right to obtain the visual effect.

const updateSelectedDot = function () {
  //We remove the class dots_shown from all the dots:
  dotsDot.forEach((dot) => dot.classList.remove("dots_shown"));

  //From the DOM we determine which slide is not hidden, and then we relate its index to the dot:
  slides.forEach((slide, i) => {
    if (!slide.classList.contains("hide")) {
      slideShownDot = i;
    }
  });
  //We add the class dots-shown only to the slide that is being shown:
  dotsDot[slideShownDot].classList.add("dots_shown");
};

const whichSlideShown = function () {
  slides.forEach(function (slide) {
    //the slide that is shown is the one that does not has the hide class:
    if (!slide.classList.contains("hide")) {
      slideShown = slide;
    }
  });
};
//Pet selection:
let slides;
//Function to reset all sliders:
const resetSliders = function () {
  //We hide all the sliders
  document
    .querySelectorAll(".sliderParent .optionChosen")
    .forEach((optionChosen) => optionChosen.classList.add("sliderChildHide"));
  //All articles lose the class slide
  document
    .querySelectorAll(".article")
    .forEach((article) => article.classList.remove("slide"));

  dots.innerHTML = "";
};

//Function to show only the slider chosen:
const showSlider = function (optionChosen) {
  optionChosen.classList.remove("sliderChildHide");
  //We add the slide class to all the slides of the chosen slider
  optionChosen.querySelectorAll(".article").forEach((article) => {
    article.classList.add("slide");
  });
  //After resetting all sliders and showing the option chosen, we redefine the variable slides:
  slides = document.querySelectorAll(".optionChosen .article.slide");
  slides.forEach((_, i) => {
    // console.log(slide.dataset.slidenumber);
    //Dots to indicate in what image of the slider the user is:

    dots.insertAdjacentHTML(
      "beforeend",
      `<button class="dots_dot" data-slide="${i}"></button>`
    );
  });

  //We initialize the dotsDot variable with all the dots:
  dotsDot = document.querySelectorAll(".dots_dot");
  // whichSlideShown();
  slides.forEach(function (slide) {
    //We determined the first slide to be shown:
    if (!slide.classList.contains("hide")) {
      slideShown = slide;
    }
  });
  updateSelectedDot();
};

//Pet selection:
petOptionsParent.addEventListener("click", function (e) {
  let optionChosen; //We create the variable to store the specific image chosen by the user and assign its value:

  if (e.target.classList.contains("optionNyxImg")) {
    optionChosen = optionChosenNyx;
  } else if (e.target.classList.contains("optionCleoImg")) {
    optionChosen = optionChosenCleo;
  } else if (e.target.classList.contains("optionJordanImg")) {
    optionChosen = optionChosenJordan;
  }
  // We reset all sliders and show only the one that was chosen by the user:
  if (e.target.classList.contains("petOptionImg")) {
    resetSliders();
    showSlider(optionChosen);
    //We eliminate the class petOptionImgSelected and add the class petOptionImgNotSelected from all the petOptionImg:
    document.querySelectorAll(".petOptionImg").forEach((img) => {
      img.classList.remove("petOptionImgSelected");
      img.classList.add("petOptionImgNotSelected"); //This add a blur of 1px
    });

    //We give the class petOptionImgSelected only to the one selected and remove the blur:
    e.target.classList.add("petOptionImgSelected");
    e.target.classList.remove("petOptionImgNotSelected");
  }
});

//Functions related with the slider functioning:

//ResetSlides eliminate the classes of positioning and add the classes of hiding and of
const resetSlides = function () {
  slides.forEach(function (slide, i) {
    //We remove all the additional classes that could be present from the previous clicking:
    slide.classList.remove("slideAtRight");
    slide.classList.remove("slideAtLeft");
    slide.classList.remove("slideGetIntoView");

    //We hide all the slides and set them to the right:
    slide.classList.add("hide");

    slide.classList.add(sideOfSlide);
  });
};

const sliderRight = function () {
  whichSlideShown();
  resetSlides();

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
};

const sliderLeft = function () {
  whichSlideShown();
  resetSlides();

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
};
//Logic of the two arrow listeners:
sliderArrowRight.addEventListener("click", function (e) {
  sideOfSlide = e.target.parentElement.classList.contains("arrowRight")
    ? "slideAtRight"
    : "slideAtLeft";
  sliderRight();
  updateSelectedDot();
});

sliderArrowLeft.addEventListener("click", function (e) {
  sideOfSlide = e.target.parentElement.classList.contains("arrowRight")
    ? "slideAtRight"
    : "slideAtLeft";
  sliderLeft();
  updateSelectedDot();
});

//Dot event listeners:

dots.addEventListener("click", function (e) {
  if (e.target.classList.contains("dots_dot")) {
    resetSlides();

    slides[e.target.dataset.slide].classList.remove("hide");
    slides[e.target.dataset.slide].classList.add("slideGetIntoView");
    updateSelectedDot();
  }
});
