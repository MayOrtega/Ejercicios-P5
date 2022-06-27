const promesa = new Promise( (resolve, reject) => {
//Realizar petición al servidor. Retorna una respuesta que podemos manipular
setTimeout(() => {
// Si la promesa se cumple llamamos a resolve y le pasaos la respuesta del servidor
const respuesta = 100;
resolve(respuesta);
// reject('Error en la respuesta')

}, 2000)
})
//Para hacer uso del valor recibido (respuesta) usamos then que recibe un call back
//param = valor de la respuesta
.then((param) => {
console.log(param)
}).catch((error) => {
console.log('Error: '+ error)
})