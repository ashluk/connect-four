//console.log("hiiii0", $);
(function () {
    $.ajax({
        ///this is how we make and invoke an ajax request (remember the '.')

        url: "/countrydata.json",
        method: "GET",
        success: function (responseData) {
            var myhtml = "";
            for (var i = 0; i < responseData.length; i++) {
                //this is looping through the array
                console.log("cities in response", responseData[i].city); //this is going to log the value of cities in response
                var city = responseData[i].city;
                myhtml += "<h2>" + city + "</h2>";
            }
            //console.log("is this html", myhtml);
            $(".results").html(myhtml);

            console.log("response in success", responseData);
        },
        error: function (err) {
            console.log("err in ajax", err);
        },
    });
})();
