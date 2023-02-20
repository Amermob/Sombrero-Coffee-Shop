// preloader

var loader = document.getElementById("preloader");

window.addEventListener("load", function () {
  loader.style.display = "none";
});
// preloader

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
  if (form.style.display === "block") {
    coffee.style.display = "none";
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
  if (coffee.style.display === "block") {
    form.style.display = "none";
  }
};

let btnScroll = document.getElementById("btn");

window.onscroll = () => {
  if (scrollY >= 2000) {
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

