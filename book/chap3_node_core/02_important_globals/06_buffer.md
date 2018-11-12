### Buffer

El Mundo Buffer! JavaScript puro es ideal para las cadenas de Unicode. Sin embargo, para trabajar con flujos 
TCP y el sistema de archivos, el
los desarrolladores agregaron soporte nativo y rápido para manejar datos binarios. 
Los desarrolladores hicieron esto en Node.js usando el Buffer
clase, que está disponible a nivel global.

Convertir cadenas en buffers es realmente simple. Simplemente llame al constructor de la 
clase Buffer (vea la discusión del prototipo
en el Capítulo 2 para revisar las clases en JavaScript) pasando una cadena y una codificación. 
Convertir una instancia de Buffer a una
La cadena es igual de simple. Usted llama al método toString de la instancia de Buffer que pasa en un esquema 
de codificación. Ambos
se muestran en el Listado 3-31.

Listing 3-31. globals/buffer/buffer.js

```
// a string
var str = "Hello Buffer World!";
// From string to buffer
var buffer = new Buffer(str, 'utf-8');
// From buffer to string
var roundTrip = buffer.toString('utf-8');
console.log(roundTrip); // Hello
```



