$(".project").toggleClass("open").animate({
    opacity: 1
}, 300);

$(".close").click(function(){
    $(".project-overlay").toggleClass("open").css("opacity", 0);
    $(".project.open").toggleClass("open").css("opacity", 0);
    window.location.href = "index.html";
})




var projects = ["labelinsight.html", "uptake.html", "biteback.html", "spongee.html", "mockups.html"];
var current = 0;
