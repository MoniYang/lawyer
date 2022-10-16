$(function(){

    // Header
    // ----------------------------
    // .side-nav 開啟
    $(".header-menu .btn").on("touchstart, click", function(){
        $(this).closest(".header").siblings(".side-nav").attr("data-open") == "true" ? $(this).closest(".header").siblings(".side-nav").attr("data-open", "false") : $(this).closest(".header").siblings(".side-nav").attr("data-open", "true");
    });
    // .side-nav 關閉
    $(".side-nav__header .btn").on("touchstart, click", function(){
        $(this).closest(".side-nav").attr("data-open","false");
    });

    // .dropdown 點選
    $(".dropdown > .btn").on("touchstart, click", function(e){
        e.stopPropagation();
        $(this).closest(".dropdown").attr("data-open") == "true" ? $(this).closest(".dropdown").attr("data-open", "false") : $(this).closest(".dropdown").attr("data-open", "true");
        $(this).closest(".dropdown").siblings(".dropdown").attr("data-open", "false");
    });

    // .list__item 點選
    $(".platform-list__item .btn, .language-list__item .btn").on("touchstart, click", function(e){
        e.stopPropagation();
        if( $(this).closest(".platform-list__item, .language-list__item").is("[data-selected]") ) {
            $(this).closest(".platform-list__item, .language-list__item").attr("data-selected", "true").siblings(".platform-list__item[data-selected], .language-list__item[data-selected]").attr("data-selected", "false");
        }

       
    });

    $('.side-nav').on("touchstart, click", function(){
     
        $(this).closest(".side-nav").attr("data-open","false");

        $('.side-nav__main').on("touchstart, click", function(e) {
            e.stopPropagation();
        });
    });

  

    // .dropdown 點選其他地方關閉
    $(".app").on("touchstart, click", function(){
        $(".dropdown").attr("data-open", "false");
    });


    // LoginPopup
    // ----------------------------
    // .login 開啟
    // $(".modal--login").attr("data-open", "false");
    $(".header-nav__item .btn , .header-login .btn--secondary , .sports__banner .swiper-slide, .promotions .swiper-slide, .provider .swiper-slide ").on("touchstart, click", function(){
        $(".modal--login").attr("data-open", "true");
    });

    // .modal 關閉
    $(".modal__close .btn").on("touchstart, click", function(){
        $(this).closest(".modal").attr("data-open", "false");
    });

    // .login-switch 切換
    $(".login-switch").on("touchstart, click", function(){
        $(this).attr("data-mode") == "gesture-password" ? $(this).attr("data-mode", "keypad") : $(this).attr("data-mode", "gesture-password");

        if( $(this).attr("data-mode") == "keypad" ){
            $(".login-gesture").attr("data-open", "false");
            $(".login-form").attr("data-open", "true");
        } else {
            $(".login-gesture").attr("data-open", "true");
            $(".login-form").attr("data-open", "false");
        }
    });

    // .textfield type / .btn 切換
    $(".login-form .login-form__item:nth-child(2) .textfield .btn").on("touchstart, click", function(){
        $(this).attr("data-selected") == "true" ? $(this).attr("data-selected", "false") : $(this).attr("data-selected", "true");

        if( $(this).attr("data-selected") == "true" ){
            $(".login-form__item:nth-child(2) .textfield__input").attr("type", "text");
        } else {
            $(".login-form__item:nth-child(2) .textfield__input").attr("type", "password");
        }
    });


    // Main
    // ----------------------------
    $('.main__bar .btn').on("touchstart, click", function() {
        $(this).attr("data-selected", "true");
        $(this).siblings(".btn").attr("data-selected", "false");
    });

    $(".main .main__bar .btn").on("touchstart, click", function(){
        $(this).closest(".btn").attr("data-selected", "true");
        $(this).closest(".btn").siblings(".btn").attr("data-selected", "false");

        if( $(".main .main__bar .btn:nth-child(1)").attr("data-selected") == "true" ){
            $(".sport-highlights").siblings("div").attr("data-open", "false");
            $(".sport-highlights").attr("data-open", "true");
        } else if( $(".main .main__bar .btn:nth-child(2)").attr("data-selected") == "true" ){
            $(".live-score").siblings("div").attr("data-open", "false");
            $(".live-score").attr("data-open", "true");
        } else if( $(".main .main__bar .btn:nth-child(3)").attr("data-selected") == "true" ){
            $(".news").siblings("div").attr("data-open", "false");
            $(".news").attr("data-open", "true");
        }
    });


    // live-score
    // ----------------------------
    $(".tabs--underline .tab").on("touchstart, click", function(){
        $(this).attr("data-selected", "true");
        $(this).siblings(".tab").attr("data-selected", "false");

        if( $(".tabs--underline .tab:nth-child(1)").attr("data-selected") == "true" ){
            $(this).closest(".tabs--underline").siblings(".tabs--pills").attr("data-open", "true");
        } else if ( $(".tabs--underline .tab:nth-child(1)").attr("data-selected") == "false" ){
            $(this).closest(".tabs--underline").siblings(".tabs--pills").attr("data-open", "false");
        }
    });

    $('.tabs--pills .tab').on("touchstart, click", function() {
        $(this).attr("data-selected") == "true" ? $(this).attr("data-selected", "false") : $(this).attr("data-selected", "true");
    });


    // Video
    // ----------------------------
    $('.video').on('click', function(event) {
        if ($(this).attr("data-selected") == "true"  ){
            $(this).attr("data-selected", "false");
            event.stopPropagation();
        }
        else {
            $(this).attr("data-selected", "true");
            event.stopPropagation();
        }
    });

    $('.video__play .btn').on('click', function(event) {
        if ($(this).attr("data-selected") == "true"  ){
            $(this).attr("data-selected", "false");
            event.stopPropagation();
        }
        else {
            $(this).attr("data-selected", "true");
            event.stopPropagation();
        }
    });


    $(".live-score__tab > .tabs--underline .tab:nth-child(1)").attr("data-selected", "true");
    $(".live-score__group--sport1").attr("data-open", "true");
    $(".live-score__tab > .tabs--underline .tab:nth-child(1)").attr("data-selected", "true");
    $(".live-score__tab > .tabs--underline .tab .btn").on("touchstart, click", function(){
        $(this).closest(".tab").attr("data-selected", "true");
        $(this).closest(".tab").siblings(".tab").attr("data-selected", "false");

        if( $(".live-score__tab > .tabs--underline .tab:nth-child(1)").attr("data-selected") == "true" ){
            $(".live-score__group--sport1").siblings("div").attr("data-open", "false");
            $(".live-score__group--sport1").attr("data-open", "true");
        } else if( $(".live-score__tab > .tabs--underline .tab:nth-child(2)").attr("data-selected") == "true" ){
            $(".live-score__group--sport2").siblings("div").attr("data-open", "false");
            $(".live-score__group--sport2").attr("data-open", "true");
        } else if( $(".live-score__tab > .tabs--underline .tab:nth-child(3)").attr("data-selected") == "true" ){
        $(".live-score__group--sport50").siblings("div").attr("data-open", "false");
        $(".live-score__group--sport50").attr("data-open", "true");
        } else if( $(".live-score__tab > .tabs--underline .tab:nth-child(4)").attr("data-selected") == "true" ){
        $(".live-score__group--sport1").siblings("div").attr("data-open", "false");
        $(".live-score__group--sport1").attr("data-open", "true");
        }
    });

});


$(window).scroll(function() {


    if ($(this).scrollTop() >  300 ) {
        $('.btn--gototop').attr("data-open", "true");
    } else {
        $('.btn--gototop').attr("data-open", "false");
    }
});

//Click event to scroll to top
$('.btn--gototop').click(function() {

    $('html, body').animate({
        scrollTop: 0
    }, 1000);
   
    return false;
});
