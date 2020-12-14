//Array with different strings.

const pianotext = [
  "This piano is useless",
  "Yes it really is not useful",
  "Truly useless",
  "Without function",
  "Not playable",
  "Cannot possibly play this",
  "No music for you",
];

//Clicking on any key will display a random string below the piano.
const keyspans = document.querySelectorAll("span");

keyspans.forEach((keyspan) => {
  keyspan.addEventListener("click", () => {
    const ptag = document.querySelector(".pianotext");
    ptag.textContent = pianotext[Math.floor(Math.random() * pianotext.length)];
  });
});
