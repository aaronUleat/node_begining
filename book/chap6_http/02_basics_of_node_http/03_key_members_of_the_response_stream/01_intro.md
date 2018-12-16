## Key Members of the Response Stream

Más allá del hecho de que la respuesta implementa un flujo grabable, 
hay algunos otros métodos útiles que necesita
ser consciente de La respuesta se divide en dos secciones: escribir 
los encabezados y escribir el cuerpo. La razón de esto es
que el cuerpo podría potencialmente contener una gran cantidad de 
datos que necesitan transmisión. Los encabezados especifican cómo estos datos
será presentado y el cliente debe interpretarlo antes de que pueda comenzar dicha transmisión.

