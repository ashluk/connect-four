const fs = require("fs");

module.exports.projectOverviewList = function (path) {
    //console.log("function in another module running");
    const files = fs.readdirSync(path, { withFileTypes: true });
    files.forEach(() => {
        var htmlString = "";

        for (var i = 0; i < files.length; i++) {
            //console.log("fdilenames", files[i].name);
            htmlString +=
                " <a href = /" + files[i].name + "/>" + files[i].name + "</a>";
        }
        const newString =
            "<!doctype html><html><title>Portfolio</title>" +
            htmlString +
            "</html>";

        //console.log("htmlString", htmlString);
        //console.log("NewString", newString);

        return newString;
    });
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
