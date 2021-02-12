const { readdir } = require("fs").promises;
//node comes with an already promisified version of readdir and other fs functions
readdir(__dirname).then(console.log)

//using the promise constructor
module.exports = function (n) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            if (NaN(n)) {
                reject(new Error("Bad Number"));
            } else {
                resolve(n * 2);
            }
        }, 2000);
    });
};

//this is how you would rewrite promises in an existing library
function readdirProm(path) {
    return new Promise(function (resolve, reject) {
        readdir(path, function (err, items) {
            if (err) {
                reject(err);
            } else {
                resolve(items);
            }
        });
    });
}
//BUT we dont have to do this, we can just use promisify utility

const { promisify } = require("util");
const readdirProm = promisify(readdir);

//the promise constructor has methods attached to it like resolve and reject which can be useful and a reason for using a promise constructor


//promise.all is the most useful function returned by promises
//promise.all is a function that returns a promise that is resolved when a bunch of other promises are resolved
//we pass it an array of promises, when each and every one of those promises are resolved thats when promise.all returns
const dbl = require('./nameoflocationoffunction');
Promise.all([
    dbl(20),
    dbl(40),
    dbl(50).then(val => dbl.(val)),
    dbl(1500)

]).then(val => {
    console.log(val);
});