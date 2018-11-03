console.log( console === global.console, 'global console' );
console.log( setTimeout === global.setTimeout, 'global setTimeout' );
console.log( setInterval === global.setInterval, 'global setInterval' );

// add something to global
require("./addToGlobal");
console.log(something);