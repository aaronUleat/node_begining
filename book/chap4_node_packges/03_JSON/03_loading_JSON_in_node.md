## Loading JSON in Node.js

Dado que JSON es una parte tan importante de la web, Node.js lo 
ha adoptado completamente como un formato de datos, incluso a nivel local. Usted puede
cargue un objeto JSON del sistema de archivos local de 
la misma manera que carga un módulo de JavaScript. Cada vez dentro de la
secuencia de carga del módulo, si no se encuentra un archivo.js, 
Node.js busca un archivo.json. Si se encuentra, devuelve un JavaScript
objeto que representa el objeto JSON. Trabajemos en un ejemplo simple. 
Crea un archivo config.json con una sola tecla foo
y un valor de cadena (que se muestra en el Listado 4-14).

Listing 4-14. json/filebased/config.js

```
{
    "foo": "this is the value for foo"
}
```

Ahora, carguemos este archivo como un objeto JavaScript en 
app.js y desconectemos el valor de la clave foo (que se muestra en el Listado 4-15).

Listing 4-15. json/filebased/app.js

```
var config = require('./config');
console.log(config.foo); // this is the value for foo
```

Esta simplicidad de cargar JSON explica por qué tantas 
bibliotecas en la comunidad Node.js confían en usar un JSON
El archivo como mecanismo de configuración.



