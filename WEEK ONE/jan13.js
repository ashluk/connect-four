/* Write a constructor called Rectangle that accepts two numbers (width and height) as parameters. 
Rectangle instances should have a method called getArea that returns the instance's width multiplied by its height. 

Write another constructor called Square that accepts one number (which will serve as both width and the height)
as a parameter. 

Instances of Square should also have a getArea method but you should not rewrite the getArea function you wrote 
for Rectangle. Square instances should use the same getArea method that Rectangle instances do. */

function Rectangle(w, h) {
    this.width = w;
    this.height = h;
    this.getArea = function (w, h) {
        if (w && h) {
            console.log(w * h);
        } else if (w && !h) {
            console.log(w * w);
        }
    };
}

var Square = new Rectangle();

/* Write a function called invertCase that expects a string as a parameter. 

This function should return a new string with all the same characters as the string that was passed in but with the
cases of the alphabetic characters switched. 

Uppercase characters should become lowercase and lowercase letters should become uppercase. 

Characters that are not alphabetic should not change. The toUpperCase and toLowerCase methods that all strings have 
will come in handy here. */

function invertCase(string) {
    var newString = "";
    for (var i in string) {
        if (string[i] === string[i].toLowerCase()) {
            newString = newString + string[i].toUpperCase();
        } else if (string[i] === string[i].toUpperCase()) {
            newString = newString + string[i].toLowerCase();
        }
    }
    console.log(newString);
}

invertCase("ABdd2C");
