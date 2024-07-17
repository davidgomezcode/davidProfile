'use strict';

//Selectors:
const profileImg = document.querySelector(".presentation-img");
const davidProfile = document.querySelector(".davidProfile")
const btnCloseDavidProfile = document.querySelector(".close--presentation-img")




//Button:
davidProfile.addEventListener("click", function (){
    profileImg.classList.toggle("hidden");
});
btnCloseDavidProfile.addEventListener("click", function (){
    profileImg.classList.toggle("hidden");
});




