## Process Events

Un número de clases dentro del núcleo Node.js heredan de EventEmitter. 
El objeto de proceso global es también una instancia de
EventEmitter, como puede ver en el Listado 5-29.

Listing 5-29. Sample to Demonstrate That Process Is an EventEmitter

```
$ node -e "console.log(process instanceof require('events').EventEmitter)"
true
```