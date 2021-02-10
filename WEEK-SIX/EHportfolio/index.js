const express = require("express");
const app = express();
const hb = require("express-handlebars");
const myProjects = require("./data");

//const project = require.params.project;
console.log("myProjects", myProjects);

//these two lines lets us choose handlebars as our view engine
app.engine("handlebars", hb());
app.set("view engine", "handlebars");

app.use(express.static("./public")); //keep css file here for landing page
app.use(express.static("./projects"));

app.get("/projects/:projects", (req, res) => {
    const projects = req.params.projects;
    console.log("project params", req.param.projects);
    const selectedProject = projects.find((item) => item.name == projects);
    if (!selectedProject) {
        return res.sendStatus(404);
    }
    /*res.render("projects", {
        myProjects,
    });*/
});

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
        helpers: {
            exclaim(text) {
                return text + "!!!!"; //bc this helper has been placed in the home it can only be accessed by the home template
            },
        },
    });
    //re.render accepts two arguments, the name of the file, second is an object, we pass any data we need to pass to the template
    //here is where we can send back the handlebars template
});

app.listen(8080, () => console.log("Server Running!"));
