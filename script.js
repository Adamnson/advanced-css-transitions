const divElem = document.querySelector(".row-2>div");
const htmlElem = document.querySelector(":root");

htmlElem.addEventListener("click", showHide);
htmlElem.addEventListener("click", sayHi);
document.addEventListener("keydown", showHide);
document.addEventListener("keydown", sayHello);

function showHide() {
  divElem.classList.toggle("showing");
}

function sayHi() {
  console.log("hi");
}

function sayHello() {
  console.log("Hello");
}