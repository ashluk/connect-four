/* Make a page that has on it an element that is 100px by 100px in size, has absolute positioning, and has a solid background color. 

Add an event handler that makes this box center itself directly under the user's mouse pointer as it is moved across the screen.*/

var movingdiv = document.getElementById("movingdiv");

var mousemoveHandler = function (event) {
    var x = event.clientX;
    var y = event.clientY;
    var width = movingdiv.offsetWidth;
    var height = movingdiv.offsetHeight;
    movingdiv.style.top = y - height / 2 + "px";
    movingdiv.style.left = x - width / 2 + "px";
};

//movingdiv.addEventListener("mousemove", mousemoveHandler);
document.addEventListener("mousemove", mousemoveHandler);
