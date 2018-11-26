setTimeout(function () {
    console.log("5 seconds passed. Exitinhg");
}, 5000);

console.log("Started, will exit in 5 seconds");

process.on("SIGINT", function () {
    console.log("Got SIGINT. Ignoring")
});