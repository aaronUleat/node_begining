var EventEmitter = require('events').EventEmitter;
var emitter = new EventEmitter();

var listenersCalled = 0;

function someCallback() {
    // add a listener
    emitter.on('foo', function(){listenersCalled++});
    // return
}

for (var i = 0; i < 20; i++) {
    someCallback();
}

emitter.emit('foo');
console.log('listerners called: ' , listenersCalled); // 20