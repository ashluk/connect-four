(function () {
    var kitties = document.querySelectorAll("#kitties img");
    var currentKitty = 0; //this gives us a variable that we can use to change which kitty is being affected
    var dots = document.getElementsByClassName("dot");
    var timer = setTimeout(moveKitties, 1000);

    var transitionIsRunning;

    for (var i = 0; i < dots.length; i++) {
        //this loop runs till the end of dots.length increasing the value of i for each dot
        (function (i) {
            //this function takes the argument of (i) and listens to see which dot has been clicked
            dots[i].addEventListener("click", function (e) {
                if (e.target.classList.contains("on")) {
                    //this tells us if the [i] is the currently displayed kitty by checking if the class list is on
                    return; //this tells it to do nothing if the class list is on
                }

                console.log(i);
                //if (i === 0) {
                //  moveKitties(0);
                //kitties[currentKitty].classList.add("noAnimationEnter");
                //kitties[currentKitty].classList.add("noAnimationExit");
                clearTimeout(timer);
                moveKitties(i);
                // }
            });
        })(i);
    }

    document.addEventListener("transitionend", function (e) {
        e.target.classList.remove("exit");
        return (transitionIsRunning = "false");
    });
    kitties.addEventListener("transitionrun", function (e) {
        if (e.target.classList.contains("onscreen")) {
            return (transitionIsRunning = "true");
        }
    });

    function moveKitties(arg) {
        //if arg is not undefined then lines 33-36 should not happen. instead set currentKitty to arg.
        dots[currentKitty].classList.remove("on");
        kitties[currentKitty].classList.remove("onscreen"); //this removes the first kitty
        kitties[currentKitty].classList.add("exit"); //this applys the transition properties for the exit
        if (transitionIsRunning === "true") {
            clearTimeout(timer);
            moveKitties();
        }
        if (arg === 0) {
            currentKitty = 0;
        }
        if (arg) {
            currentKitty = arg;
        }
        if (arg === undefined) {
            currentKitty++;
            if (currentKitty === kitties.length) {
                currentKitty = 0;
            }
        }

        dots[currentKitty].classList.add("on");

        kitties[currentKitty].classList.add("onscreen"); //this applies the transition to the next cat

        timer = setTimeout(moveKitties, 5000); //we have a transition duration of 3s, so we choose 5s for the settime out so that one kitty is all the way off before the next comes on
    }

    //setTimeout(moveKitties, 1000); //this waits 1000ms and then calls the functon Movekitties

    //var transitionIsRunning =
    /*document.addEventListener(
        "transitionrun",
        function (e) {
            console.log("transition running...", e.target.classList);
        }
    );*/

    document.addEventListener("transitionend", function (e) {
        //console.log("transition ended...", e.target.classList); //this keeps track of when the items transition ends. we need to figure out which element we want to remove the exit class from.
        e.target.classList.remove("exit");
        return (transitionIsRunning = "false");
    });
    console.log("value of", transitionIsRunning);
})();

//we want to remove the class exit as well.
//we need to figure out how to know when the image is fully offscreen using an event.listenere
// line 14ish -- this breaks down here so we need to reset the value of currentKitty back to 0. IF STATEMENT HERE. if currentKitty has reached the length of kitties it needs to go back to 0.
