## Node.js Events

Ya tenemos una forma de ejecutar un código basado en algún evento
(evento) usando devoluciones de llamada. Una mas general
El concepto para manejar las ocurrencias de importancia son los
eventos. Un evento es como una transmisión, mientras que una
devolución de llamada es como un
apretón de manos. Un componente que genera eventos no sabe nada acerca
de sus clientes, mientras que un componente que utiliza devoluciones de llamada
sabe mucho Esto hace que los eventos sean ideales para
escenarios en los que el significado de la ocurrencia está determinado por
el cliente. Tal vez el cliente quiera saber, tal vez no.
El registro de múltiples clientes también es más sencillo con esto incluso
Como veremos en esta sección.

Node.js viene con soporte incorporado para eventos integrados en el
módulo de eventos principales. Como siempre, usar
requiere('eventos') para cargar el módulo. El módulo de eventos
tiene una clase simple "EventEmitter", que
presente al lado

