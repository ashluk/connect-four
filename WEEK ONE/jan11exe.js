/*Write a function that takes any number of numbers as arguments and 
returns the sum of those numbers.*/

function sumOf() {
    var sumOf = 0;
    for (var i = 0; i < arguments.length; i++) {
        sumOf += arguments[i];
    }
    return sumOf;
}

var answer = sumOf(1, 8, 9);

console.log(answer);

/*Write a function that takes another function as an argument. 
It should wait 1.5 seconds and then run the function that was passed in.*/

setTimeout(function () {
    console.log("excecute now!");
}, 1500);

/*Write a function that expects a number as an argument. DONE

 If the value that is passed in is less than 0, equal to 0, or not a number, the function 
 should return the string 'ERROR'. 

 If the number that is passed in is greater than or equal to 1000000 
 it should simply return the number. 

 Otherwise it should multiply the number by 10 however many times it takes
 to get a number that is greater than or equal to 1000000 and return that.*/

function millionaire(number) {
    if (number <= 0) {
        console.log("ERROR");
    } else if (number >= 1000000) {
        console.log(number);
    } else if (number === 1000000) {
        return;
    } else {
        millionaire(number * 10);
    }
}

millionaire(5000000);
