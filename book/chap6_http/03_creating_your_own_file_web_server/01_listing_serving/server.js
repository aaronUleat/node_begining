const http = require("http");
const fs = require("fs");

function send404(response) {
    response.writeHead(404, {"Content-Type": "text/pain"});
    response.write("Error 404: resource not found");
    response.end();
}

let server = http.createServer(function (req, res) {
    if (req.method == "GET" && req.url == '/') {
        res.writeHead(200, {'content-type': 'text/html'});
        fs.createReadStream("./public/index.html").pipe(res);
    } else {
        send404(res);
    }
}).listen(3001);
console.log('server running on port 3001');
