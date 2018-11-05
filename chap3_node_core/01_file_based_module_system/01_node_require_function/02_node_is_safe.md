#### Node is safe

Los módulos en muchos entornos de programación no son seguros y contaminan el alcance global. Un ejemplo simple de esto es
PHP Supongamos que tiene un archivo foo.php que simplemente define una función foo, como se muestra en el Listado 3-3

Listing 3-3. foo.php

```
function foo($something){
return $something;
}
```

Si desea reutilizar esta función en un archivo bar.php, simplemente puede incluir foo.php usando la función de inclusión,
y luego todo desde el archivo foo.php se convierte en parte del alcance (global) de bar.php. Esto le permite utilizar el
función foo, como se muestra en el Listado 3-4.

Listing 3-4. include Function in PHP
```
include('foo.php');
foo();
```
Este diseño tiene bastantes implicaciones negativas. Por ejemplo, lo que significa una variable foo en un archivo actual 
puede
Cambiar en función de lo que importas. Como resultado, no puede incluir de forma segura dos archivos, foo1 y foo2, si existe 
la posibilidad
Que tengan alguna variable con el mismo nombre. Además, todo se importa, por lo que no puede tener local
Sólo variables en un módulo. Puede superar esto en PHP namespaces de nombres, pero Node.js evita el potencial de
contaminación del espacio de nombres en total.

El uso de la función require solo le da la variable module.exports, y usted necesita asignar el resultado a un
variable localmente para usarla en el alcance, como se muestra en el Listado 3-5.

Listing 3-5. Code Snippet to Show That You Control the Name

```
var yourChoiceOfLocalName = require('./foo');
```

No existe un ámbito global accidental: hay nombres y archivos explícitos con nombres de variables locales locales similares
Eso puede coexistir pacíficamente.






