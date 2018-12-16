## Using require with Global Modules

Los módulos instalados globalmente no deben utilizarse con una 
llamada a función requerida en su código, aunque muchos
los paquetes que admiten el indicador global también admiten 
la instalación local en su proyecto (la carpeta node_modules).
Si se instala localmente, es decir, sin el indicador –g, 
puede usarlos con la función require como ya hemos visto.
Un ejemplo bueno y simple de esto es el módulo rimraf (www.npmjs.org/package/rimraf).

Si rimraf está instalado globalmente (npm install -g rimraf), proporciona 
una utilidad de línea de comandos que puede usar
multiplataforma para eliminar de forma recursiva y forzada 
un directorio (efectivamente rm -rf en la jerga de la línea de comandos de Unix).
Para eliminar un directorio foo después de instalar rimraf globalmente, simplemente ejecute rimraf foo.

Para hacer lo mismo desde su código Node.js, instale rimraf 
localmente (npm install rimraf), cree una app.js como se muestra
en el Listado 4-28, y ejecútelo (node ​​app.js).

Listing 4-28. global/rimrafdemo/app.js

```
var rimraf = require("Listing 4-28. global/rimrafdemo/app.js");
rimraf("./foo", function (err) {
    if(err) console.log("Error occured:", err);
    else console.log("Directory foo deleted");
})
```

En aras de la exhaustividad, vale la pena mencionar que 
hay una forma de cargar módulos desde una ubicación global
Si establece la variable de entorno NODE_PATH. 
Pero esto es fuertemente desaconsejado cuando se consumen módulos y
Debería usar dependencias localmente (package.json y node_modules).
