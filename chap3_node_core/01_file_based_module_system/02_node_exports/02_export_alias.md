#### Exports Alias

Hasta ahora, solo hemos estado exportando un único objeto desde un módulo. Esto se puede hacer simplemente asignando el
Objeto que necesitamos exportar a module.exports. Sin embargo, es un requisito común exportar más de una variable
desde un modulo. Una forma de lograr esto es crear un nuevo objeto literal y asignarlo a module.exports, como se muestra
en el Listado 3-16.

Listing 3-16. intro/exports/foo1.js

```
var a = function () {
    console.log('a called');
};
var b = function () {
    console.log('b called');
};
module.exports = {
    a: a,
    b: b
};
```

Sin embargo, esto es un poco incómodo de administrar porque lo que devuelve el módulo puede ser potencialmente distante en
Términos de las líneas de lo que contiene un módulo. En el Listado 3-16, la función a se define mucho antes del punto en el que
En realidad lo exportamos al mundo exterior. Por lo tanto, una convención común es simplemente adjuntar los objetos que queremos exportar.
a module.exports en línea, como se muestra en el Listado 3-17. Esto es posible porque module.exports está implícitamente establecido en {} por
Node.js, como vimos anteriormente en el Listado 3-15.

Listing 3-17. intro/exports/foo2.js

```
module.exports.a = function () {
    console.log('a called');
};
module.exports.b = function () {
    console.log('b called');
};
```

Sin embargo, escribir module.exports todo el tiempo se vuelve engorroso también. Entonces Node.js nos ayuda creando una
alias para module.exports llamados exportaciones, así que en lugar de escribir module.exports.something cada vez, 
simplemente puede
Utilizar exportaciones. Algo. Esto se muestra en el Listado 3-18.

Listing 3-18. intro/exports/foo3.js
```
exports.a = function() {
    console.log("a called");
}

exports.b = function () {
    console.log("b called");
}
```
Es importante tener en cuenta que las exportaciones son como cualquier otra variable de JavaScript; Node.js 
simplemente hace exports = module.exports para nosotros. 
Si agregamos algo, por ejemplo, foo a exports, que es exports.foo = 123, efectivamente estamos
haciendo module.exports.foo = 123 ya que las variables de JavaScript son referencias, como se discutió en el Capítulo 2.

Sin embargo, si realiza exports = 123, rompe la referencia a module.exports; Es decir, ya no exporta puntos.
a module.exports. Además, no hace que module.exports = 123. Por lo tanto, es muy importante saber que
solo debe usar el alias de exportación para adjuntar cosas y no asignarle cosas directamente. Si desea asignar una sola exportación,
use module.exports = como lo hemos estado haciendo hasta esta sección.

Finalmente, puede ejecutar el ejemplo de código que se muestra en el Listado 3-19 para demostrar que todos 
estos métodos son
Equivalente desde el punto de vista del consumo (importación).

Listing 3-19. intro/exports/app.js

```
var foo1 = require('./foo1');
foo1.a();
foo1.b();
var foo2 = require('./foo2');
foo2.a();
foo2.b();
var foo3 = require('./foo3');
foo3.a();
foo3.b();
```



