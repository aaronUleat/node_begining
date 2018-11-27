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

