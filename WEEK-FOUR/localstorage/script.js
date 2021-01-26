var userInput = $("input");

userInput.on("input", function () {
    var entered = userInput.val();
    localStorage.getItem(entered);
    console.log("i have", localStorage);
    localStorage.setItem("entered", "entered");
});

try {
    localStorage.setItem("inputvalue", "string");
} catch (err) {
    console.log("err in storage", err);
}
