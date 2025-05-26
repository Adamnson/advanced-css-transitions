const box1 = document.getElementById("box1");
const box2 = document.getElementById("box2");
const box3 = document.getElementById("box3");
const box4 = document.getElementById("box4");
const btn_down = document.getElementById("down");
const btn_rotate = document.getElementById("rotate");
const btn_scale = document.getElementById("scale");
const btn_fade = document.getElementById("fade");

/***********************************************************/
btn_down.addEventListener('click', () => {
  box1.classList.add("animate");
  box1.addEventListener('animationend', removeAnimateClass);
});

let removeAnimateClass = () => {
  box1.removeEventListener('animationend', removeAnimateClass);
  box1.classList.remove("animate");
}

/***********************************************************/
btn_rotate.addEventListener('click', () => {
  box2.classList.add("spin");
  box2.addEventListener('animationend', removeRotateClass);
});

let removeRotateClass = () => {
  box2.removeEventListener('animationend', removeRotateClass);
  box2.classList.remove("spin");
}

/***********************************************************/
btn_scale.addEventListener('click', () => {
  box3.classList.add("zoomAnimation");
  box3.addEventListener('animationend', removeZoomAnimationClass);
});

let removeZoomAnimationClass = () => {
  box3.classList.remove("zoomAnimation");
  box3.removeEventListener('animationend', removeZoomAnimationClass);
}

/***********************************************************/
btn_fade.addEventListener('click', () => {
  box4.classList.add("fadeAnimation");
  box4.addEventListener('animationend', removeFadeAnimationClass);
});

let removeFadeAnimationClass = () => {
  box4.classList.remove("fadeAnimation");
  box4.removeEventListener('animationend', removeFadeAnimationClass);
}
