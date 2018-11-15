## Browserify Demo

En esta sección, crearemos algunos módulos simples de Node.js y luego usaremos Browserify para convertirlos a la sintaxis de AMD
Y ejecútalos en el navegador. Todo el código para este ejemplo está presente en la carpeta chapter3 / amd / browserify.

En primer lugar, crearemos tres archivos que siguen la especificación del módulo Node.js / CommonJS (el código está en la
capítulo3 / amd / browserify / carpeta de nodo). Estamos utilizando foo.js (Listado 3-55) y bar.js (Listado 3-56) de app.js
(Listado 3-57) utilizando CommonJS. Puede ejecutar este código en Node.js para ver que funciona como se esperaba.

Listing 3-55. amd/browserify/node/foo.js

```
module.exports = function () {
    console.log("foo was called");
}
```

Listing 3-56. amd/browserify/node/bar.js

```
exports.log = function () {
    console.log("bar.log was called");
}
```

Listing 3-57. amd/browserify/node/app.js

```
var foo = require('./foo');
var bar = require('./bar');
foo();
bar.log();
```

Ahora vamos a convertir este código para que sea un módulo compatible con AMD. En la línea de comandos, ejecute el comando como
se muestra en el Listado 3-58.

```
browserify app.js -o amdmodule.js
```
Esto toma app.js y todas sus dependencias (foo.js y bar.js) y las convierte en una sola AMD compatible.
Módulo amdmodule.js en la misma carpeta. Como paso final, simplemente cargamos este módulo desde nuestro cliente app.js (Listado 3-59)
Para demostrar que funciona en el navegador.

Listing 3-59. amd/browserify/client/app.js

```
define(['../node/amdmodule'], function (amdmodule) {
});
```

Ahora, si iniciamos el servidor (server.js) y abrimos el navegador web (http: // localhost: 3000), verá el
Los mensajes de console.log en las herramientas chrome dev, como se muestra en la Figura 3-5. Hemos portado con éxito el código Node.js
al navegador.

Una cosa a tener en cuenta es que no es posible convertir cada módulo Node.js en un módulo de navegador. Específicamente,
Los módulos Node.js que dependen de las funciones que solo están disponibles en el servidor (como el sistema de archivos) no funcionarán en el
navegador.

Browserify tiene muchas opciones y también puede navegar por los paquetes NPM (node_modules). Puedes aprender mas
sobre Browserify en línea en http://browserify.org/.




