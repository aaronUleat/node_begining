## Global Exception Handler

Cualquier excepción global no controlada puede ser interceptada escuchando en 
el evento `uncaughtException` en proceso.
No debe reanudar la ejecución fuera de este controlador de eventos porque 
esto solo ocurre cuando su aplicación está en
Un estado inestable. La mejor estrategia es registrar el error para su 
conveniencia y salir del proceso con un código de error, como
se muestra en el Listado 5-30.

Listing 5-30. process/1uncaught.js
```
process.on("uncaughtException", function (err) {
    console.log('Caught Exception', err);
    console.log("Stack:", err.stack);
    process.exit(1);
})
nonexistentFunc();
console.log('This line will not run.');
```
Si ejecuta el código en el Listado 5-30, obtendrá un buen registro de errores, 
como se muestra en el Listado 5-31.

Listing 5-31. Sample Run of an Uncaught Exception

```
$ node 1uncaught.js
Caught exception: [ReferenceError: nonexistentFunc is not defined]
Stack: ReferenceError: nonexistentFunc is not defined
at Object.<anonymous> (E:\DRIVE\Google Drive\BEGINNING NODEJS\code\chapter5\
process\1uncaught.js:8:1)
at Module._compile (module.js:456:26)
at Object.Module._extensions..js (module.js:474:10)
at Module.load (module.js:356:32)
at Function.Module._load (module.js:312:12)
at Function.Module.runMain (module.js:497:10)
at startup (node.js:119:16)
at node.js:902:3
```

El evento `uncaughtError` también se genera en un proceso si algún 
emisor de eventos genera el evento` error` y hay
no hay oyentes suscritos al emisor de eventos para este evento.

