var sideNav = document.getElementById("side-nav");
var menuButton = document.getElementById("menu");
var x = document.getElementById("x");

menuButton.addEventListener("click", function () {
    console.log("i hear you");
    sideNav.classList.add("on");
});
x.addEventListener("click", function () {
    sideNav.classList.remove("on");
});
