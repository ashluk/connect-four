/*
EXERCISE 1
Write a function that takes an array as an argument and returns a new array containing all of the items that are in the array that was passed in but in reverse order. This function should
leave the original array unchanged
contain no loops of any kind. That includes for, for...in, for...of, while, and do...while
not call slice or any other method on the original array
not call push or concat on any array in any way*/
const arr = [10, 20, 30];
const func = (arg) => {
    const newArr = [...arg];
    newArr.reverse();
    console.log("newArr", newArr);
    console.log("arr", arr);
    return newArr;
};
func(arr);

/*EXERCISE 2
Write a function that takes two arrays as arguments and returns a new array containing all of the items in the two arrays passed to it. This function should

leave the original arrays unchanged

contain no loops of any kind. That includes for, for...in, for...of, while, or do...while

not call slice or any other method on the two arrays passed to it

not call push or concat on any array in any way*/

const func2 = (arg1, arg2) => {
    let newBreeds = [...arg1, ...arg2];
    console.log("dogs & cats", newBreeds);
    console.log("dogs", dogs);
    console.log("cats", cats);

    return newBreeds;
};
let dogs = ["boxer", "staffy", "galgo"];
let cats = ["siamese", "manx", "bengal"];
func2(dogs, cats);

/*EXERCISE 3
Rewrite the following function to use destructuring assignment for the three variables it creates:
The three CONST lines should be replaced with a single line.*/

/*function logInfo(city) {
    const name = city.name;
    const country = city.country;
    const numPeople = city.population;

    console.log(`${name} is in ${country} and has ${numPeople} in it.`);
}*/
//const newCity = [name,country,numPeople];
//const ['toronto', 'canada',]

const logInfo = (city) => {
    //console.log("city", city);

    const { name, country, population } = city;

    console.log(`${name} is in ${country} and has ${population} in it.`);
};
logInfo({ name: "Toronto", country: "Canada", population: 1000000 });
/*EXERCISE 4
Pretend that it is 2002 and rewrite the following hipster Javascript so it will work in Internet Explorer 5 and Netscape 4.
/*let getNameAndCountry = ({ name, country }) => [name, country];
console.log("what am i", name);

let getRelocatedCity = (city1, city2 = { country: "Germany" }) => {
    let [, country] = getNameAndCountry(city2);

    console.log("getRelocated", getNameAndCountry(city2));

    return {
        ...city1,
        country,
    };
};*/

var newNameAndCountry = {
    city: "",
    country: "Germany",
};

function newRelocatedCity(city1, city2) {
    newNameAndCountry.city[0] = city1;
    newNameAndCountry.city[1] = city2;
    console.log("what city name?", city2);
    return;
}
newRelocatedCity("berlin", "hamburg");
