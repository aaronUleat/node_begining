## EventEmitter Memory Leaks

Una fuente común de pérdidas de memoria cuando se trabaja con eventos
es suscribirse a eventos en una devolución de llamada, pero olvidando
Cancelar la suscripción al final. De forma predeterminada,
EventEmitter tolerará 10 escuchas para cada tipo de evento, más y lo hará
imprimir una advertencia en la consola. Esta advertencia es
específicamente para su ayuda. Todo su código seguirá funcionando.
En otras palabras, se agregarán más oyentes sin advertencia y
se llamará a todos los oyentes cuando se produzca un evento,
como se muestra en el Listado 5-23.

as shown in Listing 5-23.

```
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
```

El resultado de la aplicación se muestra en el Listado 5-24.
Se puede ver que a pesar de la advertencia, todos los 20 oyentes.
Fueron llamados cuando emitimos el evento.

Listing 5-24. Running the Max Event Listeners Demo

```
$ node 8maxEventListeners.js
(node) warning: possible EventEmitter memory leak detected. 11 listeners added.
Use emitter.setMaxListeners() to increase limit.
Trace
at EventEmitter.addListener (events.js:160:15)
at someCallback (/path/to/8maxEventListeners.js:8:13)
at Object.<anonymous> (/path/to/8maxEventListeners.js:14:5)
at Module._compile (module.js:456:26)
at Object.Module._extensions..js (module.js:474:10)
at Module.load (module.js:356:32)
at Function.Module._load (module.js:312:12)
at Function.Module.runMain (module.js:497:10)
at startup (node.js:119:16)
at node.js:902:3
listeners called: 20
```

Una causa común de esta pérdida de memoria es olvidar cancelar
la suscripción para el evento cuando se encuentra en una condición de error de un
llamar de vuelta. Una solución simple es crear un nuevo emisor de
eventos en la devolución de llamada. De esta
manera el emisor de eventos no se comparte,
y se elimina junto con todos sus suscriptores
cuando finaliza la devolución de llamada.

Listing 5-25. events/9setMaxListeners.js

```
var EventEmitter = require('events').EventEmitter;
var emitter = new EventEmitter;

// increase limit to 30
emitter.setMaxListeners(30);

// subscribe 20 times
// now warning will be printed

for (var i = 0 ; i < 20; i++) {
    emitter.on('foo', function() {

    });
}

console.log('done');
```

Tenga en cuenta que esto aumenta el límite para todos los
tipos de eventos en este emisor de eventos. Además,
puede pasar en 0 para permitir una
Número ilimitado de oyentes de eventos para suscribirse sin previo aviso.


