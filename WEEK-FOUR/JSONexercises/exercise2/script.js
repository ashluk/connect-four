console.log("hiii", $);

/*try {
    function translateNumberToGerman() {
        askForNumber();
        //console.log("entered", askForNumber());
    }
    translateNumberToGerman();
} catch (err) {
    var num = prompt("Please enter a number between 1 and 10");
    console.log('entered:', num);
}*/

function translateNumberToGerman() {
    try {
        askForNumber();
        console.log("number is;", askForNumber());
    } catch (error) {
        askForNumber();
        //console.log("this is the:", number);
    }
}
translateNumberToGerman();

//console.log("german:", translateNumberToGerman);

function askForNumber() {
    var num = prompt("Please enter a number between 1 and 10");
    if (num >= 1 && num <= 10 && num == parseInt(num)) {
        return num;
    }
    throw new Error("Bad number");
}
