const connect = require("connect");

// Create a connect dispatcher and register with http
let app = connect().listen(3000);
console.log('server running on port 3000');
