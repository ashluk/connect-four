var headlines = document.getElementById("headlines");
var left = headlines.offsetLeft;
var links = document.getElementsByTagName("a");
var requestId;

/*function moveHeadlines() {
    left--;
    if (left < -links[0].offsetWidth) {
        left += links[0].offsetWidth;
        headlines.appendChild(links[0]);
    }
    headlines.style.left = left + "px";
    requestAnimationFrame(moveHeadlines);
}
moveHeadlines();*/

function moveHeadlines() {
    left--;
    if (left < -links[0].offsetWidth) {
        left += links[0].offsetWidth;
        headlines.appendChild(links[0]);
    }
    headlines.style.left = left + "px";
    requestAnimationFrame(moveHeadlines);
}
moveHeadlines();

for (var i = 0; i < links.length; i++) {
    //console.log('links[i]: ',links[i]);
    links[i].addEventListener("mouseenter", function (e) {
        console.log("e.target mouse enter:", e.target);
        //e target refers to the clicked element
        e.target.style.font = "hotpink";
        cancelAnimationFrame(requestId);
    });
    links[i].addEventListener("mouseleave", function (e) {
        console.log("e.target mouse leave: ", e.target);
        headlines.style.left = left + "px";
        requestAnimationFrame(moveHeadlines);
    });
}

function checkHeadlines() {
    requestId = requestAnimationFrame(moveHeadlines);
    return requestId;
    //console.log("requestId: ", requestId);
}

checkHeadlines();
