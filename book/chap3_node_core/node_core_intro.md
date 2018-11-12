# CORE NODE

Node.js se entrega con una serie de módulos integrados que proporcionan un conjunto central de características sobre las 
que podemos construir. En esto
capítulo, mostraremos las partes importantes de Node.js con las que todo desarrollador serio debería estar familiarizado. los
Lo bueno de Node.js es que es bastante posible que el desarrollador promedio esté completamente al tanto de cómo
todo funciona
Para entregar con éxito grandes aplicaciones y trabajar en equipos de gran tamaño, necesitamos una forma de encapsular la 
complejidad.
JavaScript fue diseñado originalmente para ser leído de arriba a abajo de manera simple por un navegador web y archivos
se cargaron utilizando etiquetas <script>. Como las aplicaciones más grandes y más grandes se han escrito en JavaScript, 
dos módulos
Se han desarrollado sistemas (AMD y CommonJS). Hacen el código más manejable y reutilizable. Dos patrones
existe porque el navegador y el servidor ofrecen diferentes desafíos en términos de latencia de carga del módulo 
(solicitudes de red)
sistema de archivos vs. En este capítulo, analizaremos estos patrones y mostraremos cómo reutilizar el código Node.js 
en el navegador.
Una nota sobre los ejemplos de código en este y en todos los demás capítulos que usan varios archivos es que la entrada principal
El punto del ejemplo a menudo se llama app.js siguiendo una convención de la comunidad Node.js. Así que deberías poder ejecutar un
muestra como nodo app.js.