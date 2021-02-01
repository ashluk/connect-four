//EXERCISE 1
function* fizzIterator(start = 0, end = 100, step = 1) {
    let Count = 0;
    for (let i = start; i < end; i += step) {
        Count++;

        yield i;
    }
    return Count;
}
const it = fizzIterator();

for (const num of it) {
    if (num % 3 == 0) {
        if (num % 5 == 0) {
            console.log("fizzbuzz");
        } else {
            console.log("fizz");
        }
    } else {
        if (num % 5 == 0) {
            console.log("buzz");
        } else {
            console.log(num);
        }
    }
    //console.log("what is the value", num);
}

/*EXERCISE 2
Write a generator function that expects to be passed an array of values. 
When next is called on the iterator object that this function returns, 
The values in the array should be yielded in reverse order. 
The array that is passed to the generator function should stay in its
 original order*/

//couldnt get this one working

function* genArray() {
    yield 1;
    yield 2;
    yield 3;
}

const myArray = genArray();
console.log("genArray", genArray);
let aReverse = myArray.next().value;
aReverse = myArray.next().value;
aReverse = myArray.next().value;
console.log("what do we have in", aReverse);
