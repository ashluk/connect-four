const fs = require("fs");

const sizeMap = mapSizes(__dirname + "/files");
fs.writeFileSync("files.json", JSON.stringify(sizeMap, null, 4));

function mapSizes(path) {
    const items = fs.readdirSync(path, { withFileTypes: true });
    const actualObj = {};
    items.forEach((item) => {
        if (item.isFile() === true) {
            //const size = fs.statSync(path + "/" + item.name);
            const newSize = getSize(path + "/" + item.name);
            actualObj[item.name] = newSize;

            //actualObj.value = newSize;
            //console.log("my object", actualObj);
        } else {
            //console.log("directory name", item.name);
            //console.log("directory name", item.name);
            const directory = mapSizes(path + "/" + item.name);
            actualObj[item.name] = directory;
        }
    });
    console.log(actualObj);
    return actualObj;
}

function getSize(name) {
    var stats = fs.statSync(name);
    var fileSize = stats.size;
    return fileSize;
}

//const stats = fs.statSync(__filename);
//console.log("this is the size", stats.size);
