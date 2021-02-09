var sideNav = document.getElementsByClassName("side-nav");
var menuButton = document.getElementById("menu");
var x = document.getElementById("x");
var overlayNew = document.getElementsByClassName("overlayNew");
var modalJQ = $(".modal");
var spanJQ = $(".close");

overlayNew[0].classList.add("invisible");

/*document.ready(function () {
    $(".modal-content").toggle("slow", function () {});
});*/
/*$(document).ready(function () {
    $(".modal-content").toggle(5000);
});*/

spanJQ.on("click", function () {
    modalJQ.css({
        display: "none",
    });
});

menuButton.addEventListener("click", function () {
    //console.log("i am listening");
    sideNav[0].classList.add("on");
    overlayNew[0].classList.remove("invisible");
});

x.addEventListener("click", function () {
    //console.log("i hear you");
    sideNav[0].classList.remove("on");
    overlayNew[0].classList.add("invisible");
});

/*window.on("click", function (event) {
    if (event.target == modalJQ) {
        modalJQ.css({
            display: "none",
        });
    }
});*/
