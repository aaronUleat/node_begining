### Command Line Arguments

Como Node.js no tiene una función principal en el sentido tradicional de C / C ++ / JAVA / C #, 
utiliza el objeto de proceso para
acceder a los argumentos de la línea de comandos. Los argumentos están disponibles 
como la propiedad de miembro process.argv, que es
una matriz. El primer elemento es nodo (es decir, el nodo ejecutable), el segundo elemento es el nombre de JavaScript
archivo pasado a Node.js para iniciar el proceso, y los elementos restantes son los argumentos de la línea de comando. Como un
por ejemplo, considere un archivo simple argv.js, que simplemente cierra la sesión en la consola 
como se muestra en el Listado 3-27. Si tu
ejecútelo como nodo argv.js foo bar bas, obtendrá un resultado similar al que se muestra en el Listado 3-28.

Listing 3-27. globals/process/argv.js
```
// argv.js
console.log(process.argv);
```

Listing 3-28. Sample Output from argv.js

```
[ '/usr/local/bin/node',
  '/var/www/html/nodejs/chap3_node_core/02_important_globals/05_process/02_listing_comand_line/argv.js' ]

```

Existen algunas bibliotecas excelentes para procesar los argumentos de 
la línea de comandos de manera significativa en Node.js. Nosotros
examinaremos una de esas bibliotecas cuando aprendamos más sobre NPM en el siguiente capítulo.

