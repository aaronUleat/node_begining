## Introducing Connect

Como hemos visto, los módulos Core Node.js proporcionan características básicas pero esenciales 
para crear sus propias aplicaciones web.
Hay bastantes marcos web disponibles en NPM que se basan en esto. 
Una muy popular es connect
(npm install connect), que es un framework de middleware.

Middleware es básicamente cualquier software que se encuentra entre el 
código de su aplicación y alguna API de bajo nivel. Conectar
amplía la funcionalidad del servidor HTTP incorporado y agrega 
un marco de plug-in. Los complementos actúan como middleware y,
Por lo tanto, conectar es un framework de middleware.

Connect ha recibido una revisión reciente (connect 3.0) y ahora el 
core connect es solo el middleware.
marco de referencia. Cada middleware es su propio módulo NPM separado 
y una parte del ecosistema Connect / ExpressJS más grande.
Exploraremos estos middlewares en el siguiente capítulo. Aquí 
estamos enfocados en usar connect y crear nuestros propios
middlewares.