const images = [{
   url: "image/1.png",
   text1: "Rostov-on-Don <br> LCD admiral",
   text2: "81 m2",
   text3: "3.5 months"
}, {
   url: "image/2.png",
   text1: "Sochi <br> Thieves",
   text2: "105 m2",
   text3: "4 months"
}, {
   url: "image/3.png",
   text1: "Rostov-on-Don <br> Patriotic",
   text2: "93 m2",
   text3: "3 months"
}];


document.addEventListener("DOMContentLoaded", function () {
   initSlider();
});

function initSlider() {

   let sliderImages = document.querySelector(".slider_images");
   let sliderTitles = document.querySelector(".slider_titles");
   let sliderText1 = document.querySelector(".text_1");
   let sliderText2 = document.querySelector(".text_2");
   let sliderText3 = document.querySelector(".text_3");
   let sliderArrows = document.querySelector(".slider_arrows");
   let sliderDots = document.querySelector(".slider_dots");


   initImages();
   initTitles();
   initTexts();
   initArrows();
   initDots();


   function initImages() {
      images.forEach((image, index) => {
         let imageDiv = `<div class='img n${index} ${index === 0 ? 'active' : ''}' style='background-image:url(${images[index].url});' data-index='${index}'></div>`;
         sliderImages.innerHTML += imageDiv;
      });
   }

   function initTitles() {
      sliderTitles.querySelectorAll(".slider_title").forEach(title => {
         title.addEventListener("click", function () {
            moveSlider(this.dataset.index);
         })
      });
   }

   function initTexts() {
      images.forEach((text, index) => {
         let texts = `<span class='n${index} ${index === 0 ? 'active' : ''}' data-index='${index}'>${images[index].text1}</span>`;
         sliderText1.innerHTML += texts;
      });
      images.forEach((text, index) => {
         let texts = `<span class='n${index} ${index === 0 ? 'active' : ''}' data-index='${index}'>${images[index].text2}</span>`;
         sliderText2.innerHTML += texts;
      });
      images.forEach((text, index) => {
         let texts = `<span class='n${index} ${index === 0 ? 'active' : ''}' data-index='${index}'>${images[index].text3}</span>`;
         sliderText3.innerHTML += texts;
      });
   }

   function initArrows() {
      sliderArrows.querySelectorAll(".slider_arrow").forEach(arrow => {
         arrow.addEventListener("click", function () {
            let curNumber = +sliderImages.querySelector(".active").dataset.index;
            let nextNumber;
            if (arrow.classList.contains("left")) {
               nextNumber = curNumber === 0 ? images.length - 1 : curNumber - 1;
            }
            else {
               nextNumber = curNumber === images.length - 1 ? 0 : curNumber + 1;
            }
            moveSlider(nextNumber);
         });
      });
   }

   function initDots() {
      images.forEach((image, index) => {
         let dots = `<div class="dot n${index} ${index === 0 ? "active" : ""}" data-index="${index}"></div>`;
         sliderDots.innerHTML += dots;
      });
      sliderDots.querySelectorAll(".dot").forEach(dot => {
         dot.addEventListener("click", function () {
            moveSlider(this.dataset.index);
         })
      });
   }



   function moveSlider(num) {
      sliderImages.querySelector(".active").classList.remove("active");
      sliderImages.querySelector(".n" + num).classList.add("active");

      sliderTitles.querySelector(".active").classList.remove("active");
      sliderTitles.querySelector(".n" + num).classList.add("active");

      sliderText1.querySelector(".active").classList.remove("active");
      sliderText1.querySelector(".n" + num).classList.add("active");

      sliderText2.querySelector(".active").classList.remove("active");
      sliderText2.querySelector(".n" + num).classList.add("active");

      sliderText3.querySelector(".active").classList.remove("active");
      sliderText3.querySelector(".n" + num).classList.add("active");

      sliderDots.querySelector(".active").classList.remove("active");
      sliderDots.querySelector(".n" + num).classList.add("active");
   }
}







