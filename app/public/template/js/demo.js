



$('.header__nav[role="mobile-visible"] .dropdown').on("click", function (e) {

    // console.log(1);
    $(this).attr("data-open") == "true" ? $(this).attr("data-open","false") : $(this).attr("data-open", "true");
    e.stopPropagation();
});

$('.header__nav[role="desktop-visible"] .dropdown').hover(function(e) {

    $(this).attr("data-open") == "true" ? $(this).attr("data-open","false") : $(this).attr("data-open", "true");
    e.stopPropagation();
});

$('.product .dropdown').on("click", function (e) {

    // console.log(1);
    $(this).attr("data-open") == "true" ? $(this).attr("data-open","false") : $(this).attr("data-open", "true");
    e.stopPropagation();
});

$('.mm-info--cart-check .mm-info__btn').click(function(e) {

    $('.mm-info__group').attr("data-open") == "true" ? $('.mm-info__group').attr("data-open","false") : $('.mm-info__group').attr("data-open", "true");
    
});

$('.mm-info--golden .mm-info__btn').click(function(e) {

    $('.mm-info__group').attr("data-open") == "true" ? $('.mm-info__group').attr("data-open","false") : $('.mm-info__group').attr("data-open", "true");
    
});
$('.mm-info--cart-ok .mm-info__content > .mm-info__group').click(function(e) {

    $('.mm-info__content').attr("data-open") == "true" ? $('.mm-info__content').attr("data-open","false") : $('.mm-info__content').attr("data-open", "true");
    
});

$('.mm-info--golden-ok .mm-info__content > .mm-info__group').click(function(e) {

    $('.mm-info__content').attr("data-open") == "true" ? $('.mm-info__content').attr("data-open","false") : $('.mm-info__content').attr("data-open", "true");
    
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

$("input#triple").on("click", function (e) {
    $(".mm-info--triple").attr("data-open","true");
});

$("input#double").on("click", function (e) {
    $(".mm-info--triple").attr("data-open","false");
});
var swiper = new Swiper(".new-download__swiper .swiper", {
    
    autoplay: {
        delay: 5000,
      },
    slidesPerView: 'auto',
    pagination: {
        el: ".swiper-pagination",
    },
   
});

var SwiperDesktop = new Swiper(".promotion .swiper", {
    autoplay: {
        delay: 5000,
      },
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    preloadImages: false,
   
    coverflowEffect: {
        rotate: 0,
        stretch:100,
        depth: 10,
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

var swiper = new Swiper(".product-info-swiper-btns", {
    spaceBetween: 0,
    slidesPerView: 'auto',
    freeMode: true,
    watchSlidesProgress: true,
  });
  var swiper2 = new Swiper(".product-info-swiper", {
    slidesPerView: 'auto',
    spaceBetween: 0,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    thumbs: {
      swiper: swiper,
    },
  });