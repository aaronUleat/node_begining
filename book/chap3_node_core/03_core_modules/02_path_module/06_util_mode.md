### util Module

El módulo util contiene una serie de funciones útiles 
que son de propósito general. Puedes acceder al módulo util
utilizando una llamada require ('util'). 
Para cerrar sesión en la consola con una marca de tiempo, puede usar el util.log
función, como se muestra en el Listado 3-42.

Listing 3-42. core/util/log.js

```
var util = require('util');
util.log('sample message'); // 27 Apr 18:00:35 - sample message
```

Otra característica extremadamente útil es el formato de cadena usando 
la función util.format. Esta función es similar a
La función printf C / C ++. El primer argumento es una cadena que 
contiene cero o más marcadores de posición. Cada marcador de posición
luego se reemplaza utilizando los argumentos restantes según el significado 
del marcador de posición. Los marcadores de posición populares son
% s (usado para cadenas) y% d (usado para números). Estos se demuestran en el Listado 3-43.

Listing 3-43. core/util/format.js

```
var util = require('util');
var name = 'nate';
var money = 33;
```

Además, util tiene algunas funciones para verificar 
si algo es de un tipo en particular (isArray, isDate, isError).
Estas funciones se muestran en el Listado 3-44.

