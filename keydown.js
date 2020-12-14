//Function linking a keyboard input together with a certain white key.
//Pressing one of the keyboard inputs will play a specific sound linked to that key.
//Pressing a key will also add a border around that key.

function mySound(e) {
  const sound = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const whiteKey = document.querySelector(`.whitekey[data-key="${e.keyCode}"]`);
  if (!sound) return;
  sound.currentTime = 0;
  sound.play();
  whiteKey.classList.add("keyHit");
}

window.addEventListener("keydown", mySound);

//Function to remove the border once transition has ended.

function removeBorder(e) {
  if (e.propertyName !== "border-bottom-color") return;
  this.classList.remove("keyHit");
}

const whiteKeys = document.querySelectorAll(".whitekey");

whiteKeys.forEach((whiteKey) => {
  whiteKey.addEventListener("transitionend", removeBorder);
});
