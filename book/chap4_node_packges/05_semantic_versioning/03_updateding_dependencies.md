## Updating Dependencies

Siempre que use el indicador --save, el valor predeterminado que utiliza NPM para 
actualizar la sección de dependencias de package.json es "^",
precedida por la versión descargada. La razón es que siempre debe intentar usar la última versión donde
El número de versión principal no ha cambiado. De esta manera, 
obtendrás nuevas características y las últimas correcciones de errores gratis, y habrá
No debe haber ningún cambio de ruptura.

```
$ npm install request@1.0.0 -save
```

La siguiente es la cadena de versión predeterminada agregada a package.json:

```
"dependencies": {
    "request": "^1.0.0"
}
```

Sin embargo, 1.0.0 no es la última versión publicada de la solicitud. 
Para encontrar la última versión en línea que sea compatible.
con la versión semántica actual especificada en package.json 
(en este ejemplo ^ 1.0.0), puede ejecutar npm desactualizado, como
se muestra en el Listado 4-26.

Listing 4-26. Check Latest Version of Packages

```
$ npm outdated
npm http GET https://registry.npmjs.org/request
npm http 304 https://registry.npmjs.org/request
Package Current Wanted Latest Location
request
1.0.0
1.9.9 2.34.0 request
```

Puede ver que la última versión compatible con ^ 1.0.0 es ^ 1.9.9, 
que es la versión deseada basada en el
cadena semántica encontrada en nuestro package.json. También 
te muestra que hay una versión aún más reciente disponible.

Para actualizar estos paquetes a la última versión compatible y guardar 
los resultados en su paquete.json
(para hacer coincidir los números de versión con lo que se ha descargado), 
simplemente puede ejecutar el siguiente comando. Tu actualizado
package.json se muestra en el Listado 4-27.

```
$ npm update -save
```

Listing 4-27. Updated package.json

```
"dependencies": {
    "request": "^1.9.9"
}
```

Teniendo este conocimiento básico de package.json y los comandos 
npm install, npm rm, npm update, y
El distintivo "guardar NPM" junto con el respeto por las versiones 
semánticas es todo lo que necesita saber sobre la administración.
Paquetes NPM en tu proyecto.




