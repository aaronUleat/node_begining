process.on('uncaughtException', function (err) {
    console.log('Caught Exeption:', err);
    console.log("stack:", err.stack);
    process.exit(1);
});
nonexistentFunc();
console.log('This line will not run.');