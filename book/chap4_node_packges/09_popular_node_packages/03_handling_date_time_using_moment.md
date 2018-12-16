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

Otra gran característica proporcionada por el momento 
es el soporte de formato de fecha (es decir, la fecha a una conversión de cadena).
Algunos ejemplos se muestran en el Listado 4-45.

Listing 4-45. popular/moment/formatting.js

```
var moment = require('moment');
var date = new Date(2010, 1, 14, 15, 25, 50);
var wrapped = moment(date);
// "Sunday, February 14th 2010, 3:25:50 pm"
console.log(wrapped.format('"dddd, MMMM Do YYYY, h:mm:ss a"'));
// "Sun, 3PM"
console.log(wrapped.format("ddd, hA"));
```

Hay un montón de poder proporcionado por moment.js en términos 
de formato. Incluso puedes conseguir valores amigables como
"En 6 horas", "Mañana a las 9:40 am" y "Último domingo 
a las 9:40 pm", como se muestra en el Listado 4-46.

Listing 4-46. popular/moment/timeago.js

```
var moment = require('moment');
var
var
var
var
a
b
c
d
=
=
=
=
moment([2007,
moment([2007,
moment([2007,
moment([2008,
0,
0,
1,
0,
15]);
16]);
15]);
15]);
//
//
//
//
15
16
15
15
Jan
Jan
Feb
Jan
2007
2007
2007
2008
console.log(a.from(b)); // "a day ago"
console.log(a.from(c)); // "a month ago"
console.log(a.from(d)); // "a year ago"
console.log(b.from(a)); // "in a day"
console.log(c.from(a)); // "in a month"
console.log(d.from(a)); // "in a year"
```

Un montón de golosinas adicionales se proporcionan por 
momento y esperamos que ahora veas la motivación para explorar más
y tener una comprensión de cómo usarlos.

## Serializing Dates

Ya que estamos discutiendo fechas, discutamos una buena práctica 
a seguir cuando se serializan fechas para guardar en un archivo JSON o
enviando JSON a través del cable. Cuando hablamos de JSON anteriormente, 
es posible que haya notado que Date no es compatible como
tipo de valor JSON válido. Hay varias formas de pasar las fechas 
por el cable, pero es más sencillo enviarlas como cadenas.

Lo que significa una cadena de fecha en particular en términos 
de su valor de fecha real difiere según la cultura local (por ejemplo,
mes antes de la fecha o fecha antes del mes), por lo que es 
mejor seguir un estándar global. La norma ISO8601 específicamente
se relaciona con cómo una fecha en particular debe ser representada como una cadena.

ISO8601 admite varios formatos, pero el que se soporta de forma nativa 
con JavaScript es algo que parece
como 2014-05-08T17: 35: 16Z, donde la fecha y la hora se expresan 
en la misma cadena en relación con UTC. Ya que siempre es
En relación con UTC, es la zona horaria del usuario independiente. 
Esto es algo bueno ya que el usuario podría no estar en el mismo tiempo
La zona como el servidor y UTC es una referencia de tiempo global.

Si llamamos al método toJSON en una fecha de JavaScript, 
lo que obtenemos es la cadena con formato ISO8601. Similar,
pasar esta cadena a un constructor de fecha de JavaScript 
nos da un nuevo objeto de fecha de JavaScript, como se muestra en el Listado 4-47.

Listing 4-47. popular/moment/json.js

```
var date = new Date(Date.UTC(2007, 0, 1));
console.log('Original', date);
// To JSON
var jsonString = date.toJSON();
console.log(jsonString); // 2007-01-01T00:00:00.000Z
// From JSON
console.log('Round Tripped',new Date(jsonString));
```

Este soporte .toJSON también se transfiere en el momento. 
Si llama a .toJSON en un objeto de momento envuelto, obtendrá
el mismo resultado que obtienes en el objeto de fecha sin procesar. 
Esto le permite serializar con seguridad los objetos que tienen fecha o momento
Objetos como valores.

Una última cosa que vale la pena mencionar es que si algún objeto 
(no solo Fechas) tiene un método toJSON, se llamará
por JSON.stringify cuando intenta serializarlo a JSON. 
Por lo tanto, podemos usarlo para personalizar la serialización para cualquier
Objeto de JavaScript si queremos. Esto se muestra en un ejemplo simple en el Listado 4-48.

Listing 4-48. popular/moment/tojson.js

```
var foo = {};
var bar = { 'foo': foo };
// Uncustomized serialization
console.log(JSON.stringify(bar)); // {"foo":{}}
// Customize serialization
foo.toJSON = function () { return "custom" };
console.log(JSON.stringify(bar)); // {"foo":"custom"}
```





