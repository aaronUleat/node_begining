var util = require("util");
console.log(util.isArray([]));
console.log(util.isArray({test: 1}));

console.log(util.isDate(new Date()));
console.log(util.isDate({}));

console.log(util.isError( new Error("This is an error") ));
console.log(util.isError({ message: 'I have a message' })); // false