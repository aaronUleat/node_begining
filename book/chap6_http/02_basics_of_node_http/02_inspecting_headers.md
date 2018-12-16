## Inspecting Headers

Incluso en este punto, una gran cantidad de lógica HTTP ha 
sido cuidada silenciosamente. La solicitud real enviada por curl contenía unos pocos
Cabeceras HTTP importantes. Para ver esto, modifiquemos el 
servidor para registrar los encabezados recibidos en la solicitud del cliente
(enviado por curl), como se muestra en el Listado 6-4.

```
const http = require("http");
let server = http.createServer(function (req, res) {
    console.log("request headers...");
    console.log(req.headers);

    // respond
    res.write("Hello Client")
    res.end();
}).listen(3000);
console.log('server running on port 3000');
```

Ahora inicia el servidor. También le pediremos a curl que cierre la 
sesión en los encabezados de respuesta del servidor usando -i (es decir, incluya
opción de encabezados de protocolo en salida), como se muestra en el Listado 6-5.

Listing 6-5. Making a Client Request and Displaying Returned Response Headers.

```
$ curl http://127.0.0.1:3000 -i
HTTP/1.1 200 OK
Date: Thu, 22 May 2014 11:57:28 GMT
Connection: keep-alive
Transfer-Encoding: chunked
hello client!
```

Los encabezados de solicitud HTTP enviados desde curl, que son procesados 
​​por el servidor HTTP Node.js, se registran en el
consola del servidor, como se muestra en el Listado 6-6. 
Como puede ver, req.headers es un simple objeto literal de JavaScript. Usted puede
acceder a cualquier encabezado usando req ['header-name'].

Listing 6-6. Request Headers Printout on Client Request

```
$ node 2defaultheaders.js
server running on port 3000
request headers...
{ 'user-agent': 'curl/7.30.0',
host: '127.0.0.1:3000',
accept: '*/*',
connection: 'Keep-Alive' }
```

 Tenga en cuenta que Wikipedia tiene una buena lista de códigos de estado 
HTTP en http://en.wikipedia.org/wiki/List_of_HTTP_status_
códigos Esto incluye códigos que no forman parte de la especificación 
HTTP / 1.1, que se describen en http://tools.ietf.org/
html / rfc2616.