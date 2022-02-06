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

Array.from(document.getElementsByClassName("popup-menu-p")).forEach(
  (element) => {
    element.addEventListener("click", () => {
      document.getElementById("popup-menu").style = "left: -500px;";
    });
  }
);

document.getElementById("print-order-menu").addEventListener("click", () => {
  document.getElementById("print-order").style = "left: 0px;";
});

const currentScreenWidth = window.innerWidth;
const startScreenWidth = 1920;
const borderScreenWidth = 1280;
if (currentScreenWidth >= borderScreenWidth) {
  document.documentElement.style.setProperty(
    "--size-coeff",
    String(currentScreenWidth / startScreenWidth)
  );
} else if (currentScreenWidth < 510) {
  document.documentElement.style.setProperty("--size-coeff", String(0.35));
} else if (currentScreenWidth < 768) {
  document.documentElement.style.setProperty("--size-coeff", String(0.55));
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

const form = document.getElementById("form");
form.addEventListener("submit", formSend);

async function formSend(e) {
  e.preventDefault();
  let formData = new FormData();
  formData.append('image', formImage.files[0]);
  let response = await fetch('sandmail.php', {
    method: 'POST',
    headers: {
      'Content-Type':'application/json'
    },
    body: formData
  });
  if(response.ok){
    let result = await response.json();
    alert(result.message);
    formPreview.innerHtml = '';
    form.reset();
  } else {
    console.log('Не удалося');
  }
}

const formImage = document.getElementById('form-image');
formImage.addEventListener('change', () => {
  uploadFile(formImage.files[0]);
});

function uploadFile (file){

}
