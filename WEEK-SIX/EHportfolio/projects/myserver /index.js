const http = require("http");
const fs = require("fs");
const path = require("path");
const newModule = require("./newModule.js");
console.log(
    "project list",
    newModule.projectOverviewList(__dirname + "/images")
);
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
    if (req.url === "/") {
        console.log("YESSSS");
        res.write(
            `<!DOCTYPE html>

    <head>
        <style>
        @font-face {
    font-family: "CompactaBlack";
    src: url(fonts/CompactaBlack.ttf);
}
@font-face {
    font-family: 'Druk Wide Cy Web';
    src: url('DrukWideCyWeb-Bold.woff2') format('woff2'),
        url('DrukWideCyWeb-Bold.woff') format('woff'),
        url('DrukWideCyWeb-Bold.ttf') format('truetype');
    font-weight: bold;
    font-style: normal;
    font-display: swap;
}
body {background-color: black;
    width: 600px;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-content: center;
    padding-top: 150px;
    padding-left: 350px; }
a    {padding-left: 20px; font-size: 40px; color: whitesmoke; text-align: center;     font-family: Druk Wide Cy Web;

 text-decoration: none;}
 a:hover {
    color: rgb(226, 58, 58);
}



</style>
        <title>NOTHINGHERE</title>
    </head>
    <body>
    ${newModule.projectOverviewList(__dirname + "/images")}
    </body>
</html>`
        );
        return res.end();
    }

    const requestedFilePath = path.normalize(__dirname + "/images" + req.url);
    //keep intruders out!
    if (!requestedFilePath.startsWith(`${__dirname}/images/`)) {
        res.statusCode = 403;
        console.log("requestedpath", requestedFilePath);
        console.log("INTRUDER INCOMING");
        return res.end();
    }
    fs.stat(requestedFilePath, (err, stats) => {
        if (err) {
            console.log(
                "user requested something we dont have in our projects directory"
            );
            res.statusCode = 404;
            return res.end();
        }
        if (stats.isDirectory()) {
            console.log(
                "Content-Type",
                `{contentType[path.extname(requestedFilePath)]}`
            );

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
            }
        } else {
            const stream = fs.createReadStream(requestedFilePath);
            const ext = path.extname(requestedFilePath);
            console.log("ext", ext); //this returns the property name(i.e = .css)

            res.setHeader("Content-Type", contentType[ext]);
            stream.pipe(res);
        }
    });
}).listen(8080, () => console.log("portfolio server is running!"));
