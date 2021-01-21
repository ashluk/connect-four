/*Make a page that has on it an element that is 200px by 200px in size and has a solid background color. 
Nest within that element another element that is 50px by 50px in size and has a different solid background color. 

When the user clicks on the outer element its background color should change to a randomly selected color. 

However, if the user clicks on the inner element, the inner element's background color should change to a randomly selected background color but the outer element's background color should not change at all.*/

var outerBox = document.getElementById("outerBox");
var innerBox = document.getElementById("innerBox");

var randomColor = function () {
    outerBox.style.backgroundColor = generateRandomColor();
};

outerBox.addEventListener("click", randomColor);

innerBox.addEventListener("click", function (e) {
    innerBox.style.backgroundColor = generateRandomColor();
    e.stopPropagation();
});

function generateRandomColor() {
    var hexcolors = "#" + Math.random().toString(16).slice(-6);
    return hexcolors;
}

/*outerBox.addEventListener("click", function () {
    outerBox.style.backgroundColor = generateRandomColor();
});*/
