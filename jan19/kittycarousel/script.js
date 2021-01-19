(function () {
    //console.log("hi");
    var kitties = document.querySelectorAll("#kitties img");
    var currentKitty = 0; //this gives us a variable that we can use to change which kitty is being affected

    console.log(kitties); //this should hopefully bring up an array like item (node list) with 4 images

    function moveKitties() {
        //console.log("i am going to move the kitties", kitties.length);

        kitties[currentKitty].classList.remove("onscreen"); //this removes the first kitty
        kitties[currentKitty].classList.add("exit"); //this applys the transition properties for the exit
        currentKitty++;
        if (currentKitty === kitties.length) {
            currentKitty = 0;
        }
        kitties[currentKitty].classList.add("onscreen"); //this applies the transition to the next cat

        setTimeout(moveKitties, 5000); //we have a transition duration of 3s, so we choose 5s for the settime out so that one kitty is all the way off before the next comes on
    }

    setTimeout(moveKitties, 1000); //this waits 1000ms and then calls the functon Movekitties

    document.addEventListener("transitionend", function (e) {
        console.log("transition ended...", e.target.classList);
        e.target.classList.remove("exit"); //this keeps track of when the items transition ends. we need to figure out which element we want to remove the exit class from.
    }); //we want an if statement here that checks if the element has a exit class on it, if it does we want to remove the exit class from the element.
})();

//we want to remove the class exit as well.
//we need to figure out how to know when the image is fully offscreen using an event.listenere
// line 14ish -- this breaks down here so we need to reset the value of currentKitty back to 0. IF STATEMENT HERE. if currentKitty has reached the length of kitties it needs to go back to 0.
