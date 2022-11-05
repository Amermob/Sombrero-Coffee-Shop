// preloader

var loader = document.getElementById("preloader");

window.addEventListener("load", function () {
  loader.style.display = "none";
});
// preloader

//  ****************************************************************translations //

// import translations from "./translations.js";

// const languageSelector = document.querySelector("select");
// languageSelector.addEventListener("change", (event) => {
//   setLanguage(event.target.value);
//   localStorage.setItem("lang", event.target.value);
// });

// document.addEventListener("DOMContentLoaded", () => {
//   const language = localStorage.getItem("lang") || "en"; // اذا لم تكن اللغة متوفرة استخدم الانجليزية
//   setLanguage(language);
// });

// const setLanguage = (language) => {
//   const elements = document.querySelectorAll("[data-i18n]");
//   elements.forEach((element) => {
//     const translationKey = element.getAttribute("data-i18n");
//     element.textContent = translations[language][translationKey];
//   });
//   document.dir = language === "ar" ? "rtl" : "ltr";
// };

//  ****************************************************************translations //


//   **************************************************************for ice cream machine //


let btn = document.getElementById("ice-btn")
let form = document.getElementById("ice")

btn.addEventListener("click", () => {
  if(form.style.display === "none"){
    form.style.display = "block";
  }
  else {
    form.style.display = "none";
  }
}
)

//   **************************************************************for ice cream machine //


//   **************************************************************// for coffee machine //


var btnc = document.getElementById("coffee-btn")
var coffee = document.getElementById("coffee")

btnc.addEventListener("click", () => {
  if(coffee.style.display === "none"){
    coffee.style.display = "block";
  }
  else {
    coffee.style.display = "none";
  }
}
)

//   **************************************************************// for coffee machine //



// for both machine

// let bothbtn = document.getElementById("both-btn")
// let bothform = document.getElementById("form-w")

// bothbtn.addEventListener("click", () => {
//   if(form.style.display === "none"){
//     form.style.display = "block";
//   }
//   else {
//     form.style.display = "none";
//   }
// }
// )


