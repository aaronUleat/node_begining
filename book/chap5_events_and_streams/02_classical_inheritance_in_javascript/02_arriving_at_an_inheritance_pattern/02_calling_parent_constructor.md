## Calling the Parent Constructor

No podemos simplemente llamar al constructor de animales padre
de Bird. Eso es porque si lo hacemos, entonces 'esto' dentro
Animal no se referirá al objeto Bird recién creado
(creado a partir de Bird nuevo). Por lo tanto, tenemos que forzar la
el significado de esto dentro de la función Animal para señalar
el valor de esto dentro de la función Bird. Afortunadamente nosotros
podemos forzar el significado usando la función miembro '.call'
disponible en todas las funciones de JavaScript (proviene de
Función.prototipo). El listado 5-3 presenta una demostración del
miembro de la llamada. Como de costumbre, los comentarios explican.
Que esta pasando.

Listing 5-3. oo/2call.js
```
var foo = {};
var bar = {};
// A function that uses `this`

function func(val) {
    this.val = val;
}

func.call(foo, 123);

func.call(bar, 456);

console.log(foo.val);
console.log(bar.val);
```

Puedes ver que forzamos a `this` dentro de la función` func` a ser foo y luego a la barra. ¡Genial! Ahora que sabemos
cómo forzar esto, vamos a usarlo para llamar al padre, como se muestra en el Listado 5-4.

Listing 5-4. Calling the Parent Constructor

```
function Animal(name) {
    this.name = name;
}

Animal.prototype.walk = function (destination) {
    console.log(this.name, 'is walking to', destination);
}

function Bird(name) {
    Animal.call(this, name)
}

var bird = new Bird("sparrow");
console.log(bird);
```


Usted usa este patrón (Parent.call (this, / * args adicionales * /))
cada vez que necesita llamar a un padre
constructor. Ahora tienes una firme comprensión
funcional de por qué esto es.
