/* Write a function that expects a string representing a selector to be 
 passed as a parameter. 

The function should find all the elements in the document that match the
selector and change their style so that the text they contain is italic, 
underlined, and bold.*/
function changeStyle(str) {
    var arr = document.querySelectorAll(str);
    console.log(arr);
    for (var i = 0; i < arr.length; i++) {
        arr[i].style.fontStyle = "italic";
        arr[i].style.textDecoration = "underline";
        arr[i].style.fontWeight = "bold";
    }
}
changeStyle(".scottish-text");

/* Write a function that expects a string representing a class name to be
 passed as a parameter.
 The function should return an array containing all the elements in the 
 document that have the class that was passed in. */

function whichClass(str) {
    var newClass = document.querySelectorAll(str);
    return newClass;
}
whichClass(".scottish-text");

/* Write a function that inserts an element into the body of the currently 
 loaded page.
 That element should have fixed position, z-index of 2147483647, left of 20px, 
 top of 100px, font-size of 200px, and contain the text 'AWESOME'.*/
