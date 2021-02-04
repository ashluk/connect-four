const http = require("http");
//http.createserver returns an object that represents the server you are creating
const server = http.createServer((request, response) => {
    request.on("error", (err) => console.log(err));
    response.on("error", (err) => console.log(err));

    console.log(request.header, request.method, request.url);
    if (request.url == "/funky") {
        response.statusCode = 302;
        response.setHeader("Location", "http://spiced.com"); // or we could redirect to a different url in the same page /url/at/the/same site
        response.end();
        return;
        //important to return otherwise it will try to access the next response and you can only send once response
    }
    if (request.method == "POST") {
        let body = "";
        request.on("data", (chunk) => (body += chunk));
        request.on("end", () => {
            console.log(body);
            response.statusCode = 200;
            response.setHeader("content-type", "text/html");
            response.end(
                `<!doctype html>
        <title> hiiiii </title>
        <h1> ${body} </h1>`
            );
        });
    } else {
        response.statusCode = 200;
        //this sends the status code you choose here as a response
        response.setHeader("content-type", "text/html");
        //this sends a header and determines the type of response we sent -- this is paired with end
        response.end(
            `<!doctype html>
            <title> hiiiii </title>
            <h1> i am HTTP </h1>`
        );
    }

    /*if (request.method == "GET") {
        if (request.url == "/") {
        } else if (request.url == "/funky") {
        }
    } else if (request.method == "POST") {
    }*/
});
//pass a function to create server that will run everytime a request is recieved
//request and response are build in objects.

server.listen(8080, () => console.log("Im listening!"));
//listen must be passed at least one argument, and it needs to know the port
//you can also pass a callback, when the callback runs you know your server is listening
