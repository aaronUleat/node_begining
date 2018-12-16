## Pipe

Todas las corrientes admiten una operación de pipe que puede 
realizarse utilizando la función de miembro de pipe. Esta es una de las cosas
Eso hace que las transmisiones en Node.js sean tan impresionantes. 
Considere nuestro simple escenario inicial de cargar un archivo desde el sistema de archivos
y la transmisión al cliente. Esto puede ser tan simple como un segmento 
de código fileSystemStream.pipe (userSocket).

Puede canalizar desde un flujo que puede leer desde (Readable / Duplex / Transform) 
hasta un flujo en el que puede escribir
(Escrable / Dúplex / Transformar). Esta función se llama canalización porque 
imita el comportamiento de la línea de comando pipe
operador, por ejemplo, cat file.txt | grep lol.

El módulo principal de fs proporciona funciones de utilidad para crear 
flujos legibles o grabables desde un archivo. Listado 5-36 es un
Ejemplo que transmite un archivo desde el sistema de archivos a la consola del usuario.

Listing 5-36. streams/2pipe/1basic.js

```
var fs = require('fs');
// Create readable stream
var readableStream = fs.createWriteStream('./cool.txt');
// Pipe it to stdout
readableStream.pipe(process.stdout);
```

También puede encadenar múltiples corrientes utilizando pipe. 
Por ejemplo, el código en el Listado 5-37 crea una secuencia de lectura desde
un archivo, lo canaliza a través de una secuencia de transformación zip, 
y luego lo canaliza a una secuencia de archivos de escritura. Esto crea un archivo zip en el
sistema de archivos.

Listing 5-37. streams/2pipe/2chain.js

```
var fs = require('fs');
var gzip = require('zlib').createGzip();
var inp = fs.createReadStream('cool.txt');
var out = fs.createWriteStream('cool.txt.gz');
// Pipe chain
inp.pipe(gzip).pipe(out);
```

Las transmisiones en Node.js se basan en eventos. Todo lo que hace la operación de pipe es 
suscribirse a los eventos relevantes en el
fuente y llamar a las funciones relevantes en el destino. Para la mayoría de los propósitos, 
la tubería es todo lo que necesita saber acerca de
como consumidor de API, pero vale la pena conocer más detalles cuando desea profundizar en las corrientes.