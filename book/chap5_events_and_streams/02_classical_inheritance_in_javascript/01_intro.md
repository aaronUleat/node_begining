## Classical Inheritance in JavaScript

Vimos cómo funciona el prototipo en el Capítulo 2. JavaScript soporta 
la herencia de prototipos. En JavaScript, un miembro es
buscó en el elemento actual (como item.foo), seguido de su 
prototipo (item.__proto__.foo), que se sigue
por el prototipo de su prototipo (item.__proto__.__proto__.foo), 
y así sucesivamente hasta el propio prototipo (por ejemplo,
el elemento .__ proto __.__ proto __.__ proto__) es nulo. 
Ya hemos visto cómo esto se puede utilizar para emular un clásico
construcción de clase orientada a objetos en JavaScript. 
Ahora veamos cómo se puede usar para implementar objetos clásicos.
Herencia orientada.