$(function(){

    // Header
    // ----------------------------
    // .side-nav 開啟
    $(".collapse__item").on("touchstart, click", function(){
        $(this).attr("data-open") == "true" ? $(this).attr("data-open", "false") : $(this).attr("data-open", "true");
    });

    $('.collapse__content').on("touchstart, click", function(e){
       e.stopPropagation();
    });

});