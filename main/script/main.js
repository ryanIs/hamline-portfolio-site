/* Ryan Isler - 2016 */
var FPS = 15; // 60
var webInterval;
var txtO = 1.0;
var projects = [];
var exercises = [];

$(document).ready(function(){
    $(".nav-projects").click(function() {
        scrollTo(0, 0);
        return;
    });
    $(".nav-exercises").click(function() {
        // Due to the change in div height, I use this variable method to achieve the indexing.
        scrollTo(0, window.pageYOffset + $("#exercises")[0].getBoundingClientRect().top - 90 );
        return;
    });
    $(".nav-about").click(function() {
        scrollTo(0, window.pageYOffset + $("#about")[0].getBoundingClientRect().top - 90 );
        return;
    });
    $(".nav-contact").click(function() {
        scrollTo(0, window.pageYOffset + $("#contact")[0].getBoundingClientRect().top - 90 );
        return;
    });
    
    projects = document.getElementsByClassName("project");
    exercises = document.getElementsByClassName("exercise");
    for(var i = 0; i < projects.length; i++) {
        $(projects[i]).mouseenter(function(e) {
            $(".footer").css("height", "100px");
            $(".footer").html("<p>"+ e.currentTarget.getAttribute("description") +"</p>");
        });
        $(projects[i]).mouseleave(function(e) {
            $(".footer").css("height", "0px");
        });
    }
    for(var i = 0; i < exercises.length; i++) {
        $(exercises[i]).mouseenter(function(e) {
            $(".footer").css("height", "100px");
            $(".footer").html("<p>"+ e.currentTarget.getAttribute("description") +"</p>");
        });
        $(exercises[i]).mouseleave(function(e) {
            $(".footer").css("height", "0px");
        });
    }
});

function m(tar, txt=0) {
	// Message
	if(txt==0) {
		txt = tar.title;
	}
	txtO = 0;
	document.getElementById("description").style.opacity = 0;
	document.getElementById("description").innerHTML = txt;
}
function intervalCode() {
	// Called 60 times per second
	if(txtO < 1.0) {
		txtO += 0.05;
		document.getElementById("description").style.opacity = txtO;
	}
}
function initInterval() {
	var webInterval = window.setInterval(intervalCode, Math.floor(1000/FPS));
}