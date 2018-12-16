## Consuming Readable Streams

Ya lo hemos dicho muchas veces que las transmisiones funcionan 
en función de los eventos. El evento más importante para un flujo legible.
es 'legible'. Este evento se genera siempre que haya nuevos 
datos para leer de un flujo. Una vez dentro del evento
manejador, puede llamar a la función de lectura en el flujo para 
leer los datos del flujo. Si este es el final de la secuencia, el
La función de lectura devuelve un valor nulo, como se muestra en el Listado 5-38.

Listing 5-38. streams/3readable/basic.js

```
process.stdin.on('readable', function() {
   var buf = process.stdin.read();
   if (buf != null) {
       console.log("Got: " );
       process.stdout.write(buf.toString());
   } else {
       console.log("Read complete!");
   }
});
```

Listing 5-39. Sample Run of streams/3readable/basic.js

```
$ echo 'foo bar bas' | node basic.js
Got:
'foo bar bas'
Read complete!
```