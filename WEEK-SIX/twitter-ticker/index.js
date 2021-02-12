const express = require("express");
const app = express();
const { getToken, getTweets, filterTweets } = require("./twitter");

const { promisify } = require("util");
const getTokenProm = promisify(getToken);
const getTweetProm = promisify(getTweets);

//serve content of twitter project
app.use(express.static("./newticker"));

//handle the request for data of headlines from the client side
/*app.get("/links.json", (req, res) => {
    console.log("request has been made for links.json");
    //ultimately the goal is to do four things in here
    //1. get the token to be able to get tweets from the twitter api
    getTokenProm((err, bearerToken) => {
        console.log("inside of teh body of getToken in index.js");
        if (err) {
            console.log("something went wrong with token", err);
            res.sendStatus(500);
        } else {
            console.log("we have a token", bearerToken);
            //getToken(bearerToken);
            //2.make a request for tweets using the token
            getTweetProm(bearerToken, (err, tweets) => {
        
                const filteredTweets = filterTweets(tweets);

                res.json(filteredTweets);
            //4. send back those filtered tweets as json to the client side

            });
        }
    });
});*/

/*app.get("/links.json", function (req, res) {
    getTokenProm().then((bearerToken) => {
        getTweetProm(bearerToken, (err, tweets)).then((tweets) => {
            //we are calling getTweets 3 times and storing the values in different variables
            let filteredTweets = filterTweets(tweets);
            res.json(filteredTweets);
        });
                    .catch((err) => {
                    console.log("err in Promise.all: ", err);
                    res.sendStatus(500);
                });    
            });
});*/

//PROMISE.ALL ALWAYS TAKE AN ARRAY AS AN ARGUMENT
app.get("/links.json", (req, res) => {
    getTokenProm().then((bearerToken) => {
        return Promise.all([
            getTweetProm(bearerToken, "nytimes"),
            getTweetProm(bearerToken, "bbc"),
            getTweetProm(bearerToken, "theonion"),
        ])
            .then((tweets) => {
                //tweets can be called whatever but its value must be all of the tweets of the three requests
                //this runs after we have got responses back from all three
                console.log("tweets:", tweets);
                const nyTweets = tweets[0];
                const bbcTweets = tweets[1];
                const onionTweets = tweets[2];
                //method #1: concat - Array method to combine arrays
                // var mergedTweets = nyTweets.concat(bbcTweets, onionTweets); //order doesnt matter, could use bbcTweets first
                //console.log("mergedTweets", mergedTweets);
                //method #2 spread operator (...)
                const spreadedTweets = [
                    ...nyTweets,
                    ...bbcTweets,
                    ...onionTweets,
                ];
                //console.log("spread operator tweets", spreadedTweets);
                //we can pass a function to sort
                const sortedArray = spreadedTweets.sort((a, b) => {
                    return new Date(b.created_at) - new Date(a.created_at);
                    //we have to turn b.created_at and a.created_at into data objects because they are dates
                    //a and b are just variables referencing the tweet objects.
                });
                const filteredTweets = filterTweets(sortedArray);
                console.log("filteredtweets", filteredTweets);
                res.json(filteredTweets);
            })
            .catch((err) => {
                console.log("err in promise.all", err);
                //this catch will run if any call to getTweets throws an error
            });
    });
});

app.listen(8080, () => console.log("twitter api project listening..."));
