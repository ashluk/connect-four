(function () {
    console.log("sane", $);
    //**************DO NOT TOUCH BELOW
    Handlebars.templates = Handlebars.templates || {};

    var templates = document.querySelectorAll(
        'script[type="text/x-handlebars-template"]'
    );

    Array.prototype.slice.call(templates).forEach(function (script) {
        Handlebars.templates[script.id] = Handlebars.compile(script.innerHTML);
    });
    //**************DO NOT TOUCH ABOVE

    /*var fennelObj = {
        name: "Fennel",
        nickname: "Fennelites",
        favoriteFoods: ["Pizza", "Sushi", "Chocolate"],
        skills: {
            //with 'skills' we are making an object
            javascript: true,
            html: 10,
            dancing: "good",
        },
    };*/

    var spiced = {
        cohorts: [
            {
                name: "Fennel",
                nickname: "Fennelites",
                favoriteFoods: ["Pizza", "Sushi", "Chocolate"],
                skills: {
                    javascript: true,
                    html: 10,
                    dancing: "questionable",
                },
            },
            {
                name: "Adobo",
                nickname: "Adobians",
                favoriteFoods: ["Salad", "Sandwiches", "Ice Cream"],
                skills: {
                    javascript: true,
                    nodejs: 10,
                    dancing: "amazing",
                },
            },
            {
                name: "Jasmine",
                nickname: "Jasminoes",
                favoriteFoods: ["Pizza", "Sushi", "Chocolate"],
                skills: {
                    React: true,
                    Vue: 10,
                    javascript: 11,
                },
            },
        ],
    };
    $(".fennel-info").html(Handlebars.templates.fennel(spiced));
    // $(".fennel-info").html(Handlebars.templates.fennel(fennelObj)); //<-- we have passed fennel the object fennelObj
    //the name of the handlebars template is the id of our script tag
    //this is what connects our script tag with our javascript
})();
