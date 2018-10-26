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
    var scrollPoint = Math.round($("html, body").scrollTop()/$(window).height()) + 1;
    $('html, body').animate({
        scrollTop: $(window).height()*scrollPoint
    }, 400)
    var scrollPoint = 0;
})

var projects = ["labelinsight.html", "uptake.html", "biteback.html", "spongee.html", "mockups.html"];
var current = 0;
$(".project-tile").click(function(){
    var tilenum = $(this).index();
    current = tilenum;
    $(".project-overlay").toggleClass("open");
    $(".project-overlay").animate({
        opacity: 1
    }, 300).delay(300);
    window.location.href = projects[tilenum];
})

var heroes = ["assets/li-logo.png", "assets/uptake-logo.jpg", "assets/biteback/hero.jpg", "assets/Spongee/spongee-hero.jpg", "assets/Mockups/mockups-hero.jpg"]
for(var i = 0; i < heroes.length; i++){
    var pointer = "url(" + heroes[i] + ")";
    $(".project-tile").eq(i)
        .css("background-image", pointer);
}
