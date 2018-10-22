$(".project").toggleClass("open").animate({
    opacity: 1
}, 300);

$(".close").click(function(){
    $(".project-overlay").toggleClass("open").css("opacity", 0);
    $(".project.open").toggleClass("open").css("opacity", 0);
    window.location.href = "index.html";
})

$(".home").click(function(){
    window.location.href= "index.html#work";
    $(window).scrollTop($(window).height());
})


var projects = ["labelinsight.html", "uptake.html", "biteback.html", "spongee.html", "mockups.html"];
var current = 0;

$(".next-project").click(function(){
    var project = window.location.href;
    for (var i = 0; i < project.length; i++){
        if (project.includes(projects[i])) current = i;
    }
    console.log(window.location.href);
    // window.location.href = "www.pratapjayaram.com/" + projects[current+1];
    window.location.href = "file:///C:/Users/prata/Documents/GitHub/portfolio/"
 + projects [current+1]});
