const fs = require("fs");
//const { pathToFileURL } = require("url");
//const items = fs.readdirSync(__dirname, { withFileTypes: true });

logSizes(__dirname + "/files"); //this is the path to the file folder, we are passing it to log sizes

function logSizes(path) {
    fs.readdir(path, { withFileTypes: true }, function (err, items) {
        if (err) {
            console.log("error!");
        } else {
            console.log("items", items);
            items.forEach((item) =>
                console.log(
                    "second console log",
                    item.name,
                    item.isDirectory(),
                    item.isFile()
                )
            );
            if (items.isFile === true) {
                fs.statSync();
            }
            //logSizes(path);
        }
    });
}
//const stats = fs.statSync(__filename);
//console.log("these are the stats", stats);

fs.stat(__filename, function (err, stats) {
    if (err) {
        console.log(err, "oops");
    } else {
        console.log("these are stats", stats.stats.isFile());
    }
});
//loop through the arry this returns and check to see if each item returned is a file or folder
//if it is a file, log the name of the file and the size
//if it a file we need to call stat(remember this is going to be asynchronous) -- when the call is complete we will now know the name of the file and the size
//then we should log both the name of the file and the size for each file.
//if it is a folder we need to read it
//logsizes needs to first read the directory from that path

//for every file we will be calling stat
//for every folder we have to call logsizes and pass it the path to that folder

//the path we have to pass is the full directory name '/place/name'
//we are going through the entire folder structure recursively

//we will be looping through the items and calling log sizes on all the folders and stat on all the items
//they will not always happen in the order in which we made the calls--thats OK
