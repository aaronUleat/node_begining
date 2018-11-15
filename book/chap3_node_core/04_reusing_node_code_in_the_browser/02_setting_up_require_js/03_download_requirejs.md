## Download Require js

Puede descargar RequireJS desde el sitio web oficial (http://requirejs.org/docs/download.html). Es un simple
Archivo JavaScript que puedes incluir en tu proyecto. Ya está presente en el capítulo 3 / amd / base de la carpeta.

## Bootstrapping RequireJS

Cree un index.html simple en la misma carpeta que server.js con el contenido que se muestra en el Listado 3-47.

```
<html>
    <script
    src="./require.js"
    data-main="./client/app">
    </script>
<body>
    <p>Press Ctrl + Shift + J (Windows) or Cmd + Opt + J (MacOSX) to open up the console</p>
</body>
</html>
```

Tenemos una etiqueta de script simple para cargar require.js. 
Cuando RequireJS se carga, mira el atributo principal de datos en el
La etiqueta de script que cargó RequireJS y lo considera como el punto de entrada de la aplicación. 
En nuestro ejemplo, establecemos la
El atributo data-main para ./client/app y, por lo tanto, RequireJS intentará cargar 
http: // localhost: 3000 / client / app.js.

## Client-Side Application Entry Point

Cuando configuramos RequireJS para cargar /client/app.js, creamos una carpeta de cliente y una app.js dentro de esa carpeta que
simplemente cierra la sesión en la consola, como se muestra en el Listado 3-48.

Listing 3-48. amd/base/client/app.js

```
console.log('Hello requirejs!');
```



Ahora, si abre el navegador http: // localhost: 3000 y abre las herramientas de desarrollo (presione F12), debería ver el
mensaje registrado en la consola, como se muestra en la Figura 3-1.


Eso es lo básico de configurar RequireJS. Esta configuración se utilizará en las demostraciones restantes en esta sección. Solo
necesita copiar esta combinación server.js + index.html + require.js + client / app.js y comenzar a piratear tu
contenido del corazón.

Hay muchas más opciones de configuración para RequireJS y le recomendamos que explore la API
documentación que está disponible en línea en http://requirejs.org/docs/api.html.


