## The Constructor Property

Por defecto, cada función obtiene un miembro llamado `prototype`,
que ya hemos visto. Por defecto, este miembro
tiene una propiedad de constructor que apunta a la función en sí.
Listado 5-6 demuestra esto.

Listing 5-6. oo/4constructor/1basic.js
```
function Foo() {}
console.log(Foo.prototype.constructor === Foo);
```

¿Cuál es la ventaja de tener esta propiedad? Después de
crear una instancia utilizando una función (por ejemplo,
instance = new Foo), puede obtener acceso al constructor
utilizando un simple ejemplar de instance.constructor (que es
Realmente voy a estar mirando a la instancia .__ proto __. constructor).
El listado 5-7 muestra esto en un ejemplo donde usamos
el nombre de la propiedad de las funciones nombradas (función Foo)
para desconectar lo que creó el objeto.

Listing 5-7. oo/4constructor/2new.js

```
function Foo() {}
var foo = new Foo();

console.log(foo.constructor.name);
console.log(foo.constructor === Foo);
```

Tener conocimiento de la propiedad del constructor le
permite hacer una reflexión en tiempo de ejecución en instancias si lo necesita.

