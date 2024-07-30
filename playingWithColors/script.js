"use strict";

//Section optionColors and speed selectors:
const optionColors = document.querySelector(".optionColors");
const colorsContainer = document.querySelector(".colorsContainer");
const colors = document.querySelectorAll(".color");
const colorBlue = document.querySelector(".colorBlue");
const colorRed = document.querySelector(".colorRed");
const colorGreen = document.querySelector(".colorGreen");
const random = document.querySelector(".random");
const speedsContainer = document.querySelector(".speeds");
const speeds = document.querySelectorAll(".speed");
const slow = document.querySelector(".slow");
const fast = document.querySelector(".fast");
const questionGo = document.querySelector(".questionGo");
//  Section container selectors

const principalContainer = document.querySelector(".principalContainer");
const container = document.querySelector(".container");
const number1 = document.querySelector(".number-1");
const number2 = document.querySelector(".number-2");
const number3 = document.querySelector(".number-3");
const number4 = document.querySelector(".number-4");
const number5 = document.querySelector(".number-5");
const number6 = document.querySelector(".number-6");
const number7 = document.querySelector(".number-7");
const number8 = document.querySelector(".number-8");
const number9 = document.querySelector(".number-9");
const number10 = document.querySelector(".number-10");
const number11 = document.querySelector(".number-11");
const number12 = document.querySelector(".number-12");
const number13 = document.querySelector(".number-13");

// random colors:
const randomInt = (min, max) =>
  Math.trunc(Math.random() * (max - min + 1)) + min;

let randomColor = () =>
  // by default the color is random:
  `rgba(${randomInt(0, 255)}, ${randomInt(0, 255)}, ${randomInt(0, 255)}`;

//Event listeners:

//Highlights the selected color:
colorsContainer.addEventListener("click", function (e) {
  colors.forEach((color) => color.classList.remove("colorsChoosed"));
  if (!e.target.closest("p")) return;
  e.target.classList.add("colorsChoosed");
});

//Change the random colors to blue:
colorBlue.addEventListener("click", function () {
  randomColor = () =>
    `rgba(${randomInt(0, 60)}, ${randomInt(0, 60)}, ${randomInt(70, 255)}`;
  // colors.forEach((color) => color.classList.remove("colorsChoosed"));
  // colorBlue.classList.add("colorsChoosed");
});
//Change the random colors to red:
colorRed.addEventListener("click", function () {
  randomColor = () =>
    `rgba(${randomInt(70, 255)}, ${randomInt(0, 60)}, ${randomInt(0, 60)}`;
});
//Change the random colors to green:
colorGreen.addEventListener("click", function () {
  randomColor = () =>
    `rgba(${randomInt(0, 60)}, ${randomInt(70, 255)}, ${randomInt(0, 60)}`;
});
//Keep the random colors to all colors-random:
random.addEventListener("click", function () {
  randomColor = () =>
    `rgba(${randomInt(0, 255)}, ${randomInt(0, 255)}, ${randomInt(0, 255)}`;
});

// Speed of propagation
let lapse = 140; // by default the speed is 140

// Highlight the chosen one:
speedsContainer.addEventListener("click", function (e) {
  speeds.forEach((s) => s.classList.remove("speedChoosed"));
  e.target.classList.add("speedChoosed");
});

// colorsContainer.addEventListener("click", function (e) {
//   colors.forEach((color) => color.classList.remove("colorsChoosed"));
//   e.target.classList.add("colorsChoosed");
// });

//Example above
//
//

slow.addEventListener("click", function () {
  lapse = 200; //slow speed
});

fast.addEventListener("click", function () {
  lapse = 80; //fast speed
});

//Go!
questionGo.addEventListener("click", function () {
  console.log("the click is heard");
  number4.scrollIntoView();
  principalContainer.classList.toggle("opacityNone");
  optionColors.classList.toggle("opacityNone");
});

//SEE IF WE CAN ELIMINATE THIS ----------XXXXXXXXXXX
// number3.addEventListener("click", function () {
//   number3.style.backgroundColor = `${randomColor(0, 255)}`;
// });

// Specify the speed of propagation.
number13.addEventListener("click", function () {
  setTimeout(
    () => (number13.style.backgroundColor = `${randomColor()}`),
    lapse
  );
});
number12.addEventListener("click", function () {
  setTimeout(
    () => (number12.style.backgroundColor = `${randomColor()}`),
    lapse * 2
  );
});
number11.addEventListener("click", function () {
  setTimeout(
    () => (number11.style.backgroundColor = `${randomColor()}`),
    lapse * 3
  );
});
number10.addEventListener("click", function () {
  setTimeout(
    () => (number10.style.backgroundColor = `${randomColor()}`),
    lapse * 4
  );
});
number9.addEventListener("click", function () {
  setTimeout(
    () => (number9.style.backgroundColor = `${randomColor()}`),
    lapse * 5
  );
});
number8.addEventListener("click", function () {
  setTimeout(
    () => (number8.style.backgroundColor = `${randomColor()}`),
    lapse * 6
  );
});
number7.addEventListener("click", function () {
  setTimeout(
    () => (number7.style.backgroundColor = `${randomColor()}`),
    lapse * 7
  );
});

number6.addEventListener("click", function () {
  setTimeout(
    () => (number6.style.backgroundColor = `${randomColor()}`),
    lapse * 8
  );
});

number5.addEventListener("click", function () {
  setTimeout(
    () => (number5.style.backgroundColor = `${randomColor()}`),
    lapse * 9
  );
});
number4.addEventListener("click", function () {
  setTimeout(
    () => (number4.style.backgroundColor = `${randomColor()}`),
    lapse * 10
  );
});
number3.addEventListener("click", function () {
  setTimeout(
    () => (number3.style.backgroundColor = `${randomColor()}`),
    lapse * 11
  );
});

number2.addEventListener("click", function () {
  setTimeout(
    () => (number2.style.backgroundColor = `${randomColor()}`),
    lapse * 12
  );
});

number1.addEventListener("click", function () {
  setTimeout(
    () => (number1.style.backgroundColor = `${randomColor()}`),
    lapse * 13
  );
});
container.addEventListener("click", function () {
  setTimeout(
    () => (container.style.backgroundColor = `${randomColor()}`),
    lapse * 14
  );
});

// number1.addEventListener(
//   "click",
//   () => (number1.style.backgroundColor = `${randomColor(0, 255)}`)
// );
// container.addEventListener(
//   "click",
//   () => (container.style.backgroundColor = `${randomColor(0, 255)}`)
// );
