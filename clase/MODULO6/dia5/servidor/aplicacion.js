const { response } = require('express');
const express = require ('express');
const app = express();

app.use(express.static(__dirname + '/public'))

//Recibe los errores y los envía a la 404
app.use((request, response, next) => {
    response.status(404).sendFile(__dirname + '/public/404.html')
})

//get es un método del protocolo http. Usamos get con respuesta por defecto
app.get('/', (request, response) => {
    console.log('Entramos a opción')
})

app.get('/ejemplo', (request, response) => {
    response.send('Hola Plataforma5')
})

app.get('/usuario', (request, response) => {
    response.send('Esta es la página para el manejo de usuario')
})



//Especificación del puerto. 8080 es el más usado
const PORT = 9090;

//Queremos que escuche nuestros request
app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`)
});


