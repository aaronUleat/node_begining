## Writing to Writable Streams

Para escribir en un flujo, simplemente llama escribir para escribir algunos datos. 
Cuando haya terminado de escribir (final de la secuencia),
simplemente llame al final. También puede escribir algunos 
datos utilizando la función de miembro final si lo desea, como se muestra en el Listado 5-40.

Listing 5-40. streams/4writable/basic.js
En este ejemplo, simplemente escribimos foo bar bas en 
un flujo de archivos grabable.