## Converting Node.js Code into Browser Code

Como puede ver, hay diferencias significativas entre los sistemas de módulo de navegador (AMD) y el módulo Node.js
Sistema (CommonJS). Sin embargo, la buena noticia es que la comunidad Node.js ha desarrollado una serie de herramientas para tomar
su código CommonJS / Node.js y transformarlo para que sea compatible con AMD / RequireJS. La más utilizada.
(y en el que se basan otras herramientas) es Browserify (http://browserify.org/).

Browserify es una herramienta de línea de comandos que está disponible como un módulo NPM. Los módulos de NPM se discuten en gran
Detalle en el siguiente capitulo. Por ahora, es suficiente saber que si tiene instalado Node.js como se especifica en el Capítulo 1,
Ya tenemos npm disponible. Para instalar Browserify como en la herramienta de línea de comandos, simplemente ejecute el comando que se muestra
en el Listado 3-54. (Nota: en Mac OS X debe ejecutar esto como root (sudo npm install –g browserify).

Listing 3-54. Installing Browserify

```
npm install -g browserify
```

Esto instala Browserify globalmente (un concepto que se aclarará en el próximo capítulo) y lo hace más avanzado.
disponible en la línea de comandos. Ahora, si ejecuta browserify, debería ver la salida como se muestra en la Figura 3-4 para indicar un
instalación exitosa

La forma más común de usar browserify es especificar un punto de entrada para su módulo Node.js y convertir ese archivo
y todos sus archivos de dependencias en un solo archivo compatible con AMD usando el parámetro –o (--outfile). Como siempre, vamos a
saltar a una demostración para obtener algo de experiencia práctica.