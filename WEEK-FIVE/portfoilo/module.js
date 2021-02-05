const fs = require("fs");

module.exports.projectOverviewList = function (path) {
    console.log("function in another module running");
    const files = fs.readdirSync(path, { withFileTypes: true });
    const htmlString = ` <!doctype html>
<html>
<title>Portfolio</title>
<a href = ${files.url}>${files.name}</a>
</html>`;
    files.forEach((file) => {
        console.log("these are the files", path + "/" + file.name);
    });
    console.log;
    return htmlString;
};

//we want to generate html overview list of all projects
//read the content of our projects directory
//use readdirSync for this
//createHTML string, loop through list of directories that are contained in the project folder
//for each project that gets returned from readdirSync, we want to add a link to the respective project
//make a function that returns a complete html string
