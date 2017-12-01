
/*automatic slideshow*/

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
  slides[index - 1].style.display = "block";
  dots[index - 1].className += " active-dot";
  setTimeout(displaySlides, 5000); // Change image every 4 seconds
  object.style.transition
}

var i = 0;
displayStoreSlides();

function displayStoreSlides() {
  var storeSlides = document.getElementsByClassName("store_photos");
  var storeDots = document.getElementsByClassName("dots");
  for (var i = 0; i < slides.length; i++) {
    storeSlides[i].style.display = "none";
  }
  index++;
  if (index > storeSlides.length) {
    index = 1
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active-dots", "");
  }
  storeSlides[index - 1].style.display = "block";
  dots[i - 1].className += " active-dots";
  setTimeout(displaySlides, 4000); // Change image every 4 seconds
  object.style.transition
}

/*open-close nav*/
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}


/*login/signup*/
function login() {
  document.querySelector('.cont_forms').className = "cont_forms cont_forms_active_login";
  document.querySelector('.cont_form_login').style.display = "block";
  document.querySelector('.cont_form_sign_up').style.opacity = "0";

  setTimeout(function () { document.querySelector('.cont_form_login').style.opacity = "1"; }, 200);

  setTimeout(function () {
    document.querySelector('.cont_form_sign_up').style.display = "none";
  }, 200);
}

function signup() {
  document.querySelector('.cont_forms').className = "cont_forms cont_forms_active_sign_up";
  document.querySelector('.cont_form_sign_up').style.display = "block";
  document.querySelector('.cont_form_login').style.opacity = "0";

  setTimeout(function () { document.querySelector('.cont_form_sign_up').style.opacity = "1"; }, 100);

  setTimeout(function () { document.querySelector('.cont_form_login').style.display = "none"; }, 400);


}

function login_signup() {

  document.querySelector('.cont_forms').className = "cont_forms";
  document.querySelector('.cont_form_sign_up').style.opacity = "0";
  document.querySelector('.cont_form_login').style.opacity = "0";

  setTimeout(function () {
    document.querySelector('.cont_form_sign_up').style.display = "none";
    document.querySelector('.cont_form_login').style.display = "none";
  }, 400);
}

/*Featured Item Slider*/
var translateX = 0;

$(".left").on("click", function () {
  translateX -= 100;
  $("#img-holder .slide-img").css('transform', 'translateX(' + translateX + 'px)');

  if ($(".slide-img:first").offset().left - $(".slide-img:first").width() < $("#img-holder").offset().left) {
    $("#img-holder").append($(".slide-img:first").css("transform", "translateX(0px)"));
  }
});

$(".right").on("click", function () {
  translateX += 100;
  $("#img-holder .slide-img").css('transform', 'translateX(' + translateX + 'px)');
  if ($(".slide-img:last").offset().left > $("#img-holder").width() + $("#img-holder").offset().left) {
    $("#img-holder").prepend($(".slide-img:last").css("transform", "translateX(0px)"));
  }
});

