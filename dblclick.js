const colorKeys = document.querySelectorAll("span");

colorKeys.forEach((colorKey) => {
  colorKey.addEventListener("dblclick", () => {
    console.log("dblclick", colorKey);
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

// const colorKeys = document.querySelectorAll("span");

// colorKeys.forEach((colorKey) => {
//   colorKey.addEventListener("dblclick", (e) => {
//     console.log("dblclick");
//     if (colorKey.style.backgroundColor == "transparent") {
//       colorKey.style.backgroundColor = "white";
//     } else if (colorKey.style.backgroundColor == "white") {
//       colorKey.style.backgroundColor = "blue";
//     } else if (colorKey.style.backgroundColor == "blue") {
//       if (colorKey.classList == "blackkey") {
//         colorKey.style.backgroundColor = "black";
//       } else {
//         colorKey.style.backgroundColor = "white";
//       }
//     } else if (colorKey.style.backgroundColor == "black") {
//       colorKey.style.backgroundColor = "transparent";
//     } else {
//       colorKey.style.backgroundColor = "transparent";
//     }
//   });
// });
