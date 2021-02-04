var chalk = require("chalk");
//const events = require("events");
const http = require("http");
const querystring = require("querystring");

const server = http.createServer((request, response) => {
    request.on("error", console.log);
    response.on("error", console.log);

    //console.log("new request");
    if (request.method === "GET") {
        response.end(` <!doctype html>
<html>
<title>Colors</title>
<form method="POST">
  <input type="text" name="text">
  <select name="color">
    <option value="red">red</option>
    <option value="blue">blue</option>
    <option value="green">green</option>
    <option value="yellow">yellow</option>
    <option value="gray">gray</option>
    <option value="magenta">magenta</option>
    <option value="cyan">cyan</option>
  </select>
  <button type="submit">Go</button>
</form>
</html>`);
    } else if (request.method === "POST") {
        let body = "";
        request
            .on("data", (chunk) => (body += chunk))
            .on("end", () => {
                const { text, color } = querystring.parse(body);
                console.log(chalk[color](text));

                //console.log(body);
                //const parsedBody = querystring.parse(body);
                //console.log(parsedBody);
                response.end(`<!doctype html>
<html>
<title>title</title>
<a href="/" style=color:${[color]}>${[text]}</a>
</html>`);
            });
    } else {
        response.statusCode = 405;
        response.end();
    }
});

server.listen(8080, () => console.log("listening on 8080\n localhost:8080"));

//how to we listen for color input?
