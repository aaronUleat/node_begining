## Underscore

Underscore (npm install underscore) es, con mucho, 
la biblioteca de JavaScript más popular disponible en NPM. Es la biblioteca
con el mayor número de dependientes (otros paquetes que dependen de este paquete).

Se llama subrayado porque crea una variable global "_" cuando 
se usa en el navegador. En nodo, eres libre.
para nombrar la variable devuelta desde require ('guión bajo') 
lo que quieras, pero aún es convencional
var _ = require ('guión bajo').

Underscore proporciona una gran cantidad de soporte de programación 
funcional para JavaScript que se encuentra en otros idiomas, como
Ruby y Python. Todo buen desarrollador de JavaScript debería 
estar familiarizado con él. Tenga en cuenta que los bits de funcionalidad de subrayado
se está agregando a JavaScript central con nuevas versiones, 
pero para funcionar en todos los navegadores y Node.js, se recomienda que
usa el underscore aunque solo por consistencia y menor 
carga cognitiva (por lo que tiene menos cosas que tener en mente al mismo tiempo).


Digamos que tenemos una serie de números y solo necesitamos 
los que son más grandes que 100. Haciendo esto en los viejos tiempos
JavaScript se vería tedioso, como se muestra en el Listado 4-32.

Listing 4-32. popular/underscore/filter/raw.js

```
var foo = [1, 10, 50, 200, 900, 90, 40];

var rawResults = [];

for (i = 0; i < foo.length; i++) {
    if (foo[i] > 100) {
        rawResults.push(foo[i]);
    }
}
console.log(rawResults);
```

El mismo código en el guión bajo es mucho más simple y limpio. 
La función _.filter toma una matriz, pasa cada
elemento de la matriz a una función (segundo argumento), 
y devuelve una matriz que contiene todos los elementos donde el
La segunda función devuelve true. Esto se demuestra en el Listado 4-33.

Listing 4-33. popular/underscore/filter/us.js
```
var foo = [1, 10, 50, 200, 900, 90, 40];

var _ = require("../../../../node_modules/underscore");
var results = _.filter(foo, function (item) {
    return item > 100
});

console.log(results);
```



Antes de continuar, daremos una introducción rápida a 
la programación funcional. Funciones en funcional.
La programación tiene un comportamiento matemático bien definido. 
Si la entrada es la misma, la salida siempre será la misma.
Esta es la definición matemática de una función y no la estructura 
de programación que nosotros como desarrolladores comúnmente
asociarse con el término función. Como un simple ejemplo de 
una función matemática, piensa en la suma. Si foo y bar
son los mismos, entonces foo + bar siempre será el mismo. 
Por lo tanto + es lo que llamamos una función pura. 
Del mismo modo, un JavaScript
función función agregar (a, b) {return a + b} 
es una función pura ya que la salida solo depende de las entradas.

Las funciones puras son fáciles de entender, seguir y, 
por lo tanto, mantener. Lo que impide que el código
Ser puramente funcional es estado. El estado se mantiene
 mediante la mutación (modificación) de objetos. Esto es lo que estamos haciendo en el
Ejemplo en bruto. Estamos mutando la matriz rawResults en un bucle. 
Esto se conoce comúnmente como una forma imperativa de codificación
o pensando Sin embargo, en el ejemplo de subrayado, la función 
de filtro toma dos argumentos y, si los argumentos son los
Igual, el resultado siempre será el mismo. Por lo tanto, es funcional.

Una vez más, la motivación clave para esto es la mantenibilidad. 
Si sabes lo que hace el filtro, es inmediatamente obvio.
de esa única línea se filtra. Hay mucho más que se puede 
decir acerca de la programación funcional, pero esto
Debería haberte molestado lo suficiente para descubrir más.

Ahora veamos otras funciones en el guión bajo. 
La función _.map toma una matriz, llama a una función para cada
Elemento de la matriz que almacena el valor de retorno 
como resultado y devuelve una nueva matriz que consta de todos los resultados. Es básicamente
asigna una matriz de entrada, a través de una función, 
a una matriz de salida. Por ejemplo, digamos que queremos multiplicar cada elemento
de una matriz con 2. Podemos hacerlo simplemente usando _.map como se muestra en el Listado 4-34.

Listing 4-34. popular/underscore/map/app.js

```
var foo = [1,2,3,4];

var _ = require("../../../../node_modules/underscore");
var results = _.map(foo, function(item) {
    return item * 2;
})

console.log(results);
```

Otro escenario común en las colecciones es obtener todos 
los elementos excepto aquellos que coinciden con una condición. Para esto, nosotros
puede usar _.reject. En el Listado 4-35 se muestra un ejemplo 
para obtener solo los elementos impares en una matriz.

Listing 4-35. popular/underscore/reject/app.js

```
var _ = require("../../../../node_modules/underscore");

var odds = _.reject([1,2,3,4,5,6], function(num) {
   return num % 2  == 0;
});

console.log(odds);
```

Para obtener el elemento máximo de una matriz, 
use _.max, para obtener el uso mínimo _.min:

```
var _ = require("underscore");
var numbers = [10,5,100,2,1000];

console.log(_.min(numbers));
console.log(_.max(numbers));
```
Eso es suficiente para que comiences. Para obtener más información 
sobre las funciones proporcionadas por el subrayado, eche un vistazo a la
documentación en línea en http://underscorejs.org/.


