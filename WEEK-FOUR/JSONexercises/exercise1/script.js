var inputField = $("input");
var validContainer = $(".json");

$("button").on("click", function () {
    var userInput = inputField.val();
    //var jsonObj = JSON.parse(userInput);

    var validOrNo = "";

    try {
        JSON.parse(userInput);
        validOrNo += "<p class= 'json'>" + "VALID" + "</p>";
    } catch (error) {
        console.log("error: ", error);
        validOrNo += "<p class= 'json'>" + "INVALID" + "</p>";
    }
    validContainer.html(validOrNo);

    if (validContainer.text() !== "VALID") {
        console.log("INVALID");
    }
});
// TEST JSON --- {"result":true, "count":42}
