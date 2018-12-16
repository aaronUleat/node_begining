## Unsubscribing

La siguiente pregunta es cómo anular la suscripción a un evento.
EventEmitter tiene una función removeListener que
toma un nombre de evento seguido de un objeto de función para
eliminar de la cola de escucha. Una cosa a tener en cuenta es que usted
debe tener una referencia a la función que desea eliminar de la
cola de escucha y, por lo tanto, no debe usar un
Función anónima (en línea). Esto se debe a que dos funciones
en JavaScript no son iguales si sus cuerpos son iguales, como
se muestra a continuación en el Listado 5-18, ya que
estos son dos objetos de función diferentes y distintos.

Listing 5-18. Sample to Demonstrate Function Inequality

```
$ node -e "console.log(function(){} == function(){})"
false
```

Listing 5-19 shows how you can unsubscribe a listener.

```
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
```

En este ejemplo, cancelamos la suscripción del evento una vez que se
ha generado una vez. Como resultado, el segundo evento pasa desapercibido.

