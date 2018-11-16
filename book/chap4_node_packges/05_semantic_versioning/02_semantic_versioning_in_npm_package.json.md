## Semantic Versioning in NPM / package.json

NPM y package.json tienen un gran soporte para las versiones semánticas. 
Puede decirle a NPM qué versión de un paquete tiene.
querer. Por ejemplo, el siguiente código instala la versión 1.0.3 exacta del guión bajo:

```
$ npm install underscore@1.0.3
```

Puede decirle a NPM que está de acuerdo con todas las versiones de parches de 1.0 usando una tilde “~”:

```
$ npm install underscore@"~1.0.0"
```
A continuación, para informarle a NPM que está de 
acuerdo con cualquier cambio menor en la versión, use "^":

```
$ npm install underscore@"^1.0.0"
```

Otros operadores de cadenas de versión compatibles incluyen "> =" y ">", 
que tienen significados matemáticos intuitivos,
tal como "> = 1.4.2". De manera similar, hay “<=” y “<”, por ejemplo, 
“<1.4.2”. También hay un * que se puede utilizar en varios
ubicaciones para coincidir con cualquier número, como 1.0. * 
(por ejemplo, 1.0.0, 1.0.1, etc.) o 1. * (por ejemplo, 1.1.0, 1.3.4, y
así sucesivamente) y simplemente *, que te ofrecerá la última versión cada vez.


También puedes usar estas cadenas de versión semántica en package.json. 
Por ejemplo, el siguiente package.json dice
NPM que su paquete es compatible con cualquier actualización 
menor en v1.6.0 de guión bajo:

```
"dependencies": {
    "underscore": "^1.6.0"
}
```




