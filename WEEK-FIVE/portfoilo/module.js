const fs = require("fs");

module.exports.projectOverviewList = function (path) {
    //console.log("function in another module running");
    const files = fs.readdirSync(path, { withFileTypes: true });
    var htmlString = "";
    //files.forEach(() => {

    for (var i = 1; i < files.length; i++) {
        htmlString +=
            " <a href = /" + files[i].name + "/>" + files[i].name + "</a>";
    }

    //console.log("htmlString", htmlString);
    //console.log("NewString", newString);

    return htmlString;
    //});
};

//we want to generate html overview list of all projects
//read the content of our projects directory
//use readdirSync for this
//createHTML string, loop through list of directories that are contained in the project folder
//for each project that gets returned from readdirSync, we want to add a link to the respective project
//make a function that returns a complete html string
/*<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="styles.css" />
        <title>Connect Four</title>
    </head>
    <body>
    ${}
    </body>
</html>*/
