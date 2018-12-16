const http = require("http");
let server = http.createServer(function (req, res) {
    console.log("request headers...");
    console.log(req.headers);

    // respond
    res.write("Hello Client")
    res.end();
}).listen(3000);
console.log('server running on port 3000');