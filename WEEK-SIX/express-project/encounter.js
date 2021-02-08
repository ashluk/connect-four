const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
//we call express and it returns to us an object full of methods that we store in app.
//when we want to use any of these methods we call app.

//app.get takes 2 arguments, the location where we are listening for the get request, and the callback function

//middleware is used at the top because of the way the code is read
//this one line reads our data, stores it in a object
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser()); //this has to come before teh express.static to keep people out who dont have access
app.use(express.static("./public"));
app.use(express.static("./projects"));

//this is how we access the info in out public folder. like linking styles sheets.

//this piece of middlewear will log the route for each get request
app.use((req, res, next) => {
    console.log(`middlewear log: ${req.method} to ${req.url} route`);
    next(); //we have to call next when we are done letting it know to move on to the next piece of middlewear
});

app.get("/", (req, res) => {
    console.log("req.cookies", req.cookies);
    res.cookie("first-cookie", "Exciting!");
    res.cookie("authenticated", true);
    console.log("GET request was made to the / route");
    //line below logs the same thing
    //console.log(`${req.method} request was made to the ${req.url} route`);

    res.send("<h1>Hello Fennel</h1>");
});

app.get("/", (req, res) => {
    if (req.url != "/") {
        console.log("not the home page", req.url);
        res.redirect("./cookies");
    }
});

/*app.get("/about", (req, res) => {
    console.log(`a ${req.method} request was made to the ${req.url} route`);
    res.sendFile(__dirname + "/index.html");
});*/

//dynamic routing --->
//imagine in this case that we are trying to access one user profile out of 1000's
app.get("/user/:userId/:postId", (req, res) => {
    console.log("req.params: ", req.params);
    //req.params will return to us an object with the requested params(userId, postId)
    res.send(`<h1>This is a page ${req.params.userId}</h1>
        <h2>THIS IS post ID ${req.params.postId}</h2>`);
});

app.get("/register", (req, res) => {
    res.cookie("authenticated", true); //this sets the authenticated cookie to true
    res.send(`<h2>Please tell us about yourself</h2>
        <form method='POST' style="display: flex; flex-direction: column; justify-content: space-between; width: 40%; height: 50%;">
            <input type='text' name='firstname' placeholder='First Name' autocomplete='off'>
            <input type='text' name='lastname' placeholder='Last Name' autocomplete='off'>
            <div>
                <span>How old are you? </span><input type="number" name="age">
            </div>
            <div>
                <input type="checkbox" name="subscribe"><span>Would you like to receive our newsletter?</span>
            </div>
            <button> submit </submit>
        </form>
    `);
});

app.post("/register", (req, res) => {
    console.log(`a ${req.method} request was made to the ${req.url} route`);
    console.log("req.body", req.body); //this will now return an object with the values of the post body.
    const { firstname, lastname, subscribe, age } = req.body;

    if (subscribe) {
        //this is where we would set req.cookies
        res.send(`
        <h1>THANK YOU ${firstname} for subscribing to our newsletter</h1>
        <h1>you are ${age} years old </h2>`);
    } else {
        res.send(`<h1>we are so sad ${firstname}${lastname} you dont want to subscribe</h1>
        `);
    }
    app.get("./private", (req, res) => {
        if (req.cookies.authenticated) {
            console.log("req.cookies:", req.cookies);
            res.send(`
        <h1>THIS IS TOP SECRET</h1>
        `);
        } else {
            res.redirect("./"); //redirects us to home if we dont have cookie
        }
    });
});

app.listen(8080, () => console.log("server running"));
