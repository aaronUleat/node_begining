## Node.js File-Based Module System

Kevin Dongaoor creó CommonJS en 2009 con el objetivo de especificar un ecosistema para módulos de JavaScript en el
servidor. Node.js sigue la especificación del módulo CommonJS. Los siguientes son algunos puntos destacados del 
sistema de módulos:

* Cada archivo es su propio módulo.
* Cada archivo tiene acceso a la definición de módulo actual utilizando la variable de módulo.
* La exportación del módulo actual está determinada por la variable module.exports.
* Para importar un módulo, use la función *require* disponible globalmente.

Como siempre, es mejor saltar directamente al código. Consideremos un ejemplo simple donde queremos compartir una
Funciona en el archivo foo.js con varias partes de nuestra aplicación. Para exportar la función desde el archivo, 
simplemente la asignamos a
módulo.exportaciones, como se muestra en el Listado 3-1.

Listing 3-1. intro/base/foo.js
```
module.exports = function () {
console.log('a function in file foo');
};
```

Para utilizar esta función desde un archivo bar.js, simplemente importamos foo utilizando el requerimiento disponible 
globalmente
funcione y almacene el valor devuelto en una variable local, como se muestra en el Listado 3-2.

Listing 3-2. intro/base/bar.js

```
var foo = require('./foo');
foo(); // logs out : "a function in file foo"
```

Node.js fue diseñado para ser simple, y esto se muestra en su sistema de módulos. Ahora que hemos visto un simple
Por ejemplo, profundicemos en varios detalles, comenzando con la función require.