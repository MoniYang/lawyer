

$(".dropdown").on("click", function (e) {
    console.log(1);
    $(this).attr("data-open") == "true" ? $(this).attr("data-open","false") : $(this).attr("data-open", "true");
    e.stopPropagation();
});

$("body").on("click", function () {
 
    $('.dropdown').attr("data-open","false");
});


var swiper = new Swiper(".new-download__swiper .swiper", {
    slidesPerView: 5,
    pagination: {
        el: ".swiper-pagination",
    },
});