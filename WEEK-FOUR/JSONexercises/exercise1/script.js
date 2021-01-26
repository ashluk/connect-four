var inputField = $("input");

//1.make button click event
$("button").mousedown(function () {});

//2. listen to user input

inputField.on("input", function () {
    var userInput = inputField.val();
    var jsonObj = JSON.parse(userInput);

    console.log("input:", jsonObj);
});

//3.try catch for if userinput is not JSON
try {
    JSON.parse({ name: "ivana" });
} catch (error) {
    console.log("error: ", error);
}
//4.create popup
