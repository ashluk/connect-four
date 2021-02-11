//not destructured version here -->
//const secrets = require(":/secrets");
//secrets.twitterKey, secrets. twitterSecret

//descructure version
const { twitterKey, twitterSecret } = require("./secrets");

const https = require("https");
const queryString = require("querystring");

module.exports.getToken = function getToken(callbackToken) {
    //https response will take time to complete to we are calling it once it has values
    console.log("running get token");
    //this function gets what is called the bearerToken from twitter
    let credentials = `${twitterKey}:${twitterSecret}`;
    let encodedCredentials = Buffer.from(credentials).toString("base64");

    const options = {
        host: "api.twitter.com",
        path: "/oauth2/token",
        method: "POST",
        headers: {
            Authorization: `Basic ${encodedCredentials}`,
            "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
        },
    };

    function reqCallback(response) {
        if (response.statusCode != 200) {
            //something went wrong with our request, we are passing the status error code to our cb function
            callbackToken(response.statusCode);
            return;
        }
        //if we reach this point of the code we have a valid response
        let body = "";
        response.on("data", (chunk) => {
            body += chunk;
        });
        response.on("end", () => {
            let parsedBody = JSON.parse(body);
            console.log("parsedBody", parsedBody.access_token);
            callbackToken(null, parsedBody.access_token);
        });
    }

    const req = https.request(options, reqCallback); //this is like a success function
    req.end("grant_type=client_credentials");
};

module.exports.getTweets = function getTweets(bearerToken, callbackTweets) {
    const options = {
        host: "api.twitter.com",
        path: "/1.1/statuses/user_timeline.json",
        method: "GET",
        headers: {
            Authorization: "Bearer " + bearerToken,
        },
    };
    console.log("what are my options", options);

    function reqCallback(request) {
        if (request.statusCode != 200) {
            callbackTweets(request.statusCode);
            return;
        }
        let body = "";
        request.on("data", (chunk) => {
            body += chunk;
        });
        response.on("end", () => {
            let queryString = "screen_name=residentadvisor&tweet_mode=extended";
            console.log("querystring", queryString);
            callbackTweets(null, bearerToken);
        });
    }
    const newqueryString =
        options.path + "? screen_name = residentadvisor&tweet_mode = extended";
    const req = https.request(options, reqCallback);
    req.end();

    /*function reqcallbackTweets(request) {
        callbackTweets(request.bearerToken);
        https.get("/1.1/statuses/user_timeline.json", (req, res) => {
            let data = "";
            res.on("data", (chunk) => {
                data += chunk;
            });

            console.log("this is my string", data);

            req.end();
        });
        let queryString = path + "screen_name=nytimes&tweet_mode=extended";
        console.log("mystring", queryString);
    }*/
    //this function will get tweets from the twitter api
    //this will accept two parameters -- the bearerToken
};

module.exports.filterTweets = function filterTweets(tweets) {
    //this function will clean up(filter) out tweet response from the twitter API
};
