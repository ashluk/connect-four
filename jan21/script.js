console.log("sanity check", $);
//var board = document.getElementById("game-board");
// console.log("board:", board);
var boardJQ = $("#game-board"); //this is how to select an element by ID with JQ
//console.log(boardJQ);
//var animals = document.getElementsByClassName("animal");
var animalsJQ = $(".animal"); //selecting element by class name with JQ
//  animalsJQ.append(); //this is to remove first element and add to the end in JQ
var animalsLeft = [0, 0, 0, 0]; //this is not changed as it has nothing to do with manipulating the DOM

function getRandomNumber(num) {
    return Math.floor(Math.random() * num);
} //this also is left untouched

//vanilla JS event listener -- we need to chain this onto an element that we have selected out of the DOM tree using JQ
/*board.addEventListener("click", function () {
    for (var i = 0; i < animalsLeft.length; i++) {
        animalsLeft[i] += getRandomNumber(21);
        animals[i].style.left = animalsLeft[i] + "px";
    }
});*/

//JQ event listener
boardJQ.on("click", function () {
    console.log("clicked on board"); //just to check if JQ is listening
    for (var i = 0; i < animalsLeft.length; i++) {
        animalsLeft[i] += getRandomNumber(21);
        //animals[i].style.left = animalsLeft[i] + "px"; //we need to select this the JQ way
        //console.log(animals.JQ.eq(i));
        animalsJQ.eq(i).css({
            left: animalsLeft[i] + "px",
            "font-size": 10 + "px",
        });
    }
});

console.log("first animalsJQ selected index vanilla JS:", animalsJQ[0]);
// traversing to another element and ensuring that you can user jQuery methods on them
console.log("first animalsJQ selected index with jQmethod:", animalsJQ.eq(0));

//vanilla JS boost button event listener
/*document.getElementById("boost-button").addEventListener("click", function (e) {
    console.log("clicked on boost button!");
    e.stopPropagation();

    animalsLeft[0] += 20;
    animals[0].style.left = animalsLeft[0] + "px";
});*/

//JQ event listener
// this is a bit more step by step ;), declare a var first, assign it's value to the element in the DOM tree, then string on the method to add the event listener:
// var boostButton = $('#boost-button');
// boostButton.on(...)
//the $ is essentially a function. we are just invoking that function whenever we call it like this.

$("#boost-button").on("click", function boostTurtle(e) {
    //<---we name the button boostTurtle so we can access it later to turn it off
    console.log("JQ click on boost button");
    e.stopPropagation();
    animalsLeft[0] += 20;
    //animals[0].style.left = animalsLeft[0] + "px";  //this is the code we need to copy in JQ format
    animalsJQ
        .eq(0)
        .css({
            left: animalsLeft[0] + "px",
        })
        // .hide(1000)
        // .show(1000);
        .fadeOut()
        .fadeIn();

    //jQuery gives us animations out of the box using a bunch of useful methods
    // toggle hides and shows elements depending on their state of being when triggered
    // animalsJQ.eq(0).toggle();animalsJQ.eq(0).toggle;

    // update content of an element with jQuery:
    $("#boost-button").html('<span id="boost-button"> Boost used :( </span>');
    //removing the functionality of the boost by turning off event listener
    $(e.target).off("click", boostTurtle);
});
// you can refactor this event listener for additional practice if you want ;)...
/*document.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 82) {
        var r = getRandomNumber(256);
        var g = getRandomNumber(256);
        var b = getRandomNumber(256);
        var randomColor = "rgb(" + r + "," + g + "," + b + ")";
        console.log(randomColor);
        board.style.backgroundColor = randomColor;
        for (var i = 0; i < animalsLeft.length; i++) {
            animalsLeft[i] += getRandomNumber(21);
            animals[i].style.left = animalsLeft[i] + "px";
        }
    }
});*/

// utlising jQuery methods like .css(), .fadeIn() , .on... they can only be used on sth that is already a jQuery object!

// SOME ADDTIONAL NOTES ON THE EXERCISES:
// vanilla js
// var headlines = document.getElementById('headlines');
// jQuery equivalent
var headlinesJQ = $("#headlines");
// vanilla JS
// var left = headlines.offsetLeft;
// jQuery equivalent
var leftJQ = headlinesJQ.offset().left;
// vanilla JS -> this generates a HTML collection
var links = headlines.getElementsByTagName("A");
// selecting elements by tag name with jQuery does not generate an auto updating HTML collection
var linksJQ = $("a");
