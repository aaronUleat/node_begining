### Os Module

El módulo os proporciona algunas funciones y propiedades de 
utilidad básicas relacionadas con el sistema operativo (pero vitales). Usted puede
acceder a él mediante una llamada require ('os'). Por ejemplo, 
si queremos saber el uso actual de la memoria del sistema, podemos usar
Funciones os.totalmem () y os.freemem (). Estos se demuestran en el Listado 3-40.

Listing 3-40. core/os/memory.js

```
var os = require("os");
var gigaByte = 1 / (Math.pow(1024, 3));
console.log("Total Memory", os.totalmem() * gigaByte, "GBs");
console.log("Available Memory", os.freemem() * gigaByte, "GBs");
console.log("Percent consumed", 100 * (1 - os.freemem() / os.totalmem()));
```


Una instalación vital proporcionada por el módulo os es 
la información sobre la cantidad de CPU disponibles, como se muestra en
Listado 3-41.


```
var os = require("os");
console.log("This machina has", os.cpus().length, 'CPUs');
```

Aprenderemos cómo aprovechar este hecho en el Capítulo 13 cuando analicemos la escalabilidad.