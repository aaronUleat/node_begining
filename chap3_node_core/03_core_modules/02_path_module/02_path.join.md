### path.join([str1], [str2], ...)

Esta función une cualquier número de rutas, teniendo en cuenta el sistema operativo. Una muestra se muestra en
Listado 3-35.

Listing 3-35. core/path/join.js

```
var path = require('path');
// logs on Unix: foo/bar/bas
// logs on Windows: foo\bar\bas
console.log(path.join('foo', '/bar', 'bas'));
```


