## Semantic Versioning

Los paquetes Good Node.js / NPM siguen las versiones semánticas, 
que es un estándar de la industria y se debe seguir como un
Buenas prácticas de desarrollo de software. La semántica 
es el estudio del significado. Versiones semánticas significa versiones
su software de una manera que los números de versión tienen 
un significado significativo. Hay mucho que se puede decir sobre
versiones semánticas, pero la siguiente es una explicación 
simplificada pero práctica para un desarrollador de Node.js:

* En pocas palabras, los desarrolladores de Node.js siguen un esquema de versiones de tres dígitos X.Y.Z donde X, Y y
Z son enteros no negativos. X es la versión principal, Y es la menor y Z es la versión del parche.
* Las versiones de parches deben incrementarse si se introducen correcciones compatibles con versiones anteriores.
* Las versiones menores deben incrementarse si se introducen nuevas funciones compatibles con versiones anteriores.
* Las versiones principales deben incrementarse si las correcciones / características / cambios incompatibles hacia atrás son
introducido.

Teniendo en cuenta estos puntos, puede ver que v1.5.0 de un paquete 
debe ser reemplazable en lugar de v1.6.1 como el
La nueva versión debe ser compatible con versiones anteriores 
(la versión principal 1 es la misma). Esto es algo que los buenos paquetes buscan.

Sin embargo, la realidad es que a veces se introducen errores 
inevitablemente con nuevas versiones o se utilizó el código.
de una manera que los autores originales del paquete no predijeron. 
En tal caso, algún cambio de ruptura puede ser
introducido sin saberlo.