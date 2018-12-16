## Listener Management

Hay algunas funciones de utilidad adicionales disponibles en
EventEmitter que debe tener en cuenta para ser un Node.js
experto en manejo de eventos.

EventEmitter tiene una función miembro, escuchas,
que toma un nombre de evento y devuelve todos los escuchas
suscrito a ese evento. Esto puede ser muy útil
cuando está depurando escuchas de eventos. Listado 5-21 demuestra
su uso

Listing 5-21. events/6listeners.js

```
var EventEmitter = require('events').EventEmitter;
var emitter = new EventEmitter();

emitter.on('foo', function a(){});
emitter.on('foo', function b(){});

console.log(emitter.listeners('foo')); // [ [Function: a], [Function: b] ]
```

Las instancias de EventEmitter también generan
un evento `newListener` cada vez que se agrega un nuevo oyente y
`removeListener` cada vez que se elimina un oyente, lo que puede
ayudarlo en situaciones difíciles como cuando quiere
para rastrear el instante en que se registra / anula el registro
de un detector de eventos. También puede ser útil para cualquier gestión que
desea hacerlo cuando se agregan o eliminan escuchas,
como se muestra en el Listado 5-22.

Listing 5-22. events/7listenerevents.js

```
var EventEmitter = require('events').EventEmitter;
var emitter = new EventEmitter();

// Listener addition / removal notifications

emitter.on("newListener", function (eventName, listenerFunction) {
    console.log(eventName, 'listener removed', listenerFunction.name);
});

emitter.on('newListener', function (eventName, listenerFunction) {
    console.log(eventName, 'listener added', listenerFunction.name);
});

function a() { }
function b() { }

// Add

emitter.removeListener('foo', a);
emitter.removeListener('foo', b)
```


Tenga en cuenta que si agrega un `removeListener` después
de agregar un controlador para` newListener`, recibirá una
notificación sobre el
La adición `removeListener` también, por lo que es convencional
agregar el controlador de eventos removeListener primero como
Lo hicimos en esta muestra.
