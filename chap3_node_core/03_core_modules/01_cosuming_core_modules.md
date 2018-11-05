### Consuming Core Modules

El consumo de módulos principales es muy similar al consumo de módulos basados ​​en archivos que usted mismo escribe. 
Todavía usas el
requiere función. La única diferencia es que, en lugar de una ruta relativa al archivo, 
simplemente debe especificar el nombre del archivo.
Módulo a la función requerida. Por ejemplo, para consumir el módulo de ruta de acceso central, 
escribe una declaración de require como
var ruta = requiere('ruta'). Al igual que con los módulos basados ​​en archivos, 
no hay contaminación de espacio de nombres global implícita y qué
lo que obtienes es una variable local que te nombras para acceder al contenido del módulo. Por ejemplo,
en var path = require ('path') lo estamos almacenando en una variable local llamada path. 
Ahora vamos a examinar algunos núcleos
módulos que debe tener en cuenta para tener éxito con Node.js.