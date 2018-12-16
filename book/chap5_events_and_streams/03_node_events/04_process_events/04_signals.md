## Signals

El objeto de proceso Node.js también admite el concepto de señales UNIX,
que es una forma de comunicación entre procesos.
También emula a los más importantes en los sistemas Windows.
Un escenario común que se admite en ambos
Windows y UNIX se producen cuando el usuario intenta interrumpir
el proceso utilizando la combinación de teclas Ctrl + C en el terminal. Por
por defecto, Node.js saldrá del proceso. Sin embargo, si
tiene un oyente suscrito a `SIGINT` (señal de interrupción)
evento, se llama al oyente y puede elegir si desea salir
del proceso (process.exit) o ​​continuar la ejecución.
El Listado 5-33 proporciona una pequeña muestra donde
elegimos continuar corriendo y salir después de cinco segundos.

Listing 5-33. process/3signals.js
```

setTimeout(function () {
    console.log("5 seconds passed. Exiting");
}, 5000);
console.log("Started. Will exit in 5 seconds");

process.on('SIGINT', function () {
    console.log("Got SIGINT. Ignoreing");
})
```

Si ejecuta este ejemplo y presiona Ctrl + C,
recibirá un mensaje que estamos eligiendo ignorar. Finalmente,
el proceso se cerrará luego de cinco segundos,
naturalmente, una vez que no tengamos ninguna
tarea pendiente (como se muestra en el Listado 5-34).
