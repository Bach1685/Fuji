document.addEventListener("DOMContentLoaded", () => {
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

  let lastScreenWidth = 0;
  const startScreenWidth = 1920;
  const borderScreenWidth = 1280;

  function setSizeCoeff() {
    let currentScreenWidth = window.innerWidth;

    if (currentScreenWidth == lastScreenWidth) return;

    lastScreenWidth = currentScreenWidth;

    if (currentScreenWidth >= borderScreenWidth) {
      document.documentElement.style.setProperty(
        "--size-coeff",
        String(currentScreenWidth / startScreenWidth)
      );
    } else if (currentScreenWidth < 768) {
      document.documentElement.style.setProperty("--size-coeff", String(0.55));
    } else {
      document.documentElement.style.setProperty(
        "--size-coeff",
        String(borderScreenWidth / startScreenWidth)
      );
    }
  }

  setSizeCoeff();
  setInterval(setSizeCoeff, 200);
});
