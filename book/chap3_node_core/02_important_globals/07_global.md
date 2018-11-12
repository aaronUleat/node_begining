### Global

La variable global es nuestro identificador del espacio de nombres global en Node.js. 
Si está familiarizado con el front-end JavaScript
desarrollo, esto es algo similar al objeto de la window. 
Todos los verdaderos globales que hemos visto (consola, setTimeout,
y proceso) son miembros de la variable global. 
Incluso puedes agregar miembros a la variable global para hacerla
disponible en todas partes, como se muestra en el Listado 3-32. 
El hecho de que esto hace que la variable sea algo disponible en todas partes.
se demuestra en el Listado 3-33.

Listing 3-32. globals/global/addToGlobal.js

```
global.something = 123;
```
Listing 3-33. globals/global/app.js

```
console.log(console === global.console);
// true
console.log(setTimeout === global.setTimeout); // true
console.log(process === global.process);
// true
```

A pesar de que agregar un miembro a global es algo que puede hacer, está totalmente desaconsejado. La razón de
eso hace que sea extremadamente difícil saber de dónde viene una variable en particular. El sistema de módulos está diseñado.
Para que sea fácil de analizar y mantener grandes bases de código. Tener globals por todas partes no es mantenible,
Escalable, o reutilizable sin riesgo. Sin embargo, es útil saber el hecho de que se puede hacer y, lo que es más importante, como
desarrollador de bibliotecas puedes extender Node.js como quieras.




