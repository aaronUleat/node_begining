const   connect = require("connect"),
        http = require("http");

// Create a connect dispatcher
let app = connect();

// Register with http
http.createServer(app)
    .listen(3000);
console.log("server runing on port 3000");
