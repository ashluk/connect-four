(function () {
    // console.log("sanity check!");
    var nextUrl = "";
    var userInput;
    var userSelect;
    $(".submit").on("click", function () {
        // console.log("button clicked!");
        userInput = $("input").val();
        userSelect = $("select").val();
        makeAjaxRequest("https://spicedify.herokuapp.com/spotify");
    });

    $(".more").on("click", function () {
        // console.log("clicked!");
        makeAjaxRequest(nextUrl, true);
    });

    function makeAjaxRequest(urlToMakeRequestTo, moreButtonClicked) {
        $.ajax({
            method: "GET", // for jQ GET by default if method not declared
            url: urlToMakeRequestTo,
            data: {
                // query and type specified by Spotify to include in request
                query: userInput,
                type: userSelect,
            },
            success: function (response) {
                // set response directly to artists or albums from response object
                response = response.artists || response.albums;
                // console.log("response: ", response);
                // console.log(response.items[0].external_urls.spotify);

                if (response.items.length) {
                    $(".requested").html(
                        'Showing results for "' + userInput + '"'
                    );
                } else {
                    $(".requested").html("No results found! :(");
                }

                var resultsHtml = generateHtml(response.items);
                // console.log("resultsHtml: ", resultsHtml);
                if (moreButtonClicked) {
                    $(".results-container").append(resultsHtml);
                } else {
                    $(".results-container").html(resultsHtml);
                }

                // console.log("response.next: ", response.next);
                // replace spotify next 20 link to proxy link
                // check response.next if truthy or not before set/replace link
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
                }

                // console.log("nextUrl: ", nextUrl);
            },
            // could use also error func below but not needed in this project
            // error: function (err) {},
        });
    }

    function generateHtml(items) {
        var resultsHtml = "";
        for (var i = 0; i < items.length; i++) {
            // check if there is available image otherwise use default
            var defaultImage =
                "https://musicnotesroom.com/media/catalog/product/9/4/94053_small_image.png";
            if (items[i].images.length > 0) {
                defaultImage = items[i].images[0].url;
            }
            resultsHtml +=
                "<div class='result'><a href='" +
                items[i].external_urls.spotify +
                "' target=_blank><img class='results' src='" +
                defaultImage +
                "'/></a><a href='" +
                items[i].external_urls.spotify +
                "' target=_blank class='results'>" +
                items[i].name +
                "</a></div>";
        }
        return resultsHtml;
    }
})();
