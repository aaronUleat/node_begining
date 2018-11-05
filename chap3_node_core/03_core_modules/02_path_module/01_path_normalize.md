### path.normalize(str)

Esta función corrige las barras para que sean específicas del sistema operativo, se encarga de ello. 
y .. en la ruta, y también elimina barras duplicadas.
Un ejemplo rápido para demostrar estas características se muestra en el Listado 3-34.

Listing 3-34. core/path/normalize.js

```
var path = require('path');
// Fixes up .. and .
// logs on Unix: /foo
// logs on Windows: \foo
console.log(path.normalize('/foo/bar/..'));
// Also removes duplicate '//' slashes
// logs on Unix: /foo/bar
// logs on Windows: \foo\bar
console.log(path.normalize('/foo//bar/bas/..'));
```
