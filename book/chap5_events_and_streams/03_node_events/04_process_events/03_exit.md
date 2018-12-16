## Exit

El evento de salida se emite cuando el proceso está a punto de salir.
No hay forma de abortar la salida en este punto. El evento
el bucle ya está en desmontaje, por lo que no puede realizar
ninguna operación asíncrona en este momento. (Ver Listado 5-32.)

Listing 5-32. process/2exit.js
```
process.on('exit', function(code){
   console.log("Existing with code", code)
});

process.exit(1);
```
Tenga en cuenta que la devolución de llamada del evento se pasa
en el código de salida con el que sale el proceso. Este evento es sobre todo útil
para fines de depuración y registro.