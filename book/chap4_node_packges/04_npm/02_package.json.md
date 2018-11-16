## package.json

Una parte integral del ecosistema de NPM es un simple archivo JSON llamado package.json. 
Este archivo tiene un significado especial para
NPM. Es vital tenerlo configurado correctamente cuando quiera compartir 
su módulo con el mundo, pero es tan útil si
Estás consumiendo módulos de otras personas. Para crear un archivo package.json 
en la carpeta actual, simplemente ejecute el código en
Listado 4-18 en la línea de comando.

Listing 4-18. Initializing a package.json File

```
$ npm init
```

Esto le hará algunas preguntas, como el nombre del módulo y su versión. 
Tiendo solo presiono enter hasta
el fin. Esto crea un boilerplate package.json en la carpeta actual con 
el nombre establecido en la carpeta actual, versión
establecido en 0.0.0, y algunos otros valores predeterminados razonables 
como se muestra en el Listado 4-19.

Listing 4-19. A Default package.json
```
{
  "name": "foo",
  "version": "0.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC"
}
```
