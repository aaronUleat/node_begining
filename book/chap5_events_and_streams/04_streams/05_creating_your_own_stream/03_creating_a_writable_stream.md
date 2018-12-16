## Creating a Writable Stream

Crear su propia clase de flujo de escritura es similar a cómo 
creamos un flujo legible. Heredas de la escritura
Clase e implementa el método _write. El método _write 
se pasa en una porción que necesita ser procesada como su primera
argumento.

El Listado 5-42 es un flujo de escritura simple que registra 
en la consola todos los datos pasados. En este ejemplo, simplemente
canalizar desde el flujo de archivo legible a este flujo grabable (Logger).