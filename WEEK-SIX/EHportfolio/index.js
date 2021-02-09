const express = require("express");
const app = express();
const hb = require("express-handlebars");
const myProjects = require("./data");
console.log("myProjects", myProjects);

//these two lines lets us choose handlebars as our view engine
app.engine("handlebars", hb());
app.set("view engine", "handlebars");

app.use(express.static("./public")); //keep css file here for landing page
app.use(express.static("./projects"));

app.get("/about", (req, res) => {
    res.render("about", {
        // layout: null,
        emojis: [":)", ":p"],
    });
});

app.get("/", (req, res) => {
    res.render("home", {
        //'home has to be stored in 'views' directory
        layout: "main",
        cohort: "fennel", //we can add data to our data object like this
        myProjects,
    });
    //re.render accepts two arguments, the name of the file, second is an object, we pass any data we need to pass to the template
    //here is where we can send back the handlebars template
});

app.listen(8080, () => console.log("Server Running!"));
