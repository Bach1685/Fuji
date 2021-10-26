document
.getElementById('burger')
.addEventListener("click", () => {
    document.getElementById('cross-menu')
    .style = 
    "left: 0px;";
    });

Array.from(document.getElementsByClassName('close-menu'))
.forEach(element => {
    element.addEventListener("click", () => {
        document.getElementById('cross-menu')
        .style = 
        "left: -490px;" +
        "display: block;";
        });
});

// window.onscroll = function() {scrollFunction()};

// function scrollFunction() {
//     let headerStyle = document.getElementById("header").style;
//     let menuStyle = document.getElementById("cross-menu").style;
//   if (document.body.scrollTop > 50 
//     || document.documentElement.scrollTop > 50) {
//         menuStyle.height = "50px";
//         headerStyle.height = menuStyle.height;
//   } else {
//     headerStyle.height = "100px";
//   }
// }


