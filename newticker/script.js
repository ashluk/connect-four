var headlines = document.getElementById("headlines");
var left = headlines.offsetLeft;
console.log(left);

moveHeadlines();

function moveHeadlines() {
    left--;
    if (left < headlines.firstChild.offsetWidth) {
        headlines.style.left = "200px";
        requestAnimationFrame(moveHeadlines);
    }
    console.log(moveHeadlines);
}
requestAnimationFrame(moveHeadlines);
