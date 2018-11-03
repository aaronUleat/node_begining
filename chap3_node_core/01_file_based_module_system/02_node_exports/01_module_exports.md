#### Module Exports

Como se indicó anteriormente, cada archivo en Node.js es un módulo. Los elementos que pretendemos exportar desde un 
módulo deben ser
Adjunto a la variable module.exports. Es importante tener en cuenta que module.exports ya está definido como un nuevo
Objeto vacío en cada archivo. Es decir, module.exports = {} está implícitamente presente. Por defecto, cada módulo 
exporta un
objeto vacío, en otras palabras, {}. (Ver Listado 3-15.)

```
console.log(module.exports); // {}
```
