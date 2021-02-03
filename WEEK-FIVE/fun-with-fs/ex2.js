const fs = require("fs");

//const sizeMap =
mapSizes(__dirname + "/files");

function mapSizes(path) {
    const items = fs.readdirSync(path, { withFileTypes: true });
    const obj = {};
    const actualObj = Object.create(obj);
    //console.log("items", items);
    items.forEach((item) => {
        if (item.isFile() === true) {
            //console.log("item name", item.name);
            actualObj.item.name = size;
            // Object.defineProperty(actualObj) = item.name;
            const size = fs.statSync(path + "/" + item.name);

            actualObj.value = size;
            console.log("my object", actualObj);
        } else {
            console.log("directory name", item.name);
            mapSizes(path + "/" + item.name);
        }
    });
}

const stats = fs.statSync(__filename);
console.log("this is the size", stats.size);
