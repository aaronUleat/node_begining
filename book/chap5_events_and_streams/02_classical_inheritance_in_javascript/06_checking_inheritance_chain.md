## Checking Inheritance Chain

Configurar una cadena de prototipos (__proto __.__ proto__)
como hemos visto tiene una ventaja adicional, ya que le permite
para verificar si una instancia de objeto particular es de una clase
particular, o su clase primaria, o la clase primaria de su padre, y así sucesivamente.
Esto se hace usando el operador instanceof.

En el pseudocódigo cuando haces alguna instancia de Func. Usas este algoritmo:

* Marque someObj .__ proto__ == Func.prototype y si es así, devuelva true.
* Si no es así, marque someObj .__ proto __.__ proto__ == Func.prototype y, si es así, devuelva verdadero.
* Repita subiendo la cadena del prototipo.
* Si __proto__ es nulo y no hemos encontrado una coincidencia, devuelva falso.

Desde el pseudocódigo, puede ver que es muy similar a cómo se realiza
una búsqueda de propiedades. Viajamos por el
Cadena de prototipos hasta que encontremos un __proto__ igual al Func.prototype.
Encontrar una coincidencia es una indicación de la nueva
el operador que se utiliza en la función especificada como el nuevo
operador copia el prototipo a __proto__. Una demostración rápida
del uso de instanceof se muestra en el Listado 5-10.

Listing 5-10. oo/7instanceof.js

```
var inherits = require('util').inherits;

function A() { }
function B() { }; inherits(B, A);
function C() { }

var b = new B();
console.log(b instanceof B); // true because b.__proto__ == B.prototype
console.log(b instanceof A); // true because b.__proto__.__proto__ == A.prototype
console.log(b instanceof C); // false
```
