// Blocks execution till module is loaded
var foo = require('./foo');
// Continue execution after it is loaded
console.log('loaded foo');
foo();