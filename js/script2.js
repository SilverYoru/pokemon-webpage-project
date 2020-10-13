const button = document.getElementById("compete-link");
button.addEventListener("click", function () {
  console.log("only 1 button clicked");
  window.location =
    "https://www.pokemon.com/us/pokemon-news/compete-in-the-battle-of-legends-online-competition/";
});

const button2 = document.getElementById("rank-link");
button2.addEventListener("click", function () {
  console.log("only 1 button clicked");
  window.location =
    "https://www.pokemon.com/us/pokemon-news/pokemon-sword-and-pokemon-shield-ranked-battles-october-season-is-here/";
});

const button3 = document.getElementById("ash-link");
button3.addEventListener("click", function () {
  console.log("only 1 button clicked");
  window.location =
    "https://www.pokemon.com/us/pokemon-news/get-ashs-pikachu-wearing-ashs-caps-in-pokemon-sword-or-pokemon-shield/";
});

const button4 = document.getElementById("latin-link");
button4.addEventListener("click", function () {
  console.log("only 1 button clicked");
  window.location =
    "https://www.pokemon.com/us/play-pokemon/internationals/2020/latin-america/about/";
});

const button5 = document.getElementById("tcg-link");
button5.addEventListener("click", function () {
  console.log("only 1 button clicked");
  window.location =
    "https://www.pokemon.com/us/play-pokemon/pokemon-players-cup/tcg-finals-results/";
});

const button6 = document.getElementById("dallas-link");
button6.addEventListener("click", function () {
  console.log("only 1 button clicked");
  window.location =
    "https://www.pokemon.com/us/play-pokemon/dallas-regionals-2020/tcg-masters/";
});

/*var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 6000); // Change image every 6 seconds
}*/

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}
