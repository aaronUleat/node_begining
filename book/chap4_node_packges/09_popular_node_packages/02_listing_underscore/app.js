var foo = [1,2,3,4];

var _ = require("../../../../node_modules/underscore");
var results = _.map(foo, function(item) {
    return item * 2;
})

console.log(results);