
var index = 0;
displaySlides();

function displaySlides() {
var slides = document.getElementsByClassName("store_photos");
var dots = document.getElementsByClassName("dots");
for (var i = 0; i < slides.length; i++) {
slides[i].style.display = "none"; 
}
index++;
if (index > slides.length) {
index = 1
} 
for (i = 0; i < dots.length; i++) {
dots[i].className = dots[i].className.replace(" active-dot", "");
}
slides[index-1].style.display = "block"; 
dots[index-1].className += " active-dot";
setTimeout(displaySlides, 4000); // Change image every 4 seconds
object.style.transition
}
