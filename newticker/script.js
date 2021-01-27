console.log("am i crazy?", $);
var headlinesJQ = $("#headlines");
var leftJQ = headlinesJQ.offset().left;
var linksJQ = $("a");
var linkWidth = linksJQ.eq(0).outerWidth();
var requestId;

$.ajax({
    url: "/links.json",
    method: "GET",
    success: function (textData) {
        var myUrls = "";
        for (var i = 0; i < textData.length; i++) {
            //console.log("url avaiable", textData[i].url); //this is going to log the value of urls in response
            var text = textData[i].text;
            var url = textData[i].url;
            myUrls += "<a href=" + url + ">" + " " + text + "</a>";
            //console.log("these are my urls", myUrls);
        }

        $("#headlines").html(myUrls);
    },
    error: function (err) {
        console.log("err in ajax", err);
    },
});

function moveHeadlines() {
    leftJQ--;
    if (leftJQ < -$("a").eq(0).outerWidth()) {
        leftJQ += $("a").eq(0).outerWidth();
        //headlinesJQ.appendChild(linksJQ.eq(0));
        $("a").eq(0).appendTo(headlinesJQ);
        linksJQ = $("a");
        linkWidth = $("a").eq(0).outerWidth();
    }
    headlinesJQ.css({
        left: leftJQ + "px",
    });
    requestId = requestAnimationFrame(moveHeadlines);
}
moveHeadlines();

$("#headlines").on("mouseenter", function (e) {
    //console.log("im listening!");
    $(e.target).css({
        color: "blue",
        textDecoration: "underline",
    });

    cancelAnimationFrame(requestId);
});

$("#headlines").on("mouseleave", function (e) {
    //linksJQ.eq(i).on("mouseleave", function (e) {
    $(e.target).css({
        color: "black",
        textDecoration: "none",
    });

    requestId = requestAnimationFrame(moveHeadlines);
});
//for (var i = 0; i < $("a").length; i++) {
//}

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

//vanilla JS
/*links[i].addEventListener("mouseleave", function (e) {
        console.log("e.target mouse leave: ", e.target);
        e.target.style.color = "black";
        e.target.style.textDecoration = "none";

        //headlines.style.left = left + "px";
        requestId = requestAnimationFrame(moveHeadlines);
    });*/
