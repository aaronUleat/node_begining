#### Shared State

Tener algún mecanismo para compartir el estado entre módulos es útil en varios contextos. Dado que los módulos se 
almacenan en caché,
cada módulo que requiera foo.js obtendrá el mismo objeto (mutable) si devolvemos un objeto foo desde un módulo
foo.js. El listado 3-9 muestra este proceso con un ejemplo simple en el que exportamos un objeto. Este objeto es
modificado en app.js, como se muestra en el Listado 3-10. Esta modificación afecta lo que es devuelto por require 
en bar.js, como
se muestra en el Listado 3-11. Esto le permite compartir objetos en memoria entre módulos que son útiles para cosas como
Uso de módulos para la configuración. Una muestra de ejecución se muestra en el Listado 3-12.

Listing 3-9. intro/shared/foo.js
```
module.exports = {
something: 123
};
```
Listing 3-10. intro/shared/app.js
```
var foo = require('./foo');
console.log('initial something:', foo.something); // 123
// Now modify something:
foo.something = 456;
// Now load bar:
var bas = require('./bar');
```
Listing 3-11. intro/shared/bar.js

```
var foo = require('./foo');
console.log('in another module:', foo.something); // 456
```

Listing 3-12. Sample Run of intro/shared/app.js

```
$ node app.js
initial something: 123
in another module: 456
```





