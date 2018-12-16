## EventEmitter class

EventEmitter es una clase diseñada para facilitar la emisión
de eventos (no sorprende) y suscribirse a eventos planteados.
El Listado 5-15 proporciona una pequeña muestra de código donde
nos suscribimos a un evento y luego lo elevamos.

Listing 5-15. events/1basic.js

```
var EventEmitter = require("events").EventEmitter;

var emitter = new EventEmitter();

emitter.on('foo', function(arg1, arg2) {
    console.log('Foo raised, Args:', arg1, arg2);
});

// Emit

emitter.emit('foo', {a: 123}, {b: 456});
```

Como se muestra en el ejemplo, puede crear una nueva instancia
con una simple llamada `new EventEmitter`. Suscribirse a
eventos, utiliza la función `on` que pasa el nombre del
evento (siempre una cadena) seguido de una función de manejo de eventos
(También llamado oyente). Finalmente, levantamos un evento usando
la función de emisión que pasa en el nombre del evento seguido de cualquier
la cantidad de argumentos que queremos pasar a los oyentes
(en el Listado 5-15 usamos dos argumentos para demostración).

