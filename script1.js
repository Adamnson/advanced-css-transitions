const box1 = document.getElementById("box1");
const box2 = document.getElementById("box2");
const down = document.getElementById("down");
const rotate = document.getElementById("rotate");

down.addEventListener("click", () => {
  box1.classList.add("animate");
  box1.addEventListener('animationend', removeAnimateClass)
});

let removeAnimateClass = () => {
  box1.removeEventListener('animationend', removeAnimateClass);
  box1.classList.remove('animate');
}

rotate.addEventListener("click", () => {
  box2.classList.add("spin");
  box2.addEventListener('animationend', removeRotateClass);
});

let removeRotateClass = () => {
  box2.removeEventListener('animationend', removeRotateClass);
  box2.classList.remove('spin');
}
