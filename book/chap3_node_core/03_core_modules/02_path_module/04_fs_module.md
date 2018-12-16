#### Fs Module


El módulo fs proporciona acceso al sistema de archivos. Utilice require ('fs') 
para cargar este módulo. El modulo fs tiene
funciones para renombrar archivos, borrar archivos, 
leer archivos y escribir en archivos. Un ejemplo simple para escribir en el archivo.
El sistema y la lectura del sistema de archivos se muestran en el Listado 3-37.

Listing 3-37. core/fs/create.js

```
var fs = require('fs');
// write
fs.writeFileSync('test.txt', 'Hello fs!');
// read
console.log(fs.readFileSync('test.txt').toString());
```

Una de las mejores cosas del módulo fs es que tiene funciones asíncronas y sincrónicas.
(usando el postfix -Sync) para tratar con el sistema de archivos. 
A modo de ejemplo, para eliminar un archivo puede usar Unink o
unlinkSync. Una versión síncrona se muestra en el Listado 3-38, y 
una versión asíncrona del mismo código es
se muestra en el Listado 3-39.

Listing 3-38. core/fs/deleteSync.js

```
var fs = require('fs');
try {
    fs.unlinkSync('./test.txt');
    console.log('test.txt successfully deleted');
}
catch (err) {
    console.log('Error:', err);
}
```

Listing 3-39. core/fs/delete.js

```
var fs = require("fs");

try {
    fs.unlinkSync("./test.txt");
}catch (err) {
    console.log('Error:', err);
}
```

Listing 3-39. core/fs/delete.js

```
var fs = require("fs");
fs.unlink('./test.txt', function (err) {
    if (err) {
        console.log("Error: ", err)
    } else {
        console.log("test.txt succesfully deleted");
    }
});
```

La principal diferencia es que la versión asíncrona toma una devolución de llamada 
y se pasa el objeto de error si hay uno. Nosotros
discutió esta convención de manejo de errores usando una devolución de llamada 
y un argumento de error en el Capítulo 2.
También vimos en el Capítulo 2 que acceder al sistema de archivos es un orden 
de magnitud más lento que acceder a la RAM.
El acceso al sistema de archivos bloquea sincrónicamente el subproceso de 
JavaScript hasta que se completa la solicitud. Es mejor usar
Las funciones asíncronas siempre que sea posible en procesos ocupados, 
como en un escenario de servidor web.
Puede encontrar más información sobre el módulo fs en línea en la 
documentación oficial de Node.js
(http://nodejs.org/api/fs.html).

