document
.getElementById('burger')
.addEventListener("click", () => {
    document.getElementsByClassName('cross-menu')[0].style = 
    "left: 0px;";
    
    });

    document.getElementById('cross')
    .addEventListener("click", () => {
        document.getElementsByClassName('cross-menu')[0].style = 
    "left: -490px;";
    })

