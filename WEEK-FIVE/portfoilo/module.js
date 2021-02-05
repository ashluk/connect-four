const fs = require("fs");

module.exports.projectOverviewList = function (path) {
    //console.log("function in another module running");
    const files = fs.readdirSync(path, { withFileTypes: true });
    const htmlString = "";
    files.forEach((file) => {
        const string = "<a href = /" + file.name + "/>" + file.name + "</a>";

        /*console.log(
            "this is my string",
            "<a href = /" + file.name + "/>" + file.name + "</a>"
        );*/
    });
    //console.log("my string", htmlString);
    return htmlString;
};

//we want to generate html overview list of all projects
//read the content of our projects directory
//use readdirSync for this
//createHTML string, loop through list of directories that are contained in the project folder
//for each project that gets returned from readdirSync, we want to add a link to the respective project
//make a function that returns a complete html string
/*<!doctype html>
<html>
<title>Portfolio</title>
<a href = /undefined/>undefined</a>
</html>*/
