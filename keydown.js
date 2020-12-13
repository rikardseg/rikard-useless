// const buttonclick = document.querySelector('button');

// buttonclick.addEventListener("click", myFunction);

// function myFunction() {
//   alert ("oh my goodness");
// }

function mySound(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  audio.play();
}

window.addEventListener('keydown', mySound);