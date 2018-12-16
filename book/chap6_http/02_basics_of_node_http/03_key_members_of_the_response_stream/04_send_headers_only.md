## Send Headers Only

Cuando desee enviar explícitamente los encabezados (no solo ponerlos en cola) 
y mover la respuesta al modo de solo cuerpo,
puede llamar a la función de miembro response.writeHead. Esta función 
toma el código de estado junto con encabezados opcionales
que se agregará a cualquier encabezado que ya haya puesto en 
cola con response.setHeader. Por ejemplo, aquí está
un fragmento de código que establece el código de estado en 200 y 
establece el encabezado Content-Type para servir HTML:

```
response.writeHead(200, { 'Content-Type': 'text/html' });
```


