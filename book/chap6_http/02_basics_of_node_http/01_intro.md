## Basics of Node.js HTTP

Los siguientes son los principales módulos de redes principales para crear aplicaciones web en Node.js:

* net / require ('net'): proporciona la base para crear clientes y servidores TCP
* dgram / require ('dgram'): proporciona funcionalidad para crear sockets UDP / Datagram
* http / require ('http'): proporciona una base de alto rendimiento para una pila HTTP
* https / require ('https'): proporciona una API para crear clientes y servidores TLS / SSL.

Comenzaremos utilizando el módulo http para crear nuestro 
servidor simple para servir archivos estáticos. Creando nuestro servidor web
desde cero nos dará una apreciación más profunda de las características 
proporcionadas por los módulos NPM de la comunidad que haremos
explorar más tarde.


Nota: Usaremos curl para probar nuestras aplicaciones web 
para comenzar. Está disponible por defecto en Mac OS X / Linux.
Puede obtener curl para Windows como parte de Cygwin (www.cygwin.com/).

El módulo http tiene una pequeña y encantadora función, createServer, 
que recibe una devolución de llamada y devuelve un servidor HTTP.
En cada solicitud de cliente, la devolución de llamada se pasa en 
dos argumentos: la secuencia de solicitud entrante y un servidor saliente
flujo de respuesta Para iniciar el servidor HTTP devuelto, simplemente llame a su función de escucha pasando el número de puerto
quiero escuchar sobre.

El listado 6-1 proporciona un servidor simple) que escucha 
en el puerto 3000 y simplemente devuelve "¡Hola cliente!"
Solicitud HTTP


```
const http = require("http");

let server = http.createServer(function (request, response) {
    console.log("Request starting...");
    console.log(request, 'request');
    console.log(response, 'response');
    // respond
    response.write("Hello Client!");
    response.end();
});

server.listen(3000);
console.log('Server running at http://127.0.0.1:3000/');
```

Para probar el servidor, simplemente inicie el servidor usando Node.js, 
como se muestra en el Listado 6-2.

```
$ node 1raw.js
Server running at http://127.0.0.1:3000/
```

Para salir del servidor, simplemente presione Ctrl + C 
en la ventana donde se inició el servidor.

