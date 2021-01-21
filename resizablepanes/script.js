(function () {
    console.log("i'm sane", $);
    var topDogJQ = $(".top");
    //console.log(topDogJQ);
    var sliderJQ = $(".slider");
    //console.log(sliderJQ);
    var mousePosition;
    var mouseMove;

    $(".slider").mousedown(function () {
        mouseMove = true;
        console.log("yes, this works!", mouseMove);
    });

    $(document).mouseup(function () {
        mouseMove = false;
    });

    $(".top").mousemove(function (e) {
        if (mouseMove == false) return;

        e.preventDefault();
        var x = e.clientX;
        var width = $(".slider").width;
        $(".slider").css({
            left: x - width / 2 + "px",
        });

        /* topDogJQ.eq().css({
            width: 10 + "px",
        });*/
    });

    sliderJQ.on("mousedown", function sliding() {
        console.log("clicked on slider!");
        mouseMove = "true";
    });

    sliderJQ.on("mousemove", function moving(e) {
        console.log("im moving");
        e.preventDefault();
        mousePosition = {
            x: e.clientX,
        };
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
