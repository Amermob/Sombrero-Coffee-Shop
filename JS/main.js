// preloader

var loader = document.getElementById("preloader");

window.addEventListener("load", function () {
  loader.style.display = "none";
});
// preloader

//  ****************************************************************translations //

import translations from "./translations.js";

const languageSelector = document.querySelector("select");
languageSelector.addEventListener("change", (event) => {
  setLanguage(event.target.value);
  localStorage.setItem("lang", event.target.value);
});

document.addEventListener("DOMContentLoaded", () => {
  const language = localStorage.getItem("lang") || "en"; // اذا لم تكن اللغة متوفرة استخدم الانجليزية
  setLanguage(language);
});

const setLanguage = (language) => {
  const elements = document.querySelectorAll("[data-i18n]");
  elements.forEach((element) => {
    const translationKey = element.getAttribute("data-i18n");
    element.textContent = translations[language][translationKey];
  });
  document.dir = language === "ar" ? "rtl" : "ltr";
};

//  ****************************************************************translations //

//   **************************************************************for ice cream machine //

let btn = document.getElementById("ice-btn");
let form = document.getElementById("ice");

btn.onclick = () => {
  if (form.style.display === "none") {
    form.style.display = "block";
  } else {
    form.style.display = "none";
  }
};

//   ************************************************************** for coffee machine //

let btnc = document.getElementById("coffee-btn");
let coffee = document.getElementById("coffee");

btnc.onclick = () => {
  if (coffee.style.display === "none") {
    coffee.style.display = "block";
  } else {
    coffee.style.display = "none";
  }
};

let btnScroll = document.getElementById("btn");

window.onscroll = () => {
  if (scrollY >= 1000) {
    btnScroll.style.display = "block";
  } else {
    btnScroll.style.display = "none";
  }
};

btnScroll.onclick = () => {
  scroll({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
};
