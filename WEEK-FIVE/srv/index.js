const http = require("http");
const fs = require("fs");

const server = http.createServer((request, response) => {
    request.on("error", (err) => console.log(err));
    response.on("error", (err) => console.log(err));

    console.log(request.header, request.method, request.url);
    if (request.method == "GET") {
        response.statusCode = 200;
        response.setHeader("content-type", "text/html");
        requestsText();
        response.end();

        return;
    }
    if (request.method == "HEAD") {
        response.statusCode = 200;
        response.setHeader("content-type", "text/html");
        requestsText();

        response.end(`<!doctype html>
<html>
<title>Hello World!</title>
<p>Hello World!</p>
</html>`);
        return;
    }
    /*if (request.url == "/funky") {
        response.statusCode = 302;
        response.setHeader("Location", "http://spiced.com");
        response.end();
        return;
    }*/
    if (request.method == "POST") {
        let body = "";
        request.on("data", (chunk) => (body += chunk));
        request.on("end", () => {
            console.log(body);
            response.statusCode = 301;
            response.setHeader("content-type", "text/html");
            requestsText();

            response.end(
                `<!doctype html>
        <title> hiiiii </title>
        <h1> ${body} </h1>`
            );
            return;
        });
    } else {
        response.statusCode = 405;
        //this sends the status code you choose here as a response
        response.setHeader("Location", "/");
        response.end();
        return;
    }
    function requestsText() {
        fs.appendFile(
            "requests.txt",
            `${request.method} / ${request.url} / ${request.header}
        `,
            (err) => {
                if (err) throw err;
                console.log('The "data to append" was appended to file!');
            }
        );
    }
});

server.listen(8080, () => console.log("Im listening!"));
