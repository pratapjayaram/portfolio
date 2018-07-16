$(".nav-item").click(function(){
    $(".nav-item.active").toggleClass("inactive");
    $(".nav-item.active").toggleClass("active");
    $(this).toggleClass("inactive");
    $(this).toggleClass("active");

    var pageind = $(".nav-item").index(this);
    if (pageind = 1){
        window.scroll({
            top: 900,
            left: 0,
            behavior: 'smooth'
        });
    }
})


$(".page-down").click(function(){
    var scrollPoint = Math.ceil($("html, body").scrollTop()/$(window).height()) + 1;
    $('html, body').animate({
        scrollTop: $(window).height()*scrollPoint
    }, 400)
})
