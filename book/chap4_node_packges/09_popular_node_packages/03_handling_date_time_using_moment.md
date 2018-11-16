## Handling Date/Time Using Moment

El tipo de fecha de JavaScript incorporado es bastante limitado. 
Es lo suficientemente bueno para casos simples, por ejemplo, puede crear una fecha
representando la hora actual con una simple llamada de constructor. 
También hay un constructor que te permite crear fechas en
la resolución en la que desea trabajar, como año, mes, 
día, horas, minutos, segundos y milisegundos.
Una cosa a tener en cuenta con las fechas de JavaScript es 
que el mes está basado en 0 índices. Así que enero es 0, febrero es 1, y
pronto. Puede ver algunas fechas creadas en el Listado 4-42.

Listing 4-42. popular/moment/rawdate.js

```
var now = new Date();
console.log('now is:', now);
// get sections of time
var milliseconds = now.getMilliseconds();
var seconds = now.getSeconds();
var hours = now.getHours();
var minutes = now.getMinutes();
var date = now.getDate();
var month = now.getMonth();
var year = now.getFullYear();
// detailed constructor for a date
var dateCopy = new Date(year, month, date,
    hours, minutes, seconds, milliseconds);
console.log('copy is:', dateCopy);
// Other dates
// year, month, date
console.log('1 jan 2014:', new Date(2014, 0, 1));
// year, month, date, hour
console.log('1 jan 2014 9am', new Date(2014, 0, 1, 9));

```

Hay muchas características además del conjunto de características 
básicas de la Fecha de JavaScript que se proporcionan por el momento
(momento de la instalación npm). En su esencia, moment proporciona 
una función que se puede usar para envolver un objeto de fecha de JavaScript
en un objeto de momento. Hay muchas formas de crear un objeto de moment. 
Lo más simple es simplemente pasar una fecha.
objeto. A la inversa, para convertir un objeto de momento en una fecha de JavaScript, 
simplemente llame a la función de miembro toDate. Esto es
demostrado en el listado 4-43.

Listing 4-43. popular/moment/wrapping.js

```
var moment = require("../../../../node_modules/moment");

var wrapped = moment(new Date());
console.log(wrapped);

var date = wrapped.toDate();
console.log(date);

```

moment proporciona un análisis de cadena confiable. 
El resultado de una cadena analizada es un objeto de momento envuelto. Esto es mostrado
en el listado 4-44. Para desenvolverlo, simplemente llamamos a la Fecha como ya vimos en el Listado 4-43.

Listing 44. popular/moment/parsing.js
```
var moment = require("../../../../node_modules/moment");

// From string to date
console.log(moment("12-25-1995", "MM-DD-YYYY").toDate());
console.log(moment("2010-10-20 4:30", "YYYY-MM-DD HH:mm").toDate());
```

