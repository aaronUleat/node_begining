## PLAYING WITH AMD

Ahora que sabemos cómo iniciar una aplicación de navegador RequireJS, veamos cómo podemos importar / exportar variables en
módulos Crearemos tres módulos: app.js, foo.js y bar.js. Usaremos foo.js y bar.js desde app.js
utilizando AMD. Esta demostración está disponible en el capítulo 3 / amd / carpeta de reproducción.

Para exportar algo desde un módulo, simplemente puede devolverlo desde la devolución de llamada definida. Por ejemplo, vamos a crear un
archivo foo.js que exporta una función simple, como se muestra en el Listado 3-49.

Listing 3-49. amd/play/client/foo.js

```
define([], function() {
   var foo = function() {
       console.log("foo was called");
   }
   return foo; // function foo is exported.
});

```

Para estar al frente de todos los módulos que necesitamos en un archivo, 
la raíz del archivo contiene una llamada para definir. Cargar
Los módulos ./foo y ./bar en app.js en la misma carpeta, la llamada de definición será como se muestra en el Listado 3-50.

Listing 3-50. amd/play/client/app.js

```
define(['./foo', './bar'], function (foo, bar) {
// use foo and bar here
});
```

define puede tomar un argumento especial llamado exportaciones, que se comporta 
de manera similar a la variable de exportaciones en Node.js.
Creemos el módulo bar.js usando esta sintaxis, como se muestra en el Listado 3-51.

Listing 3-51. amd/play/client/bar.js

```
define(['exports'], function (exports) {
    var bar = exports.log = function () {
    console.log('bar.log was called');
};
});
```


Tenga en cuenta que solo puede usar las exportaciones para adjuntar las variables que desea exportar (por ejemplo, exports.log =
/ * algo * /), pero no puede asignarlo a otra cosa (exportaciones = / * algo * /) ya que eso rompería el
referencia la variable de exportaciones monitoreada por RequireJS. Conceptualmente es bastante similar a la variable de exportaciones en
Node.js. Ahora, completemos app.js y consumamos ambos módulos, como se muestra en el Listado 3-52.

El beneficio real de usar esta sintaxis alternativa (AMD) para los módulos se hace evidente cuando miramos la red
pestaña dentro de las herramientas de depuración de Chrome, como se muestra en la Figura 3-3.


Puede ver que foo.js y bar.js se descargaron en paralelo tan pronto como se descargó app.js, y
RequireJS encontró que app.js necesita que foo.js y bar.js funcionen debido a la llamada a definir.

