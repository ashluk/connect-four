(function () {
    var kitties = document.querySelectorAll("#kitties img");
    var currentKitty = 0; //this gives us a variable that we can use to change which kitty is being affected
    var dots = document.getElementsByClassName("dot");
    var timer = setTimeout(moveKitties, 1000);

    for (var i = 0; i < dots.length; i++) {
        //this loop runs till the end of dots.length increasing the value of i for each dot
        (function (i) {
            //this function takes the argument of [i] and listens to see which dot has been clicked
            dots[i].addEventListener("click", function (e) {
                if (e.target.classList.contains("on")) {
                    //this tells us if the [i] is the currently displayed kitty by checking if the class list is on
                    return; //this tells it to do nothing if the class list is on
                }
                //if (transitionInProgress) {
                //  return;
                //}
                if (e.target[0]) {
                    clearTimeout(timer);

                    currentKitty = 0;
                }
                if (e.target[1]) {
                    currentKitty = 1;
                    clearTimeout(timer);
                }
            });
        })(i);
    }

    function moveKitties(dotKitty) {
        if (dotKitty === i) {
            currentKitty = [i];
        } else {
            dots[currentKitty].classList.remove("on");
            kitties[currentKitty].classList.remove("onscreen"); //this removes the first kitty
            kitties[currentKitty].classList.add("exit"); //this applys the transition properties for the exit
            currentKitty++;
            if (currentKitty === kitties.length) {
                currentKitty = 0;
            }

            dots[currentKitty].classList.add("on");

            kitties[currentKitty].classList.add("onscreen"); //this applies the transition to the next cat

            setTimeout(moveKitties, 5000); //we have a transition duration of 3s, so we choose 5s for the settime out so that one kitty is all the way off before the next comes on
        }
    }

    setTimeout(moveKitties, 1000); //this waits 1000ms and then calls the functon Movekitties

    document.addEventListener("transitionrun", function (e) {
        console.log("transition running...", e.target.classList);
    });

    document.addEventListener("transitionend", function (e) {
        //console.log("transition ended...", e.target.classList); //this keeps track of when the items transition ends. we need to figure out which element we want to remove the exit class from.
        e.target.classList.remove("exit");
    });
})();

//we want to remove the class exit as well.
//we need to figure out how to know when the image is fully offscreen using an event.listenere
// line 14ish -- this breaks down here so we need to reset the value of currentKitty back to 0. IF STATEMENT HERE. if currentKitty has reached the length of kitties it needs to go back to 0.
