var canvas = document.getElementById("innerCanvas");
var outerCanvas = document.getElementById("outerCanvas");
var ctx = canvas.getContext("2d");
var ctx2 = outerCanvas.getContext("2d");
var image = document.getElementById("innerCanvas");

ctx.beginPath();
ctx.arc(225, 100, 70, 0, Math.PI * 2);
ctx.lineWidth = 7;
ctx.strokeStyle = "#39FF14";
ctx.fillStyle = "black";
ctx.fill();
ctx.stroke();

ctx.strokeStyle = "black";

ctx.beginPath();
ctx.lineTo(225, 170);
ctx.lineTo(225, 400);
ctx.stroke();

ctx.beginPath();
ctx.lineTo(100, 160);
ctx.lineTo(225, 300);
ctx.lineTo(350, 160);

ctx.stroke();

ctx.beginPath();
ctx.fillStyle = "hotpink";
ctx.fillRect(85, 150, 40, 30);
ctx.fillRect(320, 150, 40, 30);

ctx.beginPath();
ctx.strokeStyle = "#C724B1";
ctx.lineWidth = 50;
ctx.lineTo(320, 150);
ctx.lineTo(330, 175);

ctx.beginPath();
ctx.lineTo(100, 550);
ctx.lineTo(225, 400);
ctx.lineTo(350, 550);

ctx.stroke();

ctx.beginPath();
ctx.fillStyle = "red";
ctx.fillRect(45, 530, 80, 40);
ctx.fillRect(320, 530, 80, 40);

ctx.beginPath();
ctx.lineTo(170, 90);
ctx.lineTo(280, 90);
ctx.lineWidth = 10;
ctx.strokeStyle = "#39FF14";
ctx.stroke();

ctx.beginPath();
ctx.lineTo(190, 110);
ctx.lineTo(190, 70);
ctx.lineWidth = 6;

ctx.stroke();

ctx.beginPath();

ctx.lineTo(260, 110);
ctx.lineTo(260, 70);
ctx.lineWidth = 6;

ctx.stroke();

ctx.beginPath();
ctx.arc(225, 140, 15, 0, Math.PI * 2);
ctx.fillStyle = "#39FF14";
ctx.fill();
ctx.stroke();

ctx2.drawImage(image, 30, 30, canvas.width, canvas.height);

function moveStick(event) {
    var key = event.key;
    console.log("i am reading this");

    //ctx2.drawImage(image, 225, 100, canvas.width, canvas.height);
    //ctx.clearRect(0, 0, 500, 700);
    // ctx.beginPath();
    switch (key) {
        case "ArrowLeft":
            ctx2.clearRect(0, 0, 500, 1000);
            ctx2.beginPath();
            ctx2.drawImage(image, -20, 50, canvas.width, canvas.height);
            break;
        case "ArrowRight":
            ctx2.clearRect(0, 0, 500, 1000);
            ctx2.beginPath();
            ctx2.drawImage(image, 100, 50, canvas.width, canvas.height);
            break;
        case "ArrowUp":
            ctx2.clearRect(0, 0, 500, 1000);
            ctx2.beginPath();
            ctx2.drawImage(image, 0, 0, canvas.width, canvas.height);
            break;
        case "ArrowDown":
            ctx2.clearRect(0, 0, 500, 1000);
            ctx2.beginPath();
            ctx2.drawImage(image, 0, 80, canvas.width, canvas.height);
            break;
    }
}

document.addEventListener("keydown", moveStick);
