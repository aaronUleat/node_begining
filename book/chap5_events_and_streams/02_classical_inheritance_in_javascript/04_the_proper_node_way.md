## The Proper Node.js Way

El módulo util util (requiere ('utils')) que analizamos en el
Capítulo 3 proporciona una pequeña y encantadora función para crear el
prototipo de la cadena para nosotros para que no tenga que meterse
con `__proto__` (la propiedad no estándar) usted mismo. La función
se denomina `hereda` y toma una clase secundaria seguida de una clase
primaria, como se muestra en el ejemplo del Listado 5-8. Clase de aves
Amplía la clase Animal, que vimos anteriormente.

Listing 5-8. oo/5nodejs/util.js

```
// util function

var inherits = require('util').inherits;

function Animal(name) {
    this.name = name;
}

Animal.prototype.walk = function (destination) {
    console.log(this.name, 'is walking to', destination);
}


// Bird Child Class

function Bird(name) {
    Animal.call(this, name);
}

inherits(Bird, Animal);

// Aditional member functions

Bird.prototype.fly = function (destination) {
    console.log(this.name, "is flying to", destination);
}

var bird = new Bird('sparrow');
bird.walk('sydney'); // sparrow is walking to sydney
bird.fly('melbourne'); // sparrow is flying to melbourne
```
Hay dos cosas a tener en cuenta:

* Llame al constructor principal: Animal.call (this, / * cualquier argumento original * /)
* Configurar la cadena prototipo: hereda (Bird, Animal);

Lo suficientemente simple para convertirse en una segunda naturaleza,
¡esto es todo lo que necesita hacer para heredar clases!