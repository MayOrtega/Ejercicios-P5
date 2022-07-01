const { response } = require('express');
const express = require ('express');
const app = express();


//get es un método del protocolo http. Usamos get con respuesta por defecto
app.get('/', (request, response) => {
    response.send('Levantando el servidor')
})

//Especificación del puerto. 8080 es el más usado
const PORT = 3000;

//Queremos que escuche nuestros request
app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`)
});


