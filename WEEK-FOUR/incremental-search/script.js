(function (countries) {
    var resultsContainer = $(".results");
    var noResultsContainer = $(".noResults");
    //console.log("results:", resultsContainer);
    var searchField = $("input"); //we are referencing using tag so no '.' needed b4

    searchField.on("input", function () {
        //this detects when the user types in the input field

        //1a Capture the users input
        //1b Handle case insensitivity
        var userInput = searchField.val().toLowerCase();

        //2aCompare the input we got from the user with the countries in the array (specifically countries that start with the input we got from the user)
        //2bWe are going to stop once we’ve found 4 countries
        var matchResults = [];

        for (var i = 0; i < countries.length; i++) {
            if (countries[i].toLowerCase().indexOf(userInput) === 0) {
                //here we lowerCase all of the countries to match the input, and then we check if the input of the user matches 0 in any of the countries
                //console.log("countries entered", countries[i]);
                matchResults.push(countries[i]); //this pushes the countries that match to the array
            }
            if (matchResults.length === 0) {
                var noResults = "";
                noResults += "<p class= 'noResults'>" + "NO RESULTS" + "</p>";
            } else if (matchResults.length >= 4) {
                noResults = "<p class= 'noResults'>" + "" + "</p>";
                //this makes sure we never have an array of more than 4
                break;
            } else if (matchResults.length >= 1) {
                noResults = "<p class= 'noResults'>" + "" + "</p>";
            }
        }
        //console.log("matching;", matchResults);

        //3a We need to render the countries that are returned. Take those 4 countries we found and put them in a <p>,<div> or something.
        var htmlForCountries = "";
        for (var j = 0; j < matchResults.length; j++) {
            htmlForCountries +=
                "<p class='country'>" + matchResults[j] + "</p>";

            //this is how we generate html in JQ and store them in the htmlCountries variabel
        }
        if (!userInput) {
            $(".results").html("");
            return;
        }
        /*if (userInput == "") {
            htmlForCountries += "<p class='country'>" + "" + "</p>";
        }*/
        console.log("search:", userInput);

        //3b If we have now found any countries we need to render a message that says no results
        noResultsContainer.html(noResults);

        //4b Append it to the DOM. <— we will only see the countries once we append.
        //we now want to push the <p> tag elements to the div we created earlier
        resultsContainer.html(htmlForCountries);
    }); //this will delete whatever is already inside of resultsContainer and replace it with whatever this generated by htmlForCountries

    /*$("document").on("keydown", ".country", function (event) {
        event.preventDefault();
        console.log("keydown;");
        $(".country").addClass("highlight");
    });*/
    //*****MOUSEOVER EVENTS ON P TAGS*****
    $("body").on("mouseover", ".country", function (event) {
        event.preventDefault();
        $(event.target).addClass("highlight");
    });
    $("body").on("mouseleave", ".country", function (event) {
        event.preventDefault();
        $(event.target).removeClass("highlight");
    });

    //***** MOUSEDOWN EVENTS ON COUNTRIES
    $("body").on("mousedown", ".country", function (event) {
        event.preventDefault();
        //$("input").val(event.target); //what i was missing in my original was that i didnt target it as a $ and i didnt specify text.
        $("input").val($(event.target).text()); //this is setting the value of the input to just the text info of the event target
        $(".results").html("");
    });
    //******KEYDOWN EVENTS */

    $("body").keydown(".country", function (e) {
        var arrow = { enter: 13, up: 38, down: 40 };
        var matchResults = $("p");
        var highlightResults = [];

        for (var h = 0; h < matchResults.length; h++) {
            highlightResults.push(matchResults[h]);
        }
        console.log("highlightresults:", highlightResults[0]);

        switch (e.which) {
            case arrow.up:
                if (!matchResults.hasClass("highlight")) {
                    highlightResults[3].css("background", "yellow");
                }
                break;

            case arrow.down:
                if (!matchResults.hasClass("highlight")) {
                    highlightResults[0].addClass("highlight");
                }
                break;

            case arrow.enter:
                $("input").val($(e.target).text());
                $(".results").html("");

                break;
        }
    });

    //***********FOCUS
    $("input").focus(function () {});

    //***********BLUR
})([
    "Afghanistan",
    "Albania",
    "Algeria",
    "Andorra",
    "Angola",
    "Antigua and Barbuda",
    "Argentina",
    "Armenia",
    "Australia",
    "Austria",
    "Azerbaijan",
    "Bahamas",
    "Bahrain",
    "Bangladesh",
    "Barbados",
    "Belarus",
    "Belgium",
    "Belize",
    "Benin",
    "Bhutan",
    "Bolivia",
    "Bosnia and Herzegovina",
    "Botswana",
    "Brazil",
    "Brunei Darussalam",
    "Bulgaria",
    "Burkina Faso",
    "Burundi",
    "Cabo Verde",
    "Cambodia",
    "Cameroon",
    "Canada",
    "Central African Republic",
    "Chad",
    "Chile",
    "China",
    "Colombia",
    "Comoros",
    "Congo",
    "Costa Rica",
    "Côte D'Ivoire",
    "Croatia",
    "Cuba",
    "Cyprus",
    "Czech Republic",
    "Democratic People's Republic of Korea",
    "Democratic Republic of the Congo",
    "Denmark",
    "Djibouti",
    "Dominica",
    "Dominican Republic",
    "Ecuador",
    "Egypt",
    "El Salvador",
    "Equatorial Guinea",
    "Eritrea",
    "Estonia",
    "Eswatini",
    "Ethiopia",
    "Fiji",
    "Finland",
    "France",
    "Gabon",
    "Gambia",
    "Georgia",
    "Germany",
    "Ghana",
    "Greece",
    "Grenada",
    "Guatemala",
    "Guinea",
    "Guinea Bissau",
    "Guyana",
    "Haiti",
    "Honduras",
    "Hungary",
    "Iceland",
    "India",
    "Indonesia",
    "Iran",
    "Iraq",
    "Ireland",
    "Israel",
    "Italy",
    "Jamaica",
    "Japan",
    "Jordan",
    "Kazakhstan",
    "Kenya",
    "Kiribati",
    "Kuwait",
    "Kyrgyzstan",
    "Lao People’s Democratic Republic",
    "Latvia",
    "Lebanon",
    "Lesotho",
    "Liberia",
    "Libya",
    "Liechtenstein",
    "Lithuania",
    "Luxembourg",
    "Madagascar",
    "Malawi",
    "Malaysia",
    "Maldives",
    "Mali",
    "Malta",
    "Marshall Islands",
    "Mauritania",
    "Mauritius",
    "Mexico",
    "Micronesia",
    "Monaco",
    "Mongolia",
    "Montenegro",
    "Morocco",
    "Mozambique",
    "Myanmar",
    "Namibia",
    "Nauru",
    "Nepal",
    "Netherlands",
    "New Zealand",
    "Nicaragua",
    "Niger",
    "Nigeria",
    "North Macedonia",
    "Norway",
    "Oman",
    "Pakistan",
    "Palau",
    "Panama",
    "Papua New Guinea",
    "Paraguay",
    "Peru",
    "Philippines",
    "Poland",
    "Portugal",
    "Qatar",
    "Republic of Korea",
    "Republic of Moldova",
    "Romania",
    "Russian Federation",
    "Rwanda",
    "Saint Kitts and Nevis",
    "Saint Lucia",
    "Saint Vincent and the Grenadines",
    "Samoa",
    "San Marino",
    "Sao Tome and Principe",
    "Saudi Arabia",
    "Senegal",
    "Serbia",
    "Seychelles",
    "Sierra Leone",
    "Singapore",
    "Slovakia",
    "Slovenia",
    "Solomon Islands",
    "Somalia",
    "South Africa",
    "South Sudan",
    "Spain",
    "Sri Lanka",
    "Sudan",
    "Suriname",
    "Sweden",
    "Switzerland",
    "Syrian Arab Republic",
    "Tajikistan",
    "Thailand",
    "Timor-Leste",
    "Togo",
    "Tonga",
    "Trinidad and Tobago",
    "Tunisia",
    "Turkey",
    "Turkmenistan",
    "Tuvalu",
    "Uganda",
    "Ukraine",
    "United Arab Emirates",
    "United Kingdom",
    "United Republic of Tanzania",
    "United States of America",
    "Uruguay",
    "Uzbekistan",
    "Vanuatu",
    "Venezuela",
    "Viet Nam",
    "Yemen",
    "Zambia",
    "Zimbabwe",
]);
