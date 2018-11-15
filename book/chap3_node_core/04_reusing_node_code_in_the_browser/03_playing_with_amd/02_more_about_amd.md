## More about AMD

Aquí hay algunos datos útiles e interesantes que debe conocer sobre AMD para completar su conocimiento:

* Los módulos se almacenan en caché. Esto es similar a cómo se guardan en caché los módulos en Node.js, es decir, lo mismo
objeto se devuelve cada vez.
* Muchos de estos argumentos para definir son opcionales y hay varias formas de configurar cómo
Los módulos se escanean en RequireJS.
* Aún puede realizar la carga condicional de módulos específicos utilizando una llamada requerida, que es otra
función proporcionada por RequireJS como se muestra en el Listado 3-53. Esta función también es asíncrona y es
diferente de la versión Node.js de require.

Listing 3-53. Snippet to show how you can conditionally load a module in AMD

```
define(['./foo', './bar'], function(foo, bar){
    if(iReallyNeedThisModule){
        require(['./bas'], function(bas){
        // continue code here.
        });
    }
});
```

El objetivo aquí era ofrecer una visión general rápida de cómo puede usar RequireJS y comprender que el navegador es
diferente de Node.js.


