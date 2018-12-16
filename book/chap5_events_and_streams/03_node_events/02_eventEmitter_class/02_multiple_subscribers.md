## Multiple Subscribers

Como mencionamos anteriormente, tener soporte integrado para
múltiples suscriptores es una de las ventajas de usar eventos.
El listado 5-16 es una muestra rápida donde tenemos
múltiples suscriptores para un evento.

Listing 5-16. events/2multiple.js

```
var EventEmitter = require("events").EventEmitter;
var emitter = new EventEmitter();

emitter.on('foo', function() {
    console.log("subscriber 1");
});

emitter.on('foo', function() {
    console.log("subscribe 2");
});

// Emit

emitter.emit('foo');
```

Otra cosa a tener en cuenta en este ejemplo es el hecho de que los
emitters son llamados en el orden en que se registraron para el
evento. Esta es una buena consecuencia de la naturaleza de
subproceso único de Node.js, lo que hace que sea más fácil para usted razonar.
sobre tu código. Además, todos los argumentos pasados ​​para
el evento se comparten entre los distintos suscriptores, como
demostrado en el Listado 5-17.

Listing 5-17. events/3shared.js

```
var EventEmitter = require('events').EventEmitter;
var emitter = new EventEmitter;

emitter.on("foo", function (ev) {
    console.log("subscriber 1: ", ev);
    ev.handled = true;
});

emitter.on('foo', function (ev) {
    if (ev) {
        console.log("event already handled");
    }
});

// Emit

emitter.emit("foo", {handled : false });
```

En este ejemplo, el primer oyente modificó el argumento de evento
pasado y el segundo oyente consiguió la modificación
objeto. Puede usar este hecho para sacarlo de una situación
difícil, pero le advierto que no lo haga. los
La razón para mostrar este intercambio de los argumentos del evento
es advertirle sobre los peligros de modificar el objeto del evento.
directamente en un oyente.
