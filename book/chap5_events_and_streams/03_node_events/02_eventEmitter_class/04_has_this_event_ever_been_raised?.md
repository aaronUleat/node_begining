## Has This Event Ever Been Raised?

Es un caso de uso común que no le importa cada vez
que se produce un evento, solo que se plantea una vez. Para esto,
EventEmitter proporciona una función `once 'que llama
al oyente registrado solo una vez. Listado 5-20 demuestra su uso.

Listing 5-20. events/5once.js
```
var EventEmitter = require('events').EventEmitter;
var emitter = new EventEmitter;

emitter.once('foo', function () {
    console.log("foo has been raised");
});

// Emit twice
emitter.emit('foo');
emitter.emit('foo');
```

El detector de eventos para foo solo se llamará una vez.
