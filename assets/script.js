// Permet de charger le JS avant le HTML
document.addEventListener("DOMContentLoaded", function(event) {

// Diapositives du carroussel
const slides = [
	{
	  "image": "./assets/images/slideshow/slide1.jpg",
	  "tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
	  "image": "./assets/images/slideshow/slide2.jpg",
	  "tagLine": "Tirages haute définition grand format <span>pour vos bureaux et événements</span>"
	},
	{
	  "image": "./assets/images/slideshow/slide3.jpg",
	  "tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
	  "image": "./assets/images/slideshow/slide4.png",
	  "tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
	}
  ];

  
  // Variable qui permet de connaître l'image sur laquelle on se trouve
let currentSlideIndex = 0;
 
// Selectionne la banniére
const banner = document.getElementById("banner"); 

  // EventListener flèche gauche
const arrowLeft = banner.querySelector(".arrow_left");
arrowLeft.addEventListener("click", () => {
  console.log("fleche gauche on click");
  changeSlide(-1);
});

// EventListener flèche droite
const arrowRight = banner.querySelector(".arrow_right");
arrowRight.addEventListener("click", () => {
  console.log("fleche droite on click");
  changeSlide(1);
});

// Fonction pour faire défiler les slides
function changeSlide(direction) {
	currentSlideIndex = (currentSlideIndex + direction + slides.length) % slides.length;
	const currentSlide = slides[currentSlideIndex];

	
// 	// Selectionne l'élément de l'image de la bannière
	const bannerImage = document.getElementById("firstSlide");
	bannerImage.src = currentSlide.image;

	// Sélectionne le texte de la bannière
	const bannerText = document.querySelector("#banner p");
	bannerText.innerHTML = currentSlide.tagLine;

	// Mettre à jour l'état actif des points
const dots = banner.querySelectorAll(".dot");
dots.forEach((dot, index) => {
  	if (index === currentSlideIndex) {
	dot.classList.add("dot_selected");} 
	else {
	dot.classList.remove("dot_selected");}
})


}
// Affiche la première diapositive au chargement de la page
changeSlide(0);
});

