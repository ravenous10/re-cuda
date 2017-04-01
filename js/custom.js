$(document).ready(function() {
    $("html").niceScroll();
});


var nice = false;
$(document).ready(function() {
    nice = $("html").niceScroll();
});

smoothScroll.init();

$("#fakeloader").fakeLoader();

$("#fakeloader").fakeLoader({
timeToHide:1500, //Time in milliseconds for fakeLoader disappear
zIndex:"999",//Default zIndex
spinner:"spinner5",//Options: 'spinner1', 'spinner2', 'spinner3', 'spinner4', 'spinner5', 'spinner6', 'spinner7'
bgColor:"#87509C", //Hex, RGB or RGBA colors
// imagePath:"yourPath/customizedImage.gif" //If you want can you insert your custom image
});
