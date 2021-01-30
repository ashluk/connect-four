(function () {
    //we do not want to send the API the value until the user clicks so we should put the ajax into the event listener
    $(".submit").on("click", function () {
        var userInput = $("input").val();
        var artistOrAlbum = $("select").val();
        var nextUrl;
        $.ajax({
            method: "GET",
            url: "https://spicedify.herokuapp.com/spotify",
            data: {
                //in order for us to get data back we need to send the API the values that the user has input
                query: userInput,
                type: artistOrAlbum, //query and type are the property names because that is what SPOTIFY requests in their API documentation
            },
            success: function (response) {
                response = response.artists || response.albums;
                if (response.next != null) {
                   /* $(".more").css({ visibility: "visible" });
                } else {
                    $(".more").css({ visibility: "hidden" });
                }*/
                //this gives us the artist object inside the albums object
                var resultsHtml = "";
                var requestHtml = "";
                var requestFor = $(".requested");
                if (response.items.length == 0) {
                    requestFor = "no results";
                } else {
                    requestFor = "RESULTS FOR " + userInput;
                }
                requestHtml += "<div>" + requestFor + "</div>";
                //this is where we need to use the handlebars logic
                $(".requested").html(requestHtml);

                //this acceses the items property of the object returned by spotify
                for (var i = 0; i < response.items.length; i++) {
                    var defaultImage = "nophotoplaceholder.jpg";
                    if (response.items[i].images.length > 0) {
                        defaultImage = response.items[i].images[0].url;
                    }
                    resultsHtml +=
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
                    console.log("my string", resultsHtml);
                }
                $(".results-container").html(resultsHtml);

                //CHECKING FOR NEXT PAGE...the reason that we have the && is that it checks if the response if null then the code never runs
                nextUrl =
                    response.next &&
                    response.next.replace(
                        "api.spotify.com/v1/search",
                        "spicedify.herokuapp.com/spotify"
                    );

                //IF NEXTURL HAS A VALUE -- CHECK IF THE INDEX OF INFINITE SCROLL IS GREATER THAT -1. THIS MEANS THAT IT DOES HAVE INFINITE SCROLL IN THE QUERY TAG
                if (nextUrl != null) {
                    if (location.search.indexOf("?scroll=infinite") > -1);
                    console.log("we want to do infinite scroll now");
                    //1st number we need is how far have we scrolled
                    console.log("how far we scrolled", $(window).scrollTop());
                    //2nd number we need is the height of the browser
                    console.log("height of the screen", $(window).height());
                    //3rd number we need is the height of the page
                    console.log("height of the screen", $(document).height());

                    function infiniteCheck() {
                        console.log("checking infinite");
                        console.log($(window).scrollTop());
                        console.log($(window).height());
                        console.log($(document).height());

                        var reachedBottom =
                            $(window).scrollTop() + $(window).height() >=
                            $(document).height() - 300;
                        console.log("reachedbottom", reachedBottom);

                        if (reachedBottom) {
                            //make call to get more results
                        } else {
                            setTimeout(infiniteCheck, 1000);
                        }
                    }
                    infiniteCheck();
                }

                $(".more").toggle();

                $(".more").on("click", function () {
                    $.ajax({
                        url: nextUrl,
                        success: function (response) {
                            response = response.artists || response.albums;
                            var resultsHtml = "";
                            for (var i = 0; i < response.items.length; i++) {
                                var defaultImage = "nophotoplaceholder.jpg";
                                //this accesses the items property of the obhect returned by spotify
                                if (response.items[i].images.length > 0) {
                                    defaultImage =
                                        response.items[i].images[0].url;
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
                    });
                });
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
