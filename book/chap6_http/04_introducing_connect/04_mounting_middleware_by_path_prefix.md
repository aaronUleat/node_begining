## Mounting Middleware by Path Prefix

La función de uso toma un primer argumento opcional para especificar el punto 
final para el que se utilizará el middleware especificado.
activado Esto se denomina montaje porque es similar al montaje 
en disco del sistema operativo. Por ejemplo, digamos que queremos hacer eco solo cuando
las solicitudes vienen por '/ echo'. Para todas las demás 
solicitudes, devolveremos el mensaje "Wassup". Esto se puede lograr como se muestra en
Listado 6-22.

Listing 6-22. 5middleware/4prefix.js
```
function echo(req, res, next) {
    req.pipe(res);
}

const connect = require("connect");

connect()
    .use('/echo', echo)
    .listen(3000);
```

Todas las solicitudes que comiencen con ‘/ echo 'serán manejadas por 
el middleware de eco, mientras que otras se pasarán a nuestro
Wassup! respondedor Como puede ver en el Listado 6-23, se comporta como se espera.

Listing 6-23. Demonstrating Mounting

```
$ curl http://127.0.0.1:3000/echo -d "hello world!"
hello world!
$ curl http://127.0.0.1:3000/ -d "hello world!"
Wassup!
```

Un ejemplo simple de necesitar prefijos de ruta es alojar un 
middleware de archivo estático en un prefijo particular
(por ejemplo, ‘/ public’).

Otra ventaja del montaje es que le permite cambiar las URL 
fácilmente sin necesidad de actualizar el
middleware Su middleware no debe verificar si es 
necesario. Supongamos que se ha montado donde necesita hacer su
tratamiento.