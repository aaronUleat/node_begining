const http = require("http");

let server = http.createServer(function (request, response) {
    console.log("Request starting...");
    console.log(request, 'request');
    console.log(response, 'response');
    // respond
    response.write("Hello Client!");
    response.end();
});

server.listen(3000);
console.log('Server running at http://127.0.0.1:3000/');