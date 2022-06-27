import fetch from 'node-fetch';
const url = "https://jsonplaceholder.typicode.com/todos";

//fecth devuelve una promesa
fetch(url).then(response => response.json()) 
    .then(respuesta => {
        console.log(respuesta)
    })
    //Se hace un catch sencillo por si hay un error en la promesa
    .catch( err => console.log(first))
   