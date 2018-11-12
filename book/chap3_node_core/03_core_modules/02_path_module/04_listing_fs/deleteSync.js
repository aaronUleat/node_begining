var fs = require("fs");

try {
    fs.unlinkSync("./test.txt");
}catch (err) {
    console.log('Error:', err);
}