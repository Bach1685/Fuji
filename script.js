document.getElementById("burger-img").addEventListener("click", () => {
  document.getElementById("burger").style = "left: 0px;";
});

Array.from(document.getElementsByClassName("close-burger-menu")).forEach(
  (element) => {
    element.addEventListener("click", () => {
      document.getElementById("burger").style = "left: -300px;";
    });
  }
);

const currentScreenWidth = window.innerWidth;
const startScreenWidth = 1920;
const borderScreenWidth = 1280;
if (currentScreenWidth >= borderScreenWidth) {
  document.documentElement.style.setProperty(
    "--size-coeff",
    String(currentScreenWidth / startScreenWidth)
  );
} else if (currentScreenWidth < 768) {
  document.documentElement.style.setProperty("--size-coeff", String(0.35));
} else {
  document.documentElement.style.setProperty(
    "--size-coeff",
    String(borderScreenWidth / startScreenWidth)
  );
}

// window.onscroll = function() {scrollFunction()};

// function scrollFunction() {
//     let burgerStyle = document.getElementById("burger").style;
//   if (document.body.scrollTop > 50
//     || document.documentElement.scrollTop > 50) {
//         burgerStyle.paddingTop = "10px";
//         burgerStyle.paddingLeft = "10px";
//   } else {
//     burgerStyle.paddingTop = "35px";
//     burgerStyle.paddingLeft = "20px";
//   }
// }
