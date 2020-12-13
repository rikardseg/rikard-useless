const colorKeys = document.querySelectorAll("span");

colorKeys.forEach((colorKey) => {
  colorKey.addEventListener("dblclick", () => {
    console.log("dblclick", colorKey);
    let changeColor = colorKey.style.backgroundColor;
    if (colorKey.classList == "whitekey") {
      if (changeColor == "white") {
        colorKey.style.backgroundColor = "blue";
      } else if (changeColor == "blue") {
        colorKey.style.backgroundColor = "transparent";
      } else if (changeColor == "transparent") {
        colorKey.style.backgroundColor = "white";
      } else {
        colorKey.style.backgroundColor = "white";
      }
    } else if (colorKey.classList == "blackkey") {
      if (changeColor == "white") {
        colorKey.style.backgroundColor = "blue";
      } else if (changeColor == "blue") {
        colorKey.style.backgroundColor = "black";
      } else if (changeColor == "black") {
        colorKey.style.backgroundColor = "white";
      } else {
        colorKey.style.backgroundColor = "white";
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
