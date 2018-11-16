## Beginner’s Introduction to JSON

JSON es un formato estándar utilizado para transferir datos a través de la red. 
Se puede considerar un subconjunto de objeto JavaScript.
literales para la mayoría de los propósitos. Básicamente restringe 
lo que los literales de objetos JavaScript se consideran válidos. Objetos JSON para
Facilite la implementación de la especificación y proteja a los usuarios 
de los casos perimetrales de los que deben preocuparse. Nosotros lo tomaremos
Una mirada práctica a JSON en esta sección.

Una de las restricciones impuestas por la especificación 
JSON es que debe usar comillas para las claves de objetos de JavaScript.
Esto le permite evitar los casos en los que no puede tener palabras 
clave de JavaScript como claves para un objeto literal. Por ejemplo,
el JavaScript en el Listado 4-10 fue un error de sintaxis 
en ECMA Script 3 (una versión anterior de JavaScript) porque para es un
Palabra clave de JavaScript.

Listing 4-10. Invalid JS in Old Browsers (Pre ECMAScript 5)

```
var foo = { for : 0 }
```

En cambio, una representación válida del mismo objeto compatible con todas las versiones de JavaScript sería lo que es
se muestra en el Listado 4-11.

Listing 4-11. Valid JS Even in Old Browsers (Pre ECMAScript 5)

```
var foo = { "for" : 0 }
```

Además, la especificación JSON limita lo que puede tener como 
valor para que una clave determinada sea un subconjunto seguro de JavaScript
objetos. Los valores solo pueden ser una cadena, un número, un 
valor booleano (verdadero o falso), una matriz, un nulo u otro objeto JSON válido.
Un objeto JSON que muestra todo esto se muestra en el Listado 4-12.

Listing 4-12. Sample JSON

```
{
  "firstName": "John",
  "lastName": "Smith",
  "isAlive": true,
  "age": 25,
  "height_cm": 167.64,
  "address": {
    "streetAddress": "21 2nd Street",
    "city": "New York",
    "state": "NY",
  },
  "phoneNumbers": [
    { "type": "home", "number": "212 555-1234" },
    { "type": "fax", "number": "646 555-4567" }
  ],
  "additionalInfo": null
}
```

El valor de FirstName es una cadena, age es un número, isAlive es un booleano, phoneNumbers es una matriz de JSON válida
objetos, la información adicional es nula y la dirección es otro objeto JSON válido. La razón de esta restricción de tipos es
Para simplificar el protocolo. Si necesita pasar objetos de JavaScript arbitrarios como JSON, puede intentar serializar / deserializar
a una cadena (común para fechas) o un número (común para enumeraciones).

Otra restricción es que la última propiedad no debe tener una coma adicional. 
Una vez más, esto es debido a los navegadores antiguos
(por ejemplo, IE8) es restrictivo sobre lo que es y no es un 
literal de JavaScript válido. Por ejemplo, en el Listado 4-13,
Aunque el primer ejemplo es un literal de objeto JavaScript válido 
en Node.js y navegadores modernos, no es JSON válido.

Listing 4-13. Trailing Command after Last Value

```
// Invalid JSON
{
  "foo": "123",
  "bar": "123",
}
// Valid JSON
{
  "foo": "123",
  "bar": "123"
}
```

Para reiterar, JSON es, en gran medida, solo literales de objetos JavaScript 
con algunas restricciones razonables que solo sirven
para aumentar la facilidad de implementación de la 
especificación y que han sido fundamentales en su popularidad como datos
protocolo de transferencia.





