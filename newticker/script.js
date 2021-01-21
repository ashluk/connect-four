console.log("am i crazy?", $);
//var headlines = document.getElementById("headlines");
var headlinesJQ = $("#headlines");
//var left = headlines.offsetLeft;
var leftJQ = headlinesJQ.offset().left;
//var links = document.getElementsByTagName("a");
var linksJQ = $("a");
var requestId;

//vanilla JS
/*function moveHeadlines() {
    left--;
    if (left < -links[0].offsetWidth) {
        left += links[0].offsetWidth;
        headlines.appendChild(links[0]);
    }
    headlines.style.left = left + "px";
    requestId = requestAnimationFrame(moveHeadlines);
}*/
//JQ -->
function moveHeadlines() {
    leftJQ--;
    if (leftJQ < -linksJQ.eq(0).offsetWidth) {
        leftJQ += linksJQ.eq(0).offsetWidth;
        headlinesJQ.appendChild(linksJQ.eq(0));
    }
    headlinesJQ.css({
        left: leftJQ + "px",
    });
    requestId = requestAnimationFrame(moveHeadlines);
}
moveHeadlines();

//vanilla JS
/*for (var i = 0; i < links.length; i++) {
    //console.log('links[i]: ',links[i]);
    links[i].addEventListener("mouseenter", function (e) {
        console.log("e.target mouse enter:", e.target);
        //e target refers to the clicked element
        e.target.style.color = "blue";
        e.target.style.textDecoration = "underline";
        cancelAnimationFrame(requestId);
    });*/
//JQ
for (var i = 0; i < linksJQ.length; i++) {
    //console.log('links[i]: ',links[i]);

    linksJQ.eq(i).on("mouseenter", function (e) {
        e.target.css({
            color: "blue",
            textDecoration: "underline",
        });

        cancelAnimationFrame(requestId);
    });
    //vanilla JS
    /*links[i].addEventListener("mouseleave", function (e) {
        console.log("e.target mouse leave: ", e.target);
        e.target.style.color = "black";
        e.target.style.textDecoration = "none";

        //headlines.style.left = left + "px";
        requestId = requestAnimationFrame(moveHeadlines);
    });*/

    linksJQ.eq(i).on("mouseleave", function (e) {
        console.log("e.target mouse leave: ", e.target);
        e.target.css({
            color: "black",
            textDecoration: "underline",
        });

        requestId = requestAnimationFrame(moveHeadlines);
    });
}

/*function checkHeadlines() {
    requestId = requestAnimationFrame(moveHeadlines);
    return requestId;
    //console.log("requestId: ", requestId);
}

checkHeadlines();*/
