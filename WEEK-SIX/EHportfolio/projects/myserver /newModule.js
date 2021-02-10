const fs = require("fs");

module.exports.projectOverviewList = function (path) {
    const files = fs.readdirSync(path, { withFileTypes: true });
    var htmlString = "";

    for (var i = 1; i < files.length; i++) {
        htmlString +=
            " <a href = /" + files[i].name + " />" + files[i].name + "</a>";
    }

    console.log("htmlString", htmlString);

    return htmlString;
};
