const slides = [
  {
    image: "./actifs/images/slide/slide1.jpg",
    tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
  },
  {
    image: "./actifs/images/slide/slide2.jpg",
    tagLine:
      "Tirages haute définition grand format <span>pour vos bureaux et événements</span>",
  },
  {
    image: "./actifs/images/slide/slide3.jpg",
    tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
  },
  {
    image: "./actifs/images/slide/slide4.png",
    tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
  },
];

const img = document.querySelector(".banner-img");
const txt = document.querySelector(".banner, p");
const leftArrow = document.querySelector(".arrow_left");
const rightArrow = document.querySelector(".arrow_right");
const dots = document.querySelector(".dots");

leftArrow.addEventListener("click", function () {
  positionSlide--;
  if (positionSlide === -1) {
    positionSlide = slides.length - 1;
  }
  img.src = slides[positionSlide].image;
  txt.innerHTML = slides[positionSlide].tagLine;
  console.log("Flèche de gauche");
  updateDots();
});

rightArrow.addEventListener("click", function () {
  positionSlide++;
  if (positionSlide === slides.length) {
    positionSlide = 0;
  }
  img.src = slides[positionSlide].image;
  txt.innerHTML = slides[positionSlide].tagLine;
  console.log("Flèche de droite");
  updateDots();
});

let positionSlide = 0;

for (let i = 0; i < slides.length; i++) {
  const newDot = document.createElement("div");
  newDot.classList = "dot";
  dots.appendChild(newDot);
  newDot.addEventListener("click", function () {
    positionSlide = i;
    img.src = slides[positionSlide].image;
    txt.innerHTML = slides[positionSlide].tagLine;
    updateDots();
  });
}

let dot = document.querySelectorAll(".dot");
dot[0].classList.add("dot_selected");

function updateDots() {
  for (let i = 0; i < dot.length; i++) {
    if (i === positionSlide) {
      dot[i].classList.add("dot_selected");
    } else {
      dot[i].classList.remove("dot_selected");
    }
  }
}
