(function () {
    console.log("i'm sane", $);
    var topDogJQ = $(".top");
    //console.log(topDogJQ);
    var sliderJQ = $(".slider");
    //console.log(sliderJQ);
    var mousePosition;

    sliderJQ
        .on("mousedown", function sliding(e) {
            console.log("clicked on slider!");
            //$(e.currentTarget).off("mouseup", fn);
        })
        .on("mousemove", function moving(e) {
            console.log("im moving");

            e.preventDefault();
            mousePosition = {
                x: e.clientX,
            };
            sliderJQ.style.left = mousePosition.x;
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
