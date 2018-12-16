## Key Members of the Request Stream

La solicitud también es un flujo legible. Esto es útil para los casos en que el 
cliente desea transmitir datos al servidor, por
ejemplo, carga de archivos. La solicitud HTTP del cliente también se 
divide en una parte de cabeza y cuerpo. Podemos obtener información útil.
sobre la solicitud de cliente de la cabeza HTTP. Por ejemplo, 
ya hemos visto la propiedad request.headers, que es
simplemente un mapa de solo lectura (JavaScript Object Literal) 
de nombres y valores de encabezado (que se muestra en el Listado 6-10).

Listing 6-10. Snippet for Demonstrating Reading the Request Headers

```
// Prints something like:
//
// { 'user-agent': 'curl/7.30.0',
// host: '127.0.0.1:3000',
// accept: '*/*' }
console.log(request.headers);
```
Para verificar un encabezado individual, puedes indexar este objeto 
como indicas cualquier otro objeto literal de JavaScript:

```
console.log(request.headers['user-agent']); // 'curl/7.30.0'
```

Una información clave que necesita al responder a una solicitud es 
el método HTTP y la URL utilizada por el
Cliente al realizar la solicitud. Esta información es 
necesaria para crear aplicaciones web RESTful. Usted puede
obtenga el método HTTP utilizado de la propiedad de solo 
lectura request.method. Puede obtener la URL solicitada por el cliente.
utilizando la propiedad request.url. Como ejemplo, 
considere la siguiente solicitud del cliente:

```
GET /resources HTTP/1.1
Accept: */*
```

En este caso, request.method será GET y request.url será / resources.
