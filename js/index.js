function fade() {
    $(".preloader").fadeOut("slow");
}
setTimeout(fade, 3000);

$(".imgthumbnail").mouseover(function() {
    console.log("hover")
});