## Saving Dependencies

Cada vez que ejecuta npm install, tiene un indicador de línea de 
comando opcional disponible (--save) que le dice a NPM que escriba
la información sobre lo que instaló en package.json, como se muestra en el Listado 4-22.

Listing 4-22. Installing an NPM Module and Updating package.json

```
$ npm install underscore --save
```

Si ejecuta la instalación con –save, no solo descargará el guión bajo 
en node_modules, sino que también se actualizará
las dependencias dentro de package.json apuntan a la versión instalada 
del guión bajo, como se muestra en el Listado 4-23.

Listing 4-23. Updated Section of package.json
```
"dependencies": {
    "underscore": "^1.6.0"
}
```

Hay bastantes ventajas de mantener un seguimiento de las 
dependencias de esta manera. Por un lado, es fácil saber cuál
versión publicada de una biblioteca en particular que está 
utilizando (depende de), simplemente mirando su package.json. los
Lo mismo ocurre cuando navega por el código fuente de 
los módulos de otras personas. Solo abre su package.json para
Ver en qué están confiando.
