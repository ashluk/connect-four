const http = require("http");
const fs = require("fs");
const path = require("path");

const myModule = require("./module.js");
console.log(
    "project list",
    myModule.projectOverviewList(__dirname + "/projects")
);
const newHtml = myModule.newString;
console.log("thsi si", newHtml);
//this is how we call the module from within this file
//const {projectOverviewList} = require('./module'); //this does the same thing
/////////////////////////////////content type is for dynamically setting the header values -- lower in the code
const contentType = {
    ".css": "text/css",
    ".html": "text/html",
    ".js": "text/javascript",
    ".json": "application/json",
    ".gif": "image/gif",
    ".jpg": "image/jpg",
    ".png": "image/png",
    ".svg": "image/svg+xml",
};
//then to access the content type
//contentType[".css"];

////////////////////////////////

http.createServer((req, res) => {
    req.on("error", (err) => console.log("err in req", err));
    res.on("error", (err) => console.log("err in res", err));
    console.log("req.url", req.url);
    if (req.method != "GET") {
        console.log("not a GET request");
        res.statusCode = 405;
        //we are returning when sending the res end response
        return res.end();
    }

    //this will normalize our path - it generates any type of traversal into its actual path
    //to prevent people from trying to hack
    const requestedFilePath = path.normalize(__dirname + "/projects" + req.url);
    //keep intruders out!
    if (!requestedFilePath.startsWith(`${__dirname}/projects/`)) {
        res.statusCode = 403; //forbidden
        //console.log("what we want", `${__dirname}/projects/`);
        console.log("requestedpath", requestedFilePath);
        console.log("what i see", `${__dirname}/projects/`);
        console.log("INTRUDER INCOMING");
        return res.end();
    }

    fs.stat(requestedFilePath, (err, stats) => {
        if (err) {
            console.log(
                "user requested something we dont have in our projects directory"
            );
            res.statusCode = 404; //not found
            return res.end();
        }
        if (stats.isDirectory()) {
            console.log(
                "Content-Type",
                `{contentType[path.extname(requestedFilePath)]}`
            );

            console.log("user requested a directory");
            console.log("filepath to project directory:", requestedFilePath);
            if (req.url.endsWith("/")) {
                const readStreamHtml = fs.createReadStream(
                    requestedFilePath + "index.html"
                );

                res.setHeader("Content-Type", "text/html");
                readStreamHtml.pipe(res);
                readStreamHtml.on("error", (err) => {
                    console.log("err in readstream", err);
                    res.statusCode = 500;
                    return res.end();
                });
            } else {
                res.statusCode = 301;
                res.setHeader("Location", req.url + "/");
                return res.end();

                // we simply want to redirect the user to the req.url, but add a slash to it
                // you did this business of redirecting yesterday with http-request-listners
                // remember to set your headers, send your status code and end your response
            }
        } else {
            //console.log("user requested a file:", requestedFilePath);
            const stream = fs.createReadStream(requestedFilePath);
            // this means we want to stream and pipe the requested file
            // to figure out the correct headers to set
            /*console.log(
                "file ext of requested file is:",
                path.extname(requestedFilePath)
            );*/
            const ext = path.extname(requestedFilePath);
            console.log("ext", ext); //this returns the property name(i.e = .css)

            res.setHeader("Content-Type", contentType[ext]);
            /*console.log(
                "Content-Type",
                contentType[path.extname(requestedFilePath)]
            );*/
            //res.setHeader("Content-Type", "text/css");
            // CAREFUL YOU WANT TO  MAKE THIS DYNAMIC
            stream.pipe(res);
        }
        console.log(
            "file ext of this request is",
            path.extname(requestedFilePath)
        );
    });
}).listen(8080, () => console.log("portfolio server is running!"));

//in order to figure out the correct header to send we need to use path
//we need to know the file extensions for this
//res.setHeader("Content-Type", "text/css");

//part two
//module.js -- check here for notes
//utilise the res.write and res.end to write the html returned by the module

/*//console.log(
    //     "user made it here, this means that they made a legit request that fits our criteria"
    //);
    console.log(__dirname + "/projects/connect4me/catgif.gif");
    //reading the data from the image file
    const stream = fs.createReadStream(
        __dirname + "projects/connect4me/catgif.gif"
    );
    //sending over our data that we READ as a response
    stream.pipe(res);*/
