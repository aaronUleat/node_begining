var fs = require('fs');
// Create readable stream
var readableStream = fs.createWriteStream('./cool.txt');
// Pipe it to stdout
readableStream.pipe(process.stdout);