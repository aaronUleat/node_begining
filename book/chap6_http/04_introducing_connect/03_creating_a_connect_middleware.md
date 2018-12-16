## Creating a Connect Middleware

Para registrar un middleware con connect, llame al método de "uso" en 
el despachador de conexión que pasa en una función
eso requiere tres argumentos: una solicitud, una respuesta 
y una próxima devolución de llamada:

* la solicitud se deriva de la clase de solicitud HTTP Node.js que vimos anteriormente
* la respuesta se deriva de la clase de respuesta HTTP Node.js que vimos anteriormente
* next le permite pasar opcionalmente el control al siguiente middleware registrado con
conectar O informar a conectar sobre un error.

El middleware no-op (sin operación) más simple sería 
uno que no analice la solicitud, no modifique
la respuesta, y no se limita a pasar el control al 
siguiente middleware, como se muestra en el Listado 6-19.

Listing 6-19. 5middleware/1noop.js
```
const connect = require("connect");

// Create a connect dispatcher and register with http
var app = connect()
            // register a middleware
            .use(function (req, res, next) { next() })
            .listen(3000);
console.log('server running on port 3000');

```

Ahora que estamos familiarizados con los fundamentos del middleware, 
creamos uno que registre la solicitud del cliente
método y url, como se muestra en el Listado 6-20.

Listing 6-20. 5middleware/2logit.js

```
const util = require("util");

// a simple logging middleware
function logit(req, res, next) {
    util.log(util.format('Request recieved: %s, %s', req.method, req.url));
    next();
}

const connect = require("connect");

connect().use(logit).listen(3000);
```

Vamos a crear otro middleware que repita la solicitud del cliente 
al cliente. Dado que la solicitud del cliente es una lectura
el flujo y la respuesta es un flujo de escritura, 
simplemente podemos canalizar los dos, como se muestra en el Listado 6-21.

Listing 6-21. 5middleware/3echo.js

```
function echo(req, res, next) {
    req.pipe(res);
}

const connect = require("connect");

connect().use(echo).listen(3000);
```

Ahora, si ejecuta esta aplicación y realiza una solicitud de curvatura, 
el cuerpo de la solicitud (-d, es decir, el parámetro de datos a curvatura)
se convertirá en el cuerpo de respuesta:

```
$ curl http://127.0.0.1:3000/ -d "hello world!"
hello world!
```

