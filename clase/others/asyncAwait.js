import fetch from 'node-fetch';

const obtenerDatos = async () => {
    console.log('Entró');
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    const datos = await response.json();
    console.log(datos)
}
obtenerDatos();
console.log('fin')


const obtenerDatos2= async () => {
   try{
   console.log('Entró');
   const response = await fetch("https://jsonplaceholder.typicode.com/todos");
   const datos = await response.json();
   console.log(datos)

   }catch (error) {
   console.log(error)
   } 
}
obtenerDatos2();
console.log('fin')