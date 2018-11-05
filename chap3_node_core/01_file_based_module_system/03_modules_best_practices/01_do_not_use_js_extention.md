#### Do not use the .js extention

Es mejor hacer require ('./ foo') en lugar de require ('./ foo.js') aunque ambos funcionen bien para Node.js.
Motivo: para sistemas de módulos basados ​​en navegador (como RequireJS, que veremos más adelante en este capítulo), es
asumimos que no proporciona la extensión .js ya que no podemos ver el sistema de archivos del servidor para ver lo que
significaba Por motivos de coherencia, evite agregar la extensión .js en todas las llamadas que necesite.