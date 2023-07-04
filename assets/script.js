const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]



//variables

let dotSelected = 0;
//slidesLength = last index of the table
const slidesLength = slides.length - 1;
const dots = document.querySelector(".dots");
console.log( dots);
const arrowLeft = document.querySelector(".arrow_left");
const arrowRight = document.querySelector(".arrow_right");


//functions

// Function for create bullet points
// scans the "slides" table and creates a dot for each entry
function generateDots(slides) {
	for (let i = 0; i < slides.length; i++) {
		const dotElement = document.createElement("div");
		dotElement.setAttribute("class", "dot");
		dots.appendChild(dotElement);
	}
}

//Function for update image and text of the slides
//Fetches "banner-img" class and <p> in "banner" id and updates them
function generateSlides() {
	const baliseImage = document.querySelector(".banner-img");
	const baliseText = document.querySelector("#banner p");
	baliseImage.src = "./assets/images/slideshow/"+slides[dotSelected].image;
	baliseText.innerHTML= slides[dotSelected].tagLine;
}


//code

generateDots(slides);
// dot: all class="dot" in a table ( not create before because the dots don't exist)
const dot = document.querySelectorAll(".dot");
console.log(dot);
//add dot_selected class on the active dot
dot[dotSelected].setAttribute("class", "dot dot_selected");


//Add EventListener on the arrows with slide update
arrowLeft.addEventListener("click", function (){
	dot[dotSelected].setAttribute("class", "dot");
	dotSelected --;
	dotSelected < 0 ? dotSelected=slidesLength : null;
	dot[dotSelected].setAttribute("class", "dot dot_selected");
	generateSlides();
	return console.log("click arrow: left " + "; Dot selected: " + dotSelected + "; Total Number of slides: " + slidesLength);
})



arrowRight.addEventListener("click", function (){
	dot[dotSelected].setAttribute("class", "dot");
	dotSelected ++;
	dotSelected > slidesLength ? dotSelected = 0 : null;
	dot[dotSelected].setAttribute("class", "dot dot_selected");
	generateSlides();
	return console.log("click arrow: right " + "; Dot selected: " + dotSelected + "; Total Number of slides: " + slidesLength);
})