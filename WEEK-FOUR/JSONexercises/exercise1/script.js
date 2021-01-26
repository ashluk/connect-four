var inputField = $("input");

//1.make button click event
$("button").on("click", function () {
    var userInput = inputField.val();
    var jsonObj = JSON.parse(userInput);

    console.log("input:", jsonObj);

    try {
        JSON.parse({ name: "ash" });
    } catch (error) {
        console.log("error: ", error);
    }
});
//2. listen to user input

/*inputField.on("input", function () {
    var userInput = inputField.val();
    var jsonObj = JSON.parse(userInput);

    */

//3.try catch for if userinput is not JSON

//4.create popup

// TEST JSON      {"result":true, "count":42}
