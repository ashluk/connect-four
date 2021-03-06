(function () {
    //we do not want to send the API the value until the user clicks so we should put the ajax into the event listener
    var userInput;
    var artistOrAlbum;
    var nextUrl = "";

    /*Handlebars.templates = Handlebars.templates || {};

    var templates = document.querySelectorAll(
        'script[type="text/x-handlebars-template"]'
    );

    Array.prototype.slice.call(templates).forEach(function (script) {
        Handlebars.templates[script.id] = Handlebars.compile(script.innerHTML);
    });*/

    $(".submit").on("click", function () {
        userInput = $("input").val();
        artistOrAlbum = $("select").val();
        makeAjaxRequest("https://spicedify.herokuapp.com/spotify");
    });

    $(document).on("keypress", function (e) {
        if (e.which == 13) {
            userInput = $("input").val();
            artistOrAlbum = $("select").val();
            makeAjaxRequest("https://spicedify.herokuapp.com/spotify");
        }
    });

    $(".more").on("click", function () {
        makeAjaxRequest(nextUrl, true);
    });

    function makeAjaxRequest(urlToMakeRequest, moreButtonClicked) {
        $.ajax({
            url: urlToMakeRequest,
            data: {
                //in order for us to get data back we need to send the API the values that the user has input
                query: userInput,
                type: artistOrAlbum, //query and type are the property names because that is what SPOTIFY requests in their API documentation
            },
            success: function (response) {
                response = response.artists || response.albums;

                //this gives us the artist object inside the albums object

                var requestHtml = "";
                var requestFor = $(".requested");
                if (response.items.length == 0) {
                    requestFor = "NO RESULTS";
                } else {
                    requestFor = "Results for... " + userInput;
                }
                requestHtml += "<div>" + requestFor + "</div>";
                //this is where we need to use the handlebars logic
                /* $(".results-container").html(
                    Handlebars.templates.spotifyresults(requestHtml)
                );*/

                $(".requested").html(requestHtml);

                var resultsHtml = generateHtml(response.items);

                if (moreButtonClicked) {
                    $(".results-container").append(resultsHtml);
                } else {
                    $(".results-container").html(resultsHtml);
                }
                //CHECKING FOR NEXT PAGE...the reason that we have the && is that it checks if the response if null then the code never runs
                nextUrl =
                    response.next &&
                    response.next.replace(
                        "api.spotify.com/v1/search",
                        "spicedify.herokuapp.com/spotify"
                    );
                if (response.next != null) {
                    $(".more").css({ visibility: "visible" });
                } else {
                    $(".more").css({ visibility: "hidden" });
                    return;
                }
                //IF NEXTURL HAS A VALUE -- CHECK IF THE INDEX OF INFINITE SCROLL IS GREATER THAT -1. THIS MEANS THAT IT DOES HAVE INFINITE SCROLL IN THE QUERY TAG

                if (nextUrl != null) {
                    if (location.search.indexOf("?scroll=infinite") > -1) {
                        //1st number we need is how far have we scrolled
                        // console.log("how far we scrolled", $(window).scrollTop());
                        //2nd number we need is the height of the browser
                        //  console.log("height of the screen", $(window).height());
                        //3rd number we need is the height of the page
                        // console.log("height of the screen", $(document).height());

                        function infiniteCheck() {
                            var reachedBottom =
                                $(window).scrollTop() + $(window).height() >=
                                $(document).height() - 300;

                            if (reachedBottom && moreButtonClicked) {
                                console.log("i reached the bottom");
                                $(".more").css({
                                    visibility: "hidden",
                                });
                                makeAjaxRequest(nextUrl, true);
                            } else {
                                setTimeout(infiniteCheck, 100);
                            }
                        }
                        infiniteCheck();
                    }
                }
            },
        });
    }
    //this acceses the items property of the object returned by spotify

    function generateHtml(items) {
        var resultsHtml = "";
        for (var i = 0; i < items.length; i++) {
            var defaultImage = "nophotoplaceholder.jpg";
            if (items[i].images.length > 0) {
                defaultImage = items[i].images[0].url;
            }
            resultsHtml +=
                "<a href=" +
                items[i].external_urls.spotify +
                ">" +
                "<div>" +
                items[i].name +
                "</div>" +
                "</a>" +
                "<a href=" +
                items[i].external_urls.spotify +
                ">" +
                '<img src="' +
                defaultImage +
                '"/>' +
                "</a>";
        }
        //$(".results-container").html(resultsHtml);
        return resultsHtml;
    }
    /*$.ajax({
        url: nextUrl,
        success: function (response) {
            response = response.artists || response.albums;

            var resultsHtml = "";
            for (var i = 0; i < response.items.length; i++) {
                var defaultImage = "nophotoplaceholder.jpg";
                //this accesses the items property of the obhect returned by spotify
                if (response.items[i].images.length > 0) {
                    defaultImage = response.items[i].images[0].url;
                }
                resultsHtml += //wrap this div in an a tag and give the div in the url
                    "<a href=" +
                    response.items[i].external_urls.spotify +
                    ">" +
                    "<div>" +
                    response.items[i].name +
                    "</div>" +
                    '<img src="' +
                    defaultImage +
                    '"/>' +
                    "</a>";
            }
            $(".results-container").html(resultsHtml);
        },
    });*/

    // }
    //$(".results-container").html(resultsHtml);
})();
