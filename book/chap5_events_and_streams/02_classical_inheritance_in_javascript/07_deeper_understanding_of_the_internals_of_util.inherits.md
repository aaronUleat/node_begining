## Deeper Understanding of the Internals of util.inherits

No necesitas pasar por esta sección, pero vale la pena solo para
que puedas sentarte en la mesa de los niños geniales. Dijimos eso
no se recomienda configurar __proto__ manualmente, ya que no
forma parte del JavaScript estandarizado.
Afortunadamente, hay una función en JavaScript que puede crear un
objeto en blanco con un __proto__ específico ya establecido.
La función se llama Object.create y la forma en que funciona se
muestra en el Listado 5-11.
Listing 5-11. oo/8internals/1check.js

```
var foo = {};
var bar = Object.create(foo);
console.log(bar.__proto__ === foo); // true
```

En este ejemplo, simplemente verificamos que el objeto recién creado
(es decir, la barra) tiene su miembro __proto__ establecido en
lo que pasamos a Object.create (en otras palabras, foo).
Puede usarse para herencia como se muestra en el Listado 5-12.

Listing 5-12. oo/8internals/2inherit.js

```
// Aninal Base Class

function Animal() {}
Animal.prototype.walk = function () {
    console.log('walking');
};

// Bird Child Class

function Bird() {}
Bird.prototype = Object.create(Animal.prototype);

var bird = new Bird();
bird.walk();
```

En comparación con el mecanismo original no estándar __proto__
que mostramos anteriormente, aquí simplemente reemplazamos a Bird.
prototype .__ proto__ = Animal.prototype con lo que efectivamente
es Bird.prototype = {__proto__: Animal.
prototipo }.


Este mecanismo hereda correctamente los miembros del padre,
pero crea un pequeño problema. Cuando nosotros
reasignado Bird.prototype, la información del constructor
que estaba allí en Bird.prototype.constructor se perdió
porque reasignamos Bird.prototype a un objeto completamente nuevo.
Para recuperar la propiedad del constructor, una solución simple
es pasar un segundo parámetro a Object.create, que
especifica propiedades adicionales para agregar al objeto
ser creado. En el Listado 5-13, especificamos que el
constructor es una propiedad que apunta a la función en sí, que es
lo que originalmente era Bird.prototype.constructor
(recuerde que Bird.prototype.constructor === Bird).

Listing 5-13. oo/8internals/3inheritBetter.js

```
// Animal Base class
function Animal() {}

Animal.prototype.walk = function () {
    console.log("Walking")
}

// Bird Child Class
function Bird() {}

Bird.prototype = Object.create(Animal.prototype, {
   constructor: {
       value: Bird,
       enumerable: false,
       writable: true,
       configurable: true
   }
});

var bird = new Bird();
bird.walk();

console.log(bird.constructor == Bird);
```

Y esta es exactamente la implementación que se encuentra
en el módulo util de Node.js (que está escrito en JavaScript).
La implementación directamente desde la fuente se muestra en el Listado 5-14.

Listing 5-14. Code Retrieved from Node.js source util.js

```
exports.inherits = function(ctor, superCtor) {
    ctor.super_ = superCtor;
    ctor.prototype = Object.create(superCtor.prototype, {
        constructor: {
            value: ctor,
            enumerable: false,
            writable: true,
            configurable: true
        }
    });
};
```

Una cosa más que hace la función heredada es que agrega una propiedad
super_ a la clase secundaria, que apunta a la
clase padre Esto es simplemente para la convención para que sepa
que este prototipo de función secundaria ha recibido miembros
de esta super_ class al depurar o escribir código basado en la reflexión.



