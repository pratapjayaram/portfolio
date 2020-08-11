$(".project").toggleClass("open").animate({
    opacity: 1
}, 300);

$(".close").click(function(){
    $(".project-overlay").toggleClass("open").css("opacity", 0);
    $(".project.open").toggleClass("open").css("opacity", 0);
    window.location.href = "index.html#work";
})

$(".home").click(function(){
    window.location.href= "index.html#work";
    $(window).scrollTop($(window).height());
})


var projects = ["labelinsight.html", "freefrom.html", "uptake.html", "biteback.html", "spongee.html", "mockups.html"];
var current = 0;

$(".next-project").click(function(){
    var project = window.location.href;
    for (var i = 0; i < project.length; i++){
        if (project.includes(projects[i])) current = i;
    }
    window.location.href = projects[current+1];
})
