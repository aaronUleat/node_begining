## Modules Recap

En este punto, podría parecer que requerir tiene mucho que hacer. 
De hecho lo hace, pero en nuestra opinión honesta, es todo
es bastante simple y aquí hay un resumen para demostrar que 
ya eres un experto en módulos de Node.js. Asume que
requiere ('algo'). Entonces la siguiente es la lógica seguida por Node.js:

* Si algo es un módulo central, devuélvalo.
* Si algo es una ruta relativa (comienza con ‘./’, ‘../’) devuelve ese archivo O carpeta.
* Si no es así, busque node_modules / filename o node_modules / foldername cada nivel hasta que
Encuentra un archivo o carpeta que coincida con algo.

Cuando coincida con un archivo O carpeta :, siga estos pasos:

* Si coincide con un nombre de archivo, devuélvalo.
* Si coincide con el nombre de una carpeta y tiene package.json con main, devuelva ese archivo.
* Si coincide con un nombre de carpeta y tiene un archivo de índice, devuélvalo.

Por supuesto, el archivo puede ser un archivo.js o un archivo.json ya que 
JSON es de primera clase en Node.js. Para JSON, devolvemos el
Analizamos JSON y para archivos JavaScript, simplemente ejecutamos 
el archivo y devolvemos 'módulo.exports'.

Eso es todo al respecto. Tener este conocimiento le permite 
abrir y ver miles de Nodos de código abierto.
Paquetes js disponibles en npmjs.org y Github.