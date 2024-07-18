"use strict";

//DSelectors:
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

// random colors:
const randomInt = (min, max) =>
  Math.trunc(Math.random() * (max - min + 1)) + min;

const randomColor = () =>
  `rgba(${randomInt(0, 255)}, ${randomInt(0, 255)}, ${randomInt(0, 255)}`;

//Event listeners:
// number3.addEventListener("click", function () {
//   number3.style.backgroundColor = `${randomColor(0, 255)}`;
// });
number9.addEventListener("click", function () {
  setTimeout(
    () => (number9.style.backgroundColor = `${randomColor(0, 255)}`),
    100
  );
});
number8.addEventListener("click", function () {
  setTimeout(
    () => (number8.style.backgroundColor = `${randomColor(0, 255)}`),
    300
  );
});
number7.addEventListener("click", function () {
  setTimeout(
    () => (number7.style.backgroundColor = `${randomColor(0, 255)}`),
    600
  );
});

number6.addEventListener("click", function () {
  setTimeout(
    () => (number6.style.backgroundColor = `${randomColor(0, 255)}`),
    800
  );
});

number5.addEventListener("click", function () {
  setTimeout(
    () => (number5.style.backgroundColor = `${randomColor(0, 255)}`),
    1100
  );
});
number4.addEventListener("click", function () {
  setTimeout(
    () => (number4.style.backgroundColor = `${randomColor(0, 255)}`),
    1300
  );
});
number3.addEventListener("click", function () {
  setTimeout(
    () => (number3.style.backgroundColor = `${randomColor(0, 255)}`),
    1500
  );
});

number2.addEventListener("click", function () {
  setTimeout(
    () => (number2.style.backgroundColor = `${randomColor(0, 255)}`),
    1700
  );
});

number1.addEventListener("click", function () {
  setTimeout(
    () => (number1.style.backgroundColor = `${randomColor(0, 255)}`),
    1900
  );
});
container.addEventListener("click", function () {
  setTimeout(
    () => (container.style.backgroundColor = `${randomColor(0, 255)}`),
    2100
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
