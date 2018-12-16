var EventEmitter = require('events').EventEmitter;
var emitter = new EventEmitter;

var fooHandler = function() {
    console.log("handler call");

    // unsubscribe
    emitter.removeListener('foo', fooHandler);
}

emitter.on('foo', fooHandler);

// Emit twice

emitter.emit('foo');
emitter.emit('foo');