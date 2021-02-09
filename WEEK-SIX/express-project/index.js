const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const basicAuth = require("basic-auth");

//app.get takes 2 arguments, the location where we are listening for the get request, and the callback function

//this one line reads our data, stores it in a object
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser()); //this has to come before teh express.static to keep people out who dont have access

//app.use(express.static("./public"));

//this piece of middlewear will log the route for each get request
app.use((req, res, next) => {
    //console.log(`middlewear log: ${req.method} to ${req.url} route`);
    next();
});

app.get("/", (req, res) => {
    //console.log("req.cookies", req.cookies);
    res.send("<h1>home page</h1>");
});

app.use((req, res, next) => {
    //console.log("what i requested", req.url);
    /*if (req.method === "GET" && req.url !== "/") {
        console.log("this is what i want", req.url);
    }*/
    if (!req.cookies.authenticated && req.url !== "/cookies") {
        console.log("this is what i want", req.url, res.cookie);
        res.cookie("url", req.url);
        res.redirect("/cookies");
    } else {
        next();
    }
    // }
});

var auth = function (req, res, next) {
    var creds = basicAuth(req);
    if (!creds || creds.name != "ash" || creds.pass != "lee") {
        res.setHeader(
            "WWW-Authenticate",
            'Basic realm="Enter your credentials to see this stuff."'
        );
        res.sendStatus(401);
    } else {
        next();
    }
};
app.use("/spotifyAPI", auth);

app.use(express.static("./projects"));

app.get("/cookies", (req, res) => {
    res.send(`<h2>do you like cookies?</h2>
        <form method='POST' style="display: flex; flex-direction: column; justify-content: space-between; width: 40%; height: 50%;">
            
            <div>
                <input type="checkbox" name="subscribe"><span>DO YOU ACCEPT COOKIES?</span>
            </div>
            <button> submit </submit>
        </form>
    `);
});

app.post("/cookies", (req, res) => {
    //console.log(`a ${req.method} request was made to the ${req.url} route`);
    console.log("req.body", req.body); //this will now return an object with the values of the post body.
    const { subscribe } = req.body;

    if (subscribe) {
        res.cookie("authenticated", true); //this sets the authenticated cookie to true        //this is where we would set req.cookies
        /*res.send(`
        <h1>YOU LIKE COOKIES</h1>`);*/
        console.log("stored cookies", req.cookies);
        res.redirect(req.cookies["url"]);
    } else {
        res.send(`<h1>YOU HATE COOKIES</h1>`);
    }
});

app.listen(8080, () => console.log("server running"));

/*app.get("/about", (req, res) => {
    console.log(`a ${req.method} request was made to the ${req.url} route`);
    res.sendFile(__dirname + "/index.html");
});*/

//create a new get route, a cookie route
//if a user makes a get request to ANY page, we have to redirect them to a page waring them that they have to accept cookies
//when the user submits this its going to make a post request that handles what the user submitted when they either CHECK or DIDNT check the checkbok (either on, or undefined. truthy or falsy)
//if they did check the cookie

//redirect the user back to where they wanted to go before they hit the getcookie error
//if they do not accept just send them to a page that they cannot use the page without cookies
//(unless the route is a get or a post to cookie) -- we are going to use middlewear to redirect them back in a loop

//in order to redirect them where they were, store the route in a cookie, then take them to the cookie page, then redirect to the c

//start with a get route for cookie which will serve a form.
//app.use for custom middlewear after this -- check the cookies

/*app.get("/private", (req, res) => {
        if (req.cookies.authenticated) {
            console.log("req.cookies:", req.cookies);
            res.redirect(req.url); //is this how i would reference req url into the redirect?
        } else {
            res.redirect("/"); //redirects us to home if we dont have cookie
        }
    });*/
