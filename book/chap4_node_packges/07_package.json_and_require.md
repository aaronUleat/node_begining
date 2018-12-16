## Package.json and require

La mayor parte de package.json que hemos visto ha sido para NPM. 
Todo lo que hacía era gestionar nuestras dependencias y ponerlas.
en node_modules. A partir de este momento, se requieren trabajos 
como ya hemos mostrado. Busca un archivo / carpeta JavaScript
en los node_modules que coinciden con lo que pedimos que se carguen, 
por ejemplo, foo in require ('foo'). Ya lo tenemos
muestra que si se resuelve en una carpeta, Node.js intenta cargar 
index.js desde esa carpeta como resultado de la carga del módulo.

Hay una cosa final acerca de la función de requerimiento que necesita 
conocer. Puedes usar package.json para
la redirección requiere cargar un archivo diferente desde una carpeta 
en lugar del predeterminado (que buscaría un index.js). Esto es
hecho utilizando la propiedad principal en un package.json. 
El valor de esta propiedad es la ruta al archivo JavaScript que desea
carga. Veamos un ejemplo y creamos una estructura de directorios, como se muestra en el Listado 4-29.

Listing 4-29. Project Structure for Demo Code chapter4/mainproperty

```
|-- app.js
|-- node_modules
    |-- foo
        |-- package.json
        |-- lib
            |-- main.js
```

main.js es un archivo simple que se registra en la consola para indicar que se cargó, como se muestra en el Listado 4-30.

Listing 4-30. mainproperty/node_modules/foo/lib/main.js

```
console.log('foo main.js was loaded');
```

Dentro de package.json, simplemente apunte main a main.js en la carpeta lib:

```
{
    "main" : "./lib/main.js"
}
```


Esto significa que si alguien require ('foo'), 
Node.js buscaría en package.json, vea la propiedad principal,
y ejecute './lib/main.js'. Así que vamos a requerir este módulo 
en nuestra app.js. Si lo ejecuta (node ​​app.js), verá que
de hecho main.js fue cargado.

```
require('foo');
```

Una cosa que vale la pena mencionar es que "main" es la única propiedad 
que requiere y por lo tanto el nodo ejecutable se preocupa
acerca de. Todas las demás propiedades en package.json 
son para el ejecutable NPM / npm, que está diseñado específicamente para el paquete
administración.

La ventaja de tener esta propiedad "principal" es que permite 
a los desarrolladores de bibliotecas libertad total sobre cómo
Quieren diseñar su proyecto y mantener la estructura tan clara como quieran.

Muy a menudo, las personas colocan paquetes Node.js simples 
(los que pueden ir en un archivo) en un nombre de archivo que
coincide con el nombre del paquete packageName.js y 
luego crea un package.json para señalar el nombre del archivo. Por ejemplo,
esto es lo que hace rimraf: tiene un rimraf.js y eso es 
lo que señala la propiedad principal de package.json, como se muestra en
Listado 4-31.

Listing 4-31. package.json from the rimraf npm Module Showing the Main Property

```
{
    "name": "rimraf",
    "version": "2.2.7",
    "main": "rimraf.js",
```






