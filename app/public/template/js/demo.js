



// $(".dropdown").on("click", function (e) {

//     // console.log(1);
//     $(this).attr("data-open") == "true" ? $(this).attr("data-open","false") : $(this).attr("data-open", "true");
//     e.stopPropagation();
// });
$(".dropdown").hover(function(e) {

    $(this).attr("data-open") == "true" ? $(this).attr("data-open","false") : $(this).attr("data-open", "true");
    e.stopPropagation();
});




$("body").on("click", function () {
 
    $('.dropdown').attr("data-open","false");
    $(".header__nav").attr("data-open","false");
});
$(".header__nav").on("click", function (e) {
    e.stopPropagation();
});

$(".header__nav .btn--clear").on("click", function (e) {
    $(".header__nav").attr("data-open","false");
});
$(".header__main .btn--nav").on("click", function (e) {
    $(".header__nav").attr("data-open","true");
    e.stopPropagation();
});
var swiper = new Swiper(".new-download__swiper .swiper", {
    
    
    slidesPerView: 'auto',
    pagination: {
        el: ".swiper-pagination",
    },
    // breakpoints: { 
    //     320: {  //当屏幕宽度大于等于320
    //       slidesPerView: 2,
       
    //     },
    //     768: {  //当屏幕宽度大于等于768 
    //       slidesPerView: 3,
        
    //     },
    //     1280: {  //当屏幕宽度大于等于1280
    //       slidesPerView: 4,
         
    //     }
    //   }
  
});

var SwiperDesktop = new Swiper(".promotion .swiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: false,
   
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
    loop: false,
 
    observer: true,
    observeParents: true,
});