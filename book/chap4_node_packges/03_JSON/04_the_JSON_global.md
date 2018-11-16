## The JSON Global

La transferencia de datos a través del cable se realiza en forma de bytes. 
Para escribir un objeto JavaScript desde la memoria al cable o
para guardar en un archivo, necesita una forma de convertir este objeto en una 
cadena JSON. Hay un objeto global en JavaScript llamado
JSON que proporciona funciones de utilidad para convertir una representación 
de cadena de JSON a objetos JavaScript y convertir
Objetos de JavaScript en una cadena JSON listos para ser enviados por cable o 
escritos en el archivo o cualquier otra cosa que desee hacer
con eso. Este JSON global está disponible en Node.js y en todos los navegadores modernos.

Para convertir un objeto JavaScript en una cadena JSON, simplemente 
llame a JSON.stringify pasando el objeto JavaScript
como argumento Esta función devuelve la representación de cadena 
JSON del objeto JavaScript. Para convertir una cadena JSON
en un objeto JavaScript, puede usar la función JSON.parse, 
que simplemente analiza la cadena JSON y devuelve un
Objeto de JavaScript que coincide con la información contenida en la cadena JSON, 
como se muestra en el Listado 4-16 y en el Listado 4-17.

Listing 4-16. json/convert/app.js
```
var foo = {
    a: 1,
    b: "a string",
    c: true
}

var json = JSON.stringify(foo);
console.log(json);
console.log(typeof json);
```

Esta comprensión rudimentaria de JSON y cómo se relaciona con los literales de objetos de JavaScript recorrerá un largo camino
haciendo de usted un desarrollador Node.js exitoso.