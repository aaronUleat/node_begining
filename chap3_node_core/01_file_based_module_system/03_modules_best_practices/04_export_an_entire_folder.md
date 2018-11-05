#### Export an Entire Folder

Si tiene demasiados módulos que van juntos y continúa importando a otros archivos, intente evitar repetir
importar, como se muestra en el Listado 3-21.

Listing 3-21. Avoid Repeating Huge Import Blocks

```
var foo = require = require("../something/foo");
var bar = require = require("../something/bar");
var bas = require = require("../something/bas");
```
En su lugar, cree un solo index.js en la carpeta de algo. En index.js, importa todos los módulos una vez y luego
exportarlos desde este módulo, como se muestra en el Listado 3-22.

Listing 3-22. Sample index.js

```
exports.foo = require("./foo");
exports.bar = require("./bar");
exports.baz = require("./baz");
```
Ahora simplemente puede importar este index.js cuando necesite todas estas cosas:

```
var something = require('../something/index');
```
Motivo: Es más mantenible. En el lado de la exportación, los módulos individuales (archivos individuales) siguen siendo más pequeños;
no es necesario poner todo en un solo archivo para que pueda importarlo fácilmente en otro lugar. Solo necesitas crear un
archivo index.js. En el lado de la importación, tiene menos llamadas obligatorias para escribir (y mantener).