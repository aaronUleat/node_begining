## Setting Up the Prototype Chain

Necesitamos un mecanismo para que cuando creemos un nuevo Bird
(como, bird = new Bird), su cadena prototipica contenga todos
las funciones del prototipo principal (por ejemplo, bird .__ proto __.__ proto __. walk).
Esto se puede hacer simplemente si
hacer Bird.prototype .__ proto__ = Animal.prototype.

Este proceso funciona porque cuando haremos bird = new Bird, obtendremos
bird .__ proto __.__proto__ = Animal.prototype y eso hará que los miembros
prototipo principales (por ejemplo, Animal.prototype.walk)
disponible en el prototipo infantil
(bird .__ proto __.__ proto __. walk), que fue el resultado deseado. Listado 5-5
muestra un ejemplo de código simple.

Listing 5-5. oo/3prototype.js

```
// Animal Base class

function Animal(name) {
    this.name = name;
}

Animal.prototype.walk = function (destination) {
    console.log(this.name, 'is walking to', destination);
};

var animal = new Animal("elephant");
animal.walk("melbourne");

// Bird child Class

function Bird(name) {
    Animal.call(this, name);
}

Bird.prototype.__proto__ = Animal.prototype;
Bird.prototype.fly = function (destination) {
    console.log(this.name, 'is flying to', destination);
}

var bird = new Bird('sparrow');
bird.walk('sydney'); // sparrow is walking to sydney
bird.fly('melbourne'); // sparrow is flying to melbourne
```

Para comprender cómo se realiza la búsqueda de un miembro heredado
(bird.walk en nuestro ejemplo), eche un vistazo a
Figura 5-2.

Tenga en cuenta que no se recomienda modificar manualmente la
propiedad __proto__, ya que no forma parte del ECMAScript
estándar. Discutiremos una forma más estándar de configurar el
prototipo en breve, pero el principio que se muestra aquí hace que
Eres un experto en herencia prototípica de JavaScript.
