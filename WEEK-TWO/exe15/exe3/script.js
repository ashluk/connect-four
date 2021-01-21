/* Make a page that has on it an element that is 100px by 100px in size and has a solid black border. 
When the user mouses down on this box, its background should change to a randomly selected color. 
When the user mouses up on it, its background should change to another randomly selected color.*/

var colorDiv = document.getElementById("colorDiv");

colorDiv.addEventListener("mousedown", function () {
    console.log("mousedown");
    colorDiv.style.backgroundColor = generateRandomColor();
});

colorDiv.addEventListener("mouseup", function () {
    console.log("mouseup");
    colorDiv.style.backgroundColor = generateRandomColor();
});

function generateRandomColor() {
    var hexcolors = "#" + Math.random().toString(16).slice(-6);
    return hexcolors;
}

/*function generateRandomColor() {
    var colors = ["red", "yellow", "magenta", "blue", "cyan"];
    var randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
}*/
