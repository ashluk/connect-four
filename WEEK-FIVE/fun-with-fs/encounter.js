const fs = require("fs"); //first we need to require fs
//const items = fs.readdirSync(_dirname); //dirname is the full name to the location on your desktop
//this will give you back an array containing the names of all the stuff in that folder
const items = fs.readdirSync(__dirname, { withFileTypes: true }); //this returns us an object
//this object has methods which tell us the file type and name
//lets loop through the object
items.forEach((item) =>
    console.log(item.name, item.isDirectory(), item.isFile())
);

console.log(items);

console.log("done");

////ASYNCHRONOUS VERSION
//no point in storing int the const items variable b/c it would return undefined
//const items =
fs.readdirSync(__dirname, { withFileTypes: true }, function (err, items) {
    if (err) {
        console.log("error");
        setTimeOut(())=> console.log('error'), 
    } else {
        items.forEach((item) =>
            console.log(item.name, item.isDirectory(), item.isFile())
        );
        console.log("done");
    }
});
//console.log("done"); //if we want this to be correct and happen after all the file system stuff has been done we need to move this into the callback


////STAT example
const stats = fs.statSync(__filename); //this should return us the path to the file we passed to it
console.log(stats);
//this will return an object with info about the file.
//the SIZE item will be important to us

//ASYNCH STAT
fs.stat(__filename, function (err, stats) {
    if (err) {
        console.log(err, "oops");
    } else {
        console.log(stats.stats.isFile());
        console.log("done");
    }
});

//WRITE FILE

fs.writeFileSync("funkychicken.txt", "hiii!");
//this will create a file with the name funkychicken containing the text hii

fs.writeFile("funkychicken2.md", "hiiii1", function (err, file) {
    if (err) {
        console.log(err, "error");
    } else {
        console.log(file);
        console.log("done");
    }
});
