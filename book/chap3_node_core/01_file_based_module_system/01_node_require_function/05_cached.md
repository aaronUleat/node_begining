#### Cached

Como sabe del Capítulo 2, leer algo del sistema de archivos es un orden de magnitud más lento que leerlo
desde la memoria RAM. Por lo tanto, después de la primera vez que se realiza una llamada obligatoria a un archivo en 
particular, el módulo.exportaciones se almacena en caché. los
la próxima vez que se realice una llamada para requerir que se resuelva en el mismo archivo (en otras palabras, 
no importa cuál sea el original).
la ruta relativa del archivo que se pasa a la llamada requerida es siempre que el archivo de destino sea el mismo), 
la variable module.exports
del archivo de destino se devuelve de la memoria, manteniendo las cosas rápido. El listado 3-8 muestra esta 
diferencia de velocidad con una
simple ejemplo
Listing 3-8. intro/cached/bar.js

```
var t1 = new Date().getTime();
var foo1 = require('./foo');
console.log(new Date().getTime() - t1); // > 0
var t2 = new Date().getTime();
var foo2 = require('./foo');
console.log(new Date().getTime() - t2); // approx 0
```

