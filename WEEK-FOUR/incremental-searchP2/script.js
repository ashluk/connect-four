(function () {
    var resultsContainer = $(".results");
    var noResultsContainer = $(".noResults");
    var searchField = $("input");

    //1a Capture the users input-- this detects when the user types in the input field

    searchField.on("input", function () {
        var userInput = searchField.val();
        var val = searchField.val();
        if (!userInput) {
            console.log("value of", val);
            $(".results").html("");
            return;
        }
        //var userInput = searchField.val().toLowerCase();

        /* if (!userInput) {
            $(".results").html("");
            return;
        }*/

        //AJAX

        $.ajax({
            url: "https://spicedworld.herokuapp.com",
            data: {
                q: val,
            },
            success: function (response) {
                //console.log("response", response);
                //3a We need to render the countries that are returned. Take those 4 countries we found and put them in a <p>,<div> or something.
                var resultsHtml = "";
                var noResultsHtml = "";

                if (response.length == 0) {
                    resultsHtml += "<p class='country'>" + "" + "</p>";

                    resultsHtml +=
                        "<p class='noResults'>" + "NO RESULTS" + "</p>";

                    //noResultsContainer.html(noResultsHtml);
                } else {
                    for (var j = 0; j < response.length; j++) {
                        resultsHtml +=
                            "<p class='country'>" + response[j] + "</p>";
                        noResultsHtml += "<p class='noResults'>" + "" + "</p>";
                    }
                    // noResultsContainer.html(noResultsHtml);

                    resultsContainer.html(resultsHtml);
                }
            },
        });
        console.log("search:", userInput);
    });

    //2aCompare the input we got from the user with the countries in the array (specifically countries that start with the input we got from the user)
    //2bWe are going to stop once we’ve found 4 countries
    /*var matchResults = [];
        for (var i = 0; i < countries.length; i++) {
            if (countries[i].toLowerCase().indexOf(userInput) === 0) {
                //here we lowerCase all of the countries to match the input, and then we check if the input of the user matches 0 in any of the countries
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
        }*/

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

    $("input").keydown(".country", function (e) {
        var arrow = { enter: 13, up: 38, down: 40 };
        var matchResults = $("p");
        // var highlightResults = [];

        for (var h = 0; h < matchResults.length; h++) {
            // highlightResults.push(matchResults[h]);
            console.log("matchResults:", matchResults.eq(h));
        }

        switch (e.which) {
            case arrow.up:
                if ($("highlight").length == 0) {
                    //console.log("nothing highlighted!!");
                    //$("p").eq(3).addClass("highlight");
                    matchResults.last().addClass("highlight");
                } else {
                    $("highlight").prev().addClass("highlight");
                    $("highlight").next().removeClass("highlight");
                }
                break;

            case arrow.down:
                if ($("highlight").length == 0) {
                    $("p").eq(0).addClass("highlight");
                } else {
                    matchResults.next().addClass("highlight");
                    matchResults.prev().removeClass("highlight");
                }
                break;

            case arrow.enter:
                if (matchResults.hasClass("highlight")) {
                    console.log("value of highlight", $(e.target));
                    $("input").val($(e.target).text());
                    $(".results").html("");
                }

                break;
        }
    });

    //***********FOCUS
    $("input").focus(function () {});

    //***********BLUR
    $("body").on("mousedown", "blur", function (event) {});
})();
