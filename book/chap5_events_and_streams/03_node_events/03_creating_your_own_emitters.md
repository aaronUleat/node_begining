## Creating Your Own Event Emitters

Ahora que es un experto en el manejo y aumento de eventos
en Node.js, se abre una gran cantidad de área de código abierto
para ti. Un número de bibliotecas exporta clases que
heredan de EventEmitter y, por lo tanto, siguen el mismo evento
Mecanismo de manejo. En esta etapa, es útil para usted
saber cómo puede extender EventEmitter y crear un público
Clase que tiene toda la funcionalidad de EventEmitter incorporada.

Listing 5-28. events/11custom.js

```
var EventEmitter = require('events').EventEmitter;
var inherits = require('util').inherits;

// Custom Class

function Foo() {
    EventEmitter.call(this);
}

inherits(Foo, EventEmitter);

// Sample member function that raises an event

Foo.prototype.connect = function() {
  this.emit('connected');
};

// Usage

var foo = new Foo();
foo.on('connected', function() {
    console.log("connected raised!");
});
foo.connect();
```

Puede ver que el uso de su clase es exactamente el
mismo que si fuera un EventEmitter. Con estas dos líneas simples,
Usted tiene un emisor de eventos personalizado totalmente funcional.


