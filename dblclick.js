//Function that changes the color of
//the key to a total of 2 different colors
//when doubleclicking, before returning to the original color.

const colorKeys = document.querySelectorAll("span");

colorKeys.forEach((colorKey) => {
  colorKey.addEventListener("dblclick", () => {
    let changeColor = colorKey.style.backgroundColor;
    if (colorKey.classList == "whitekey") {
      if (changeColor == "var(--orange-color)") {
        colorKey.style.backgroundColor = "var(--blue-color)";
      } else if (changeColor == "var(--blue-color)") {
        colorKey.style.backgroundColor = "var(--white-color)";
      } else if (changeColor == "var(--white-color)") {
        colorKey.style.backgroundColor = "var(--orange-color)";
      } else {
        colorKey.style.backgroundColor = "var(--orange-color)";
      }
    } else if (colorKey.classList == "blackkey") {
      if (changeColor == "var(--orange-color)") {
        colorKey.style.backgroundColor = "var(--blue-color)";
      } else if (changeColor == "var(--blue-color)") {
        colorKey.style.backgroundColor = "var(--bk-color)";
      } else if (changeColor == "var(--bk-color)") {
        colorKey.style.backgroundColor = "var(--orange-color)";
      } else {
        colorKey.style.backgroundColor = "var(--orange-color)";
      }
    }
  });
});
