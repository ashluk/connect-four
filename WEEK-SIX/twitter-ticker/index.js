const express = require("express");
const app = express();
const { getToken, getTweets, filterTweets } = require("./twitter");

//serve content of twitter project
app.use(express.static("./newticker"));

//handle the request for data of headlines from the client side
app.get("/links.json", (req, res) => {
    console.log("request has been made for links.json");
    //ultimately the goal is to do four things in here
    //1. get the token to be able to get tweets from the twitter api
    getToken((err, bearerToken) => {
        console.log("inside of teh body of getToken in index.js");
        if (err) {
            console.log("something went wrong with token", err);
            res.sendStatus(500);
        } else {
            console.log("we have a token", bearerToken);
            //getToken(bearerToken);
            //2.make a request for tweets using the token
            getTweets(bearerToken, (err, tweets) => {
                //3. filter the tweets we got in step 2
                const filteredTweets = filterTweets(tweets);

                //4. send back those filtered tweets as json to the client side
                res.json(filteredTweets);
            });
        }
    });
});

app.listen(8080, () => console.log("twitter api project listening..."));
