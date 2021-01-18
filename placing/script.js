var sideNav = document.getElementById("side-nav");
var menuButton = document.getElementById("menu");
var move = document.getElementById("move");
var back = document.getElementById("moveBack");

menuButton.addEventListener("click", function () {
    console.log("i hear you");
    sideNav.classList.add("on");
});
menuButton.addEventListener("click", function () {
    sideNav.classList.remove("on");
});
