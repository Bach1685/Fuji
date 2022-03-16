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
  
  const currentScreenWidth = window.innerWidth;
  const startScreenWidth = 1920;
  const borderScreenWidth = 1280;
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
});