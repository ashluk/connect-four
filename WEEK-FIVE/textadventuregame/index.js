const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
const chalk = require("chalk");

//story object
const story = {
    q: "Welcome to the Danger Club! Would you like to play a game?",
    answers: {
        yes: {
            q: "Truth or Dare",
            answers: {
                dare: {
                    q:
                        "You have a choice between eating an entire raw onion or running naked through alexanderplatz at noon. Which do you choose? Onion or Naked?",
                    answers: {
                        naked: chalk.blue(
                            "It's going to be -6 tomorrow, have fun!"
                        ),
                        onion: chalk.bgGreen(
                            "Thats one way to keep up your social distancing!"
                        ),
                    },
                },
                truth:
                    "I don't think you are ready to face the truth..goodbye.",
            },
        },
        no: "Thats too bad...i guess you don't like danger",
    },
    //onion: "I am disgusted by you...",
};

function askQuestion(storyObj) {
    rl.question(chalk.magenta(storyObj.q), (answer) => {
        //console.log("what is the value of", story.answers.yes.left);
        // console.log("story answers yes", story.answers.yes);
        //console.log("story obj answer", storyObj.answers[answer]);
        //this is a conditional and will evaluate truthy or falsey
        if (storyObj.answers[answer]) {
            //console.log(typeof answer);
            if (answer == "string") {
                console.log(story.answers.no);
                rl.close();
            }
            if (answer === "yes") {
                //console.log(storyObj.answers.yes);
                askQuestion(storyObj.answers[answer]);
            }
            if (answer === "dare") {
                askQuestion(storyObj.answers[answer]);
            }
            if (answer === "naked") {
                console.log(storyObj.answers[answer]);

                rl.close();
            }

            //console.log("answer given", answer);
            if (answer === "no") {
                console.log(storyObj.answers[answer]);
                rl.close();
            }
            if (answer === "truth") {
                console.log(chalk.red(storyObj.answers[answer]));
                rl.close();
            }
            if (answer === "onion") {
                console.log(storyObj.answers[answer]);
                rl.close();
            }
        } else {
            //this will keep asking the same question again.
            console.log(chalk.red("YOU ARE NOT MAKING ANY SENSE"));
            askQuestion(story);
        }
    });
}
askQuestion(story); //we are passing story as the object for the function
