### process.nextTick

process.nextTick es una función simple que toma una función de devolución de llamada. Se utiliza para 
poner la devolución de llamada en el siguiente ciclo.
del bucle de eventos Node.js. Está diseñado para ser altamente eficiente y se usa en varias bibliotecas principales de Node.js.
Su uso es lo suficientemente simple como para demostrarlo, y se muestra un ejemplo en el Listado 3-29. La salida de esta muestra es
se muestra en el Listado 3-30.

Listing 3-29. globals/process/nexttick.js

```
// nexttick.js
process.nextTick(function () {
    console.log('next tick');
});
console.log('immediate');
```
Listing 3-30. Sample nexttick.js output

```
immediate
next tick
```

Como puede ver, la llamada inmediata se ejecuta primero, mientras que la devolución de 
llamada nextTick se ejecuta en la siguiente ejecución
del bucle de eventos. La razón por la que debe conocer esta función es porque, debido a la naturaleza asíncrona de Node.
js, esta función se mostrará en la pila de llamadas con bastante frecuencia ya que este será 
el punto de inicio de un bucle de eventos Node.js.
Todo antes de esta función está en C. Todo después de esta función en la pila de llamadas está en JavaScript.


