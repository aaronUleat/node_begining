## Global Node.js Packages

Es realmente sencillo hacer utilidades de línea de comandos en Node.js. 
Una de las motivaciones más comunes para aprender.
Node.js hoy en día es el hecho de que muchas utilidades de administración para 
proyectos front-end están escritas en Node.js. Existen
proyectos para probar los frontales de su web, compilar varios lenguajes 
de programación nuevos como CoffeeScript y TypeScript
en JavaScript y Sass, stylus y menos en CSS, minimice su JavaScript y CSS, etc. Front-end popular
Los proyectos de JavaScript como jQuery, AngularJS, Ember.js y React 
dependen de los scripts de Node.js para administrar sus proyectos.

El objetivo de los paquetes globales de Node.js es proporcionar utilidades 
de línea de comandos que puede usar desde (sorpresa) la
línea de comando. Todos los comandos de NPM que hemos visto 
toman un indicador -g opcional para indicar que está trabajando con
Módulos globales.

Recuerde que en el Capítulo 3 usamos una utilidad Browserify para 
convertir el código Node.js en un navegador compatible con AMD
código. Browserify es un paquete Node.js que instalamos globalmente 
(npm install -g browserify). Esto puso browserify en el
Línea de comando, que usamos en el capítulo anterior.

Similarly, you can update global packages (npm update -g package-name), 
list global packages (npm ls -g), and
uninstall packages (npm rm -g package-name). For example, 
to uninstall Browserify, you would run
npm rm -g browserify.

Al instalar módulos globalmente, NPM no modifica la configuración 
de su sistema. La razón por la línea de comando
la utilidad está repentinamente disponible porque los módulos 
globales se colocan en una ubicación (por ejemplo, / usr / local / bin en
Mac OSX y la carpeta NPM del perfil móvil del usuario en Windows) 
donde estarán disponibles en la línea de comandos.



