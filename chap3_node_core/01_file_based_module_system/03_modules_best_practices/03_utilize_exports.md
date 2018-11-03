#### Utilize Exports

Pruebe y use el alias de exportación cuando desee exportar más de una cosa.
Motivo: Mantiene lo exportado cerca de su definición. También es convencional tener una variable local para cada
Lo que exportas para que puedas usarlo localmente. Haga todo esto en una sola línea, como se muestra en el Listado 3-20.

Listing 3-20. Create a Local Variable and Also Export
```
var foo = exports.foo = /* whatever you want to export as `foo` from this module */ ;
```
