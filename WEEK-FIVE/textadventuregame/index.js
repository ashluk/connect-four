const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
const chalk = require("chalk");

//story object
const story = {
    q: "Welcome to The Land Of Wizards! Would you like to play?",
    answers: {
        yes: {
            q:
                "You are alone in a dark forest and facing a fork in the road. Which direction do you turn?",
            answers: {
                left: {
                    q:
                        "There's a scary wizard! He asks you a tough question. What's 1+1?",
                    answers: {
                        2: "congratulations!",
                    },
                },
                right: "This was not the right choice. Goodbye!",
            },
        },
        no: "Alright then. Enjoy your day!",
    },
};

function askQuestion(storyObj) {
    rl.question(chalk.magenta(storyObj.q), (answer) => {
        console.log("what is the value of", story.answers.yes.left);

        //this is a conditional and will evaluate truthy or falsey
        if (storyObj.answers[answer]) {
            //console.log("answer option exists");
            console.log(
                "Value of the user's response in our story object is:",
                storyObj.answers[answer]
            );
            if (answer === "yes") {
                //console.log(storyObj.answers.yes);
                askQuestion(story.answers.yes);
            }
            if (answer === "left") {
                askQuestion(story.answers.yes.left.q);
            }
            if (answer === 2) {
                askQuestion(story.answers[2]);
                rl.close();
            }

            //  console.log("answer given", answer);
            if (answer === "no") {
                console.log(story.answers.no);
                rl.close();
            }
            if (answer === "right") {
                console.log(story.answers.no);
                rl.close();
            }
        } else {
            //this will keep asking the same question again.
            console.log(chalk.red("you are not making any sense"));
            askQuestion(story);
        }
    });
}
askQuestion(story); //we are passing story as the object for the function
