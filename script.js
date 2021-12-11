const screenWidth = window.innerWidth;
console.log(screenWidth);

if(screenWidth < 1540){
  document.documentElement.style.setProperty("--size-coeff", "0.7");
} else{
  document.documentElement.style.setProperty("--size-coeff", "1");

}












// document
// .getElementById('burger')
// .addEventListener("click", () => {
//     document.getElementById('cross-menu')
//     .style = 
//     "left: 0px;";
//     });

// Array.from(document.getElementsByClassName('close-menu'))
// .forEach(element => {
//     element.addEventListener("click", () => {
//         document.getElementById('cross-menu')
//         .style = 
//         "left: -490px;" +
//         "display: block;";
//         });
// });

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


