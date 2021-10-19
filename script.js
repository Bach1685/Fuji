let menu = document.getElementsByClassName('burger');

menu[0].addEventListener("click", () => {
    document.getElementsByClassName('cross-menu')[0].style = 
    "display: flex;" + 
    "left: 0px;" + 
    "top: 0px;" +
    "padding-left: 0;";

    // "background-color: black";
    document.getElementsByClassName('cross')[0].style = 
    "display: block;";
    });

