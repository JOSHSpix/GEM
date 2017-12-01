/* Trigger Navigation
*/ 
$(".toggle-nav").on("click", function(){
    toggleNav(); 

    return false;
});

$(".toggle-info").on("click", function(){
    $("#store_body").toggleClass("show-info");
    return false;
});

/* Store Menu No Refresh
*/ 
$(".ex_menu a").on("click", function(){
    if ($(this).hasClass("product")) return false;
    if ($(this).parent().hasClass('active')) return false;
    var parent = $(this).parent();
    if (! parent.hasClass('ex_menu')) {
        parent = parent.parent().parent();
    }

    var page = $(this).data("page-show");

    $(".products-page.displayed").removeClass('displayed');
    $(".ex_menu.active").removeClass("active");

    parent.addClass("active");
    $(".products-page[data-page="+page+"]").addClass("displayed");

    return false;
});

/* Show Right
*/ 
$(".store_items li").on("click", function(){

    // Clear Items
    $("#right-info").html('<div class="image-cover"></div><h3 class="title"></h3><p class="details"></p>');

    // Show the Correct Div
    if(! $("#store_body").hasClass("show-info")){
        $("#store_body").addClass("show-info");
    }

    var img = $(this).css("background-image"),// Get Image URL
        title = $(this).children(".info").children(".title").text(), // Grab Title
        details = $(this).children(".info").children("p:not(.title)").text();

    $("#right-info .image-cover").css("background-image", img);
    $("#right-info .title").html(title);
    $("#right-info .details").html(details);


    return false;
});