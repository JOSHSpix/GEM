/*product menu*/
[].slice.call(document.querySelectorAll('.menu .product')).forEach(function(el){
    el.addEventListener('click', onClick, false);
});

function onClick(e){
    e.preventDefault();
    var el = this.parentNode;
    el.classList.contains('show-dropMenu') ? hideSubMenu(el) : showSubMenu(el);
}

function showSubMenu(el){
    el.classList.add('show-dropMenu');
    document.addEventListener('click', function onDocClick(e){
        e.preventDefault();
        if(el.contains(e.target)){
            return;
        }
        document.removeEventListener('click', onDocClick);
        hideSubMenu(el);
    });
}

function hideSubMenu(el){
    el.classList.remove('show-dropMenu');
}

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
