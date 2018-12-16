## Creating a Readable Stream

Como se indicó, simplemente hereda de la clase de lectura. 
Implementas el miembro _read en tu clase, que se llama
por la API de flujo interno cuando alguien solicita datos para leer. 
Si tiene datos que desea transmitir
(empujado), usted llama a la función miembro heredada empujar 
pasar en los datos. Si llamas push (nulo), esto indica el final.
de la secuencia de lectura.

El Listado 5-41 es un ejemplo simple de un flujo legible 
que devuelve 1-1000. Si ejecuta esto, verá todos estos
Números impresos (como canalizamos a stdout).

Listing 5-41. streams/5createReadable/counter.js

```
var Readable = require("stream").Readable;
var util = require("util");

function Counter() {
    Readable.call(this);
    this._max = 1000;
    this._index = 1;
}

util.inherits(Counter, Readable);

Counter.prototype._read = function () {
    var i = this._index++;
    if (i > this._max)
        this.push(null);
    else {
        var str = ' ' + i;
        this.push(str);
    }
}

// Usage, same as any other readable stream
var counter = new Counter();
counter.pipe(process.stdout);
```

Como puede ver, la clase Readable subyacente proporciona 
la mayor parte de la lógica de flujo para usted.

