
var index = 0;
displaySlides();

function displaySlides() {
var slides = document.getElementsByClassName("photos");
var dots = document.getElementsByClassName("dot");
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

function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
   
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

/*Featured Item Slider*/
var translateX = 0;

$(".left").on("click", function(){
  translateX -= 100;
  $("#img-holder .slide-img").css('transform', 'translateX('+translateX+'px)');	
  
  if ($(".slide-img:first").offset().left - $(".slide-img:first").width() < $("#img-holder").offset().left) {
      $("#img-holder").append($(".slide-img:first").css("transform", "translateX(0px)"));
    }
});

$(".right").on("click", function(){
  translateX += 100;
  $("#img-holder .slide-img").css('transform', 'translateX('+translateX+'px)');
  if ($(".slide-img:last").offset().left > $("#img-holder").width() + $("#img-holder").offset().left) {
      $("#img-holder").prepend($(".slide-img:last").css("transform", "translateX(0px)"));
    }
});

/*Store Menu*/
$(".toggle-content").on("click", function(){
  var toggle_class = $(this).data("show");
  
  $(".toggle-content").removeClass("active");
  $(this).addClass("active");
  
  $(".active-content").toggleClass("hidden-content").toggleClass("active-content");
  $("."+toggle_class).toggleClass("hidden-content").toggleClass("active-content");
  
  return false;
});

/*Store Menu Click to Expand*/

$(".dropdown-content").on("click", function(){
  var show_div = $(this).data("show");
  $(this).addClass("expanded");
  
  $(".dropdownMenu."+show_div).toggleClass("active");
  
  return false;
});
