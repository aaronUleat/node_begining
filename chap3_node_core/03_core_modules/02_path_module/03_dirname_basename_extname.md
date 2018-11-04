### dirname, basename, and extname

Estas funciones son tres de las funciones más útiles en el módulo de ruta. path.dirname te da el directorio
parte de una cadena de ruta específica (independiente del sistema operativo) 
y path.basename le da el nombre del archivo. nombre de ruta
le da la extensión de archivo. Un ejemplo de estas funciones se muestra en el Listado 3-36.e

Listing 3-36. core/path/dir_base_ext.js

```
var path = require('path');
var completePath = '/foo/bar/bas.html';
// Logs : /foo/bar
console.log(path.dirname(completePath));
// Logs : bas.html
console.log(path.basename(completePath));
// Logs : .html
console.log(path.extname(completePath));
```

Ahora debe tener una comprensión de cómo usar la ruta y cuáles son sus objetivos de diseño. Camino tiene algunos otros
funciones útiles que puede explorar en línea utilizando la documentación oficial de Node.js (http://nodejs.org/api/
path.html).
