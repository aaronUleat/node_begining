## Installing an NPM Package

Instalemos un módulo, por ejemplo, subrayado 
(www.npmjs.org/package/underscore) en una carpeta. Para descargar el
última versión de guión bajo, simplemente ejecute el 
comando que se muestra en el Listado 4-20.

Listing 4-20. Installing an NPM Module

```
$ npm install underscore
```

Esto descargará la última versión de guión bajo de npmjs.org y 
la colocará en node_modules / guión bajo
en la carpeta actual. Para cargar este módulo, todo lo que necesita hacer ahora 
es realizar una llamada ('guión bajo'). Esto es
demostrado en el Listado 4-21, donde cargamos la biblioteca de subrayado 
y simplemente generamos el elemento mínimo de un
Array a la consola.

Listing 4-21. Using an Installed Module

```
// npm/install/app.js
var _ = require('underscore');
console.log(_.min([3, 1, 2])); // 1
```

Más adelante en este capítulo, veremos el guión bajo y otros 
paquetes populares de NPM. sin embargo, en este punto el
el foco está en la herramienta de línea de comandos NPM.

