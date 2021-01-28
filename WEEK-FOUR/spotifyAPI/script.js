(function () {
    //we do not want to send the API the value until the user clicks so we should put the ajax into the event listener
    $(".submit").on("click", function () {
        var userInput = $("input").val();
        var artistOrAlbum = $("select").val();
        //console.log("user-data", userInput, "artistOrAlbum", artistOrAlbum);
        $.ajax({
            method: "GET",
            url: "https://spicedify.herokuapp.com/spotify",
            data: {
                //in order for us to get data back we need to send the API the values that the user has input
                query: userInput,
                type: artistOrAlbum, //query and type are the property names because that is what SPOTIFY requests in their API documentation
            },
            success: function (response) {
                response = response.artists || response.albums; //this gives us the artist obhect inside the albums object
                console.log("response", response);
                var resultsHtml = "";
                var requestHtml = "";
                var requestFor = $(".requested");
                if (response.items.length == 0) {
                    requestFor = "no results";
                } else {
                    requestFor = "RESULTS FOR " + userInput;
                }
                requestHtml += "<div>" + requestFor + "</div>";
                $(".requested").html(requestHtml);
                //console.log("why do i exist", requestHtml);
                for (var i = 0; i < response.items.length; i++) {
                    var defaultImage = "nophotoplaceholder.jpg";
                    //this accesses the items property of the obhect returned by spotify
                    if (response.items[i].images.length > 0) {
                        defaultImage = response.items[i].images[0].url;
                    }

                    //EXTERNAL URLS NOT WORKING

                    /* for (
                        var j = 0;
                        j < response.items.external_urls.spotify.length;
                        j++
                    )
                        var url = response.items[j].external_urls[0].spotify;**/

                    var url = "http://spiced.spaced"; //set to spiced to text the anchor tags

                    resultsHtml +=
                        "<a href=" +
                        url +
                        ">" +
                        "<div>" +
                        response.items[i].name +
                        "</div>" +
                        '<img src="' +
                        defaultImage +
                        '"/>' +
                        "</a>";
                    console.log("my string", resultsHtml);
                }
                $(".results-container").html(resultsHtml);

                var nextUrl =
                    response.next &&
                    response.next.replace(
                        //the reason that we have the && is that it checks if the response if null then the code never runs
                        "api.spotify.com/v1/search",
                        "spicedify.herokuapp.com/spotify"
                    );
                console.log("NEXT", nextUrl);

                if (nextUrl != null) {
                    $(".more").toggle();
                    $(".more").on("click", function () {
                        $.ajax({
                            url: nextUrl,
                            success: function (response) {
                                response = response.artists || response.albums;
                                var resultsHtml = "";
                                for (
                                    var i = 0;
                                    i < response.items.length;
                                    i++
                                ) {
                                    var defaultImage = "nophotoplaceholder.jpg";
                                    //this accesses the items property of the obhect returned by spotify
                                    if (response.items[i].images.length > 0) {
                                        defaultImage =
                                            response.items[i].images[0].url;
                                    }
                                    resultsHtml += //wrap this div in an a tag and give the div in the url
                                        "<a href=" +
                                        url +
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
                        });
                    });
                }
            },
        });
    });
})();

//1.make input
//2.begin your results with 'Results for  <artist / album>
//3. if there are no results render a result saying 'NO RESULTS FOUND!'
//4. for each result  you should see
//-an image --- artist name or album name --- both of these should be clickable
//-to make clickable wrap in A tag
//-handle a result having no images by rendering a default image in its place
//there is a property in the response object called 'next'
//-if there are no more results we want to hide the 'more' button
//-if its value is not null there are more results.

//WHEN WE CLICK THE MORE BUTTON WE ARE GOING TO MAKE A SECOND AJAX REQUEST TO THE URL
//before we make that request we need to replace the spotify url with the spiced proxy
