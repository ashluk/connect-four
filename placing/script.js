var sideNav = document.getElementsByClassName("side-nav");
var menuButton = document.getElementById("menu");
var x = document.getElementById("x");
var overlayNew = document.getElementsByClassName("overlayNew");

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
