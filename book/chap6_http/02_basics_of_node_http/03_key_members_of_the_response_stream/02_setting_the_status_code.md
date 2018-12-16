## Setting the Status Code

Por defecto, el código de estado será 200 OK. Mientras no se 
envíen los encabezados, puede establecer explícitamente el
código de estado usando el miembro de respuesta 
statusCode (por ejemplo, para enviar un mensaje 404 NOT FOUND, usaría el
siguiente código:

```
response.statusCode = 404;
```

