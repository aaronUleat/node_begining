#### Object Factories
Como hemos mostrado, el mismo objeto se devuelve cada vez que una llamada a require se resuelve en el mismo archivo en 
un proceso Node.js.
Si desea alguna forma de nuevo mecanismo de creación de objetos para cada llamada a función requerida, puede exportar 
una función
desde el módulo fuente que devuelve un nuevo objeto. Luego require el módulo en su destino y llame a esta
Función importada para crear un nuevo objeto. Se muestra un ejemplo en el Listado 3-13 donde exportamos una función y 
luego
usamos esta función para crear un nuevo objeto, como se muestra en el Listado 3-14

Listing 3-13. intro/factory/foo.js
```
module.exports = function () {
    return {
        something: 123
    };
};
```

Listing 3-14. intro/factory/app.js

```
var foo = require('./foo');
// create a new object
var obj = foo();
// use it
console.log(obj.something); // 123
```
Tenga en cuenta que incluso puede hacer esto en un solo paso (en otras palabras, require ('./ foo') ();)


