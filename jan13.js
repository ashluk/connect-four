/* Write a constructor called Rectangle that accepts two numbers (width and height) as parameters. 
Rectangle instances should have a method called getArea that returns the instance's width multiplied by its height. 

Write another constructor called Square that accepts one number (which will serve as both width and the height)
as a parameter. 

Instances of Square should also have a getArea method but you should not rewrite the getArea function you wrote 
for Rectangle. Square instances should use the same getArea method that Rectangle instances do. */

function Object(name, w, h) {
    this.name = name;
    this.width = w;
    this.height = h;
    this.getArea = function () {
        return w * h;
    };
}
/*function Rectangle(w, h) {
    this.width = w;
    this.height = h;
    this.getArea = function () {
        return (this.width * this.height);
    };
}

function Square(n) {
    this.width = n;
    this.height = n;
}*/

var p1 = new Object("Rectangle", 5, 6);
var p2 = new Object("Square", 5);

console.log(p1);
console.log(p2);

/* Write a function called invertCase that expects a string as a parameter. 

This function should return a new string with all the same characters as the string that was passed in but with the
cases of the alphabetic characters switched. 

Uppercase characters should become lowercase and lowercase letters should become uppercase. 

Characters that are not alphabetic should not change. The toUpperCase and toLowerCase methods that all strings have 
will come in handy here. */
