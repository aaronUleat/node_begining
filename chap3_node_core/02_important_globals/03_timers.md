### Timers

Hemos visto setTimeout antes cuando discutíamos el bucle de eventos Node.js en el Capítulo 2. Establece una función para
ser llamado después de un retraso especificado en milisegundos. 
Tenga en cuenta que este retraso es el intervalo mínimo después del cual se especifica el
La función se llama. La duración real después de la cual se llamará depende de la disponibilidad del hilo en JavaScript
 como vimos en la sección sobre el hambre de hilo en el Capítulo 2. También depende de cuándo el sistema operativo
programa el proceso Node.js para ejecutar (normalmente no es un problema). Un ejemplo rápido de setTimeout, que llama a
la función después de 1,000 milisegundos (en otras palabras, un segundo) se muestra en el Listado 3-23.

Listing 3-23. globals/timers/setTimeout.js

```
setTimeout(function () {
console.log('timeout completed');
}, 1000);
```


Similar a la función setTimeout es la función setInterval. setTimeout solo ejecuta la función de devolución de llamada
Una vez después de la duración especificada. Pero setInterval llama a la devolución de llamada varias veces 
después de cada paso del especificado
duración. Esto se muestra en el Listado 3-24 donde imprimimos el segundo aprobado después de cada segundo. Similar a setTimeout,
la duración real puede exceder el valor especificado dependiendo de la disponibilidad del hilo de JavaScript.

Listing 3-24. globals/timers/setInterval.js

```
setInterval(function () {
    console.log('second passed');
}, 1000);
```

Tanto setTimeout como setInterval devuelven un objeto que se puede usar para borrar el tiempo de espera / intervalo usando el
Funciones clearTimeout / clearInterval. El Listado 3-25 muestra cómo usar clearInterval para llamar a una función después de
cada segundo durante cinco segundos, y luego borre el intervalo después del cual la aplicación saldrá.

Listing 3-25. globals/timers/clearInterval.js

```
var count = 0;
var intervalObject = setInterval(function () {
    count++;
    console.log(count, 'seconds passed');
    if (count == 5) {
        console.log('exiting');
        clearInterval(intervalObject);
    }
}, 1000);
```





