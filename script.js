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


