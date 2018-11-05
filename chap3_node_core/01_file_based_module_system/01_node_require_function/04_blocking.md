#### Blocking

La función require bloquea la ejecución de código adicional hasta que el módulo se haya cargado. Esto significa que el 
código
después de la llamada requerida no se ejecuta hasta que el módulo se ha cargado y ejecutado. Esto te permite evitar
proporcionar una devolución de llamada innecesaria como la que debe hacer para todas las E / S asíncronas en Node.js, 
que se trató en el Capítulo 2.
(Ver Listado 3-7.)

Listing 3-7. Code Snippet to Demonstrate That Modules Are Loaded Synchronously

```
// Blocks execution till module is loaded
var foo = require('./foo');
// Continue execution after it is loaded
console.log('loaded foo');
foo();
```
