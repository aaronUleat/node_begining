## package.json Online Dependency Tracking
Una ventaja más del uso de package.json para el seguimiento de 
dependencias es que si en algún momento posterior decide compartir
Su módulo con el resto del mundo (es decir, compartir en npmjs.org), 
no necesita enviar las dependencias como su
Los usuarios pueden descargarlos en línea.

Si su package.json está configurado correctamente e instalan su módulo, NPM se descargará e instalará automáticamente
Las dependencias de tu módulo. Para ver un ejemplo simple, instalemos un paquete (solicitud) que tiene dependencias, como
se muestra en el Listado 4-25.

Listing 4-25. Installing a Module with Lots of Dependencies

```
$ npm install request
npm http GET https://registry.npmjs.org/request
npm http GET https://registry.npmjs.org/tunnel-agent
npm http GET https://registry.npmjs.org/json-stringify-safe
...truncated...
npm http 304 https://registry.npmjs.org/delayed-stream/0.0.5
request@2.34.0 node_modules\request
├── aws-sign2@0.5.0
...truncated...
├── json-stringify-safe@5.0.0
└── form-data@0.1.2 (async@0.2.10, combined-stream@0.0.4)
```

Puede ver que NPM no solo instaló la solicitud, sino que también 
eliminó una cantidad de otros paquetes que solicitan
depende de. Cada uno de estos paquetes puede, a su vez, depender 
de otros paquetes (por ejemplo, los datos de formulario dependen
en async y flujo combinado), y obtienen su propia copia 
local de los paquetes de los que dependen (y serán
descargados en su propia carpeta node_modules, por ejemplo, 
node_modules / request / node_modules / form-data /
nodo_módulos / asíncrono). Como se mencionó anteriormente, debido 
a la forma en que funciona la función require en Node.js, puede
use submódulos que dependen de versiones diferentes del mismo módulo, 
ya que cada uno obtiene su propia copia cuando se configura
utilizando NPM.



