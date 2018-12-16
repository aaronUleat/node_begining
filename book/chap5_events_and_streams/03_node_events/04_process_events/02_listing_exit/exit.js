process.on('exit', function(code){
   console.log("Existing with code", code)
});

process.exit(1);