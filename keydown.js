// const buttonclick = document.querySelector('button');

// buttonclick.addEventListener("click", myFunction);

// function myFunction() {
//   alert ("oh my goodness");
// }

function mySound(e) {
  const sound = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const whiteKey = document.querySelector(`.whitekey[data-key="${e.keyCode}"]`);
  if (!sound) return;
  sound.currentTime = 0;
  sound.play();
  whiteKey.classList.add("keyHit");
}

window.addEventListener("keydown", mySound);

function removeTransition(e) {
  if (e.propertyName !== "border-bottom-color") return;
  this.classList.remove("keyHit");
}

const whiteKeys = document.querySelectorAll(".whitekey");

whiteKeys.forEach((whiteKey) => {
  whiteKey.addEventListener("transitionend", removeTransition);
});

// keyspans.forEach((keyspan) => {
//   keyspan.addEventListener("click", () => {
//     const ptag = document.querySelector(".pianotext");
//     ptag.textContent = pianotext[Math.floor(Math.random() * pianotext.length)];
