var foo = require("./foo");
console.log("Initial something", foo.something, 'app'); // 123

// now modify something;
foo.something = 456;

// now load bar
var bas = require('./bar');