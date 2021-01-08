var i = "hello";

function logType() {
    if (typeof i === "number") {
        console.log("number!");
    } else if (typeof i === "string") {
        console.log("string!");
    } else if (typeof i === "undefined") {
        console.log("undefined!");
    } else if (typeof i === "boolean") {
        console.log("boolean!");
    } else if (typeof i === "bigint") {
        console.log("bigint!");
    } else if (typeof i === "object") {
        console.log("object!");
    } else if (typeof i !== i) {
        console.log("not a number!");
    } else if (typeof i === "array") {
        console.log("array!");
    } else if (typeof i === "null") {
        console.log("null!");
    } else if (typeof i === "symbol") {
        console.log("i have no idea!");
    }
}
logType();

var a = {
    Berlin: "Germany",
    Paris: "France",
    "New York": "USA",
};
var b = {
    Germany: "Berlin",
    France: "Paris",
    USA: "New York",
};

for (var Berlin in a) {
    console.log(Berlin);
}

var myArray = [];
for (var c = 10; c > 0; c--) {
    myArray.push(c);
}
console.log(myArray);
