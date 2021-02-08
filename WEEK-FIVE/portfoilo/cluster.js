const os = require("os");
const cluster = require("cluster");
console.log("os:cpus()", os.cpus().length);
//this tells us how many cores we have available to us

cluster.setupMaster({
    exec: "index.js", //give this the string where your server lives
});

//cluster.fork to setup child processes --- we use for loop cause we don't know how many cores a users machine has

for (let i = 0; i < os.cpus().length; i++) {
    cluster.fork();
}
