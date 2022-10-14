

// $(".dropdown").on("hover", function (e) {
   
// });
$(".dropdown").hover(function() {
    console.log(1);
    $(this).attr("data-open") == "true" ? $(this).attr("data-open","false") : $(this).attr("data-open", "true");
    e.stopPropagation();
});

// $("body").on("click", function () {
 
//     $('.dropdown').attr("data-open","false");
// });


var swiper = new Swiper(".new-download__swiper .swiper", {
    slidesPerView: 5,
    pagination: {
        el: ".swiper-pagination",
    },
});

var SwiperDesktop = new Swiper(".promotion .swiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
   
    preloadImages: false,
    slidesPerView: "auto",
    coverflowEffect: {
        rotate: 0,
        stretch:200,
        depth: 50,
        modifier:1,
        scale: 0.8,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".promotions__swiper-button-next",
        prevEl: ".promotions__swiper-button-prev",
    },
    loop: true,
 
    observer: true,
    observeParents: true,
});