(function () {
    //console.log("i'm sane", $);
    var topDogJQ = $(".top");
    //console.log(topDogJQ);
    var sliderJQ = $(".slider");
    //console.log(sliderJQ);
    var mousePosition;
    var mouseMove;

    $(".slider").mousedown(function (e) {
        mouseMove = true;
        e.preventDefault();

        console.log("yes, this works!", mouseMove);
    });

    $(".slider").mouseup(function () {
        mouseMove = false;
        removeEventListener("mousemove", document);
    });

    $(".container").mousemove(function (e) {
        if (mouseMove == false) return;
        if (mouseMove == true) console.log("is this my problem", mouseMove);
        e.preventDefault();
        var x = e.clientX;
        var width = $(".slider").width();
        console.log(width);

        var sliderMove = x - width / 2 + "px";
        var sliderStop;

        $(".slider").css({
            left: sliderMove,
        });
        topDogJQ.css({
            width: sliderMove,
        });
    });

    /*sliderJQ.on("mousedown", function sliding() {
        console.log("clicked on slider!");
        mouseMove = "true";
    });*/

    sliderJQ.on("mousemove", function moving(e) {
        //mouseMove = false;
        //console.log("im moving");
        e.preventDefault();
    });

    /*$("#target").mousemove(function (event) {
        var msg = "Handler for .mousemove() called at ";
        msg += event.pageX + ", " + event.pageY;
        $("#log").append("<div>" + msg + "</div>");
    });*/
})();

/*$(document).ready(function () {
        $(".topDog").hide();
        $(".slider").show();

        $(".slider").click(function () {
            $(".topdog").slideToggle();
        });
    });*/
