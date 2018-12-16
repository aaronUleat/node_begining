## Overriding Functions in Child Classes

Para anular las funciones principales pero aún utilizar algunas de
las funciones originales, simplemente haga lo siguiente:

• Crear una función en el prototipo hijo con el mismo nombre.
• Llame a la función principal de la misma manera que llamamos
al constructor principal, básicamente usando el
Parent.prototype.memberfunction.call (esto, / * cualquier sintaxis original args * /).

Listing 5-9. oo/6override.js

```
// util function

var inherits = require("util").inherits;

// base

function Base() {
    this.message = "message";
}
Base.prototype.foo = function () {
    return this.message + " base foo";
}

//Child

function Child() {
    Base.call(this);
}
inherits(Child, Base);

// Override parent behavior in child

Child.prototype.foo = function () {
    // Call base implementation + customize
    return Base.prototype.foo.call(this) + "child foo";
}

// TEST

var child = new Child();
console.log(child.foo());
```

Simplemente creamos la función secundaria Child.prototype.foo y
llamamos la función principal desde dentro
Base.prototype.foo.call (this).