#### Conditionally Load a Module

require se comporta como cualquier otra función en JavaScript. No tiene propiedades especiales. Esto significa que puedes
elejir llamarlo según alguna condición y, por lo tanto, cargue el módulo solo si lo necesita, como se muestra en el Listado 3-6.

```
if(iReallyNeedThisModule){
var foo = require('./foo');
}
```
Esto le permite cargar un módulo solo en el primer uso, según sus requisitos.