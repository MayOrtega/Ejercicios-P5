const deportistas = [
    {
        id:1,
        nombre: "Rodrigo"
    },
    {
        id:2,
        nombre:"Consuelo"
    },
    {
        id:3,
        nombre: "Sergio"
    }
];

const deportes = [
    {
        id:1,
        deporte:"Pesas"
    },
    {
        id:2,
        deporte: "Voley"
    },
    {
        id:3,
        deporte: "Zumba"
    }
];


//Recuperar un deportista
const getDeportista = (id) => {
return new Promise ((resolve, reject) => {


     const deportista = deportistas.find(dep => dep.id === id) ?.nombre;
    //  console.log(deportista)

     (deportista)
      ?resolve(deportista)
      :reject(`No existe el deportista con el id ${id}`);
})
}
 
    


const id = 2;
// getDeportista(id)
// .then(deportista => console.log(deportista))
// .catch( (err) => console.log(err));


// //Ejercicio de clase
// const getDeporte = (id) => {
// return new Promise ((resolve, reject) => {

//     const deporte = deportes.find(d => d.id === id) ?.deporte;

//     (deporte)
//      ?resolve(deporte)
//      :reject (`No existe el deporte con el id ${id}`);
    
// })

// };

// const idDep = 1;
// getDeporte(id)
// .then(deporte => console.log(deporte))
// .catch((err) => console.log(err))


// getDeportista(id)
// .then( deportista => {
//     nombre = deportista;
//     return getDeporte(id)
// })

// .then (deporte => console.log(`El deportista ${nombre} practica este deporte: ${deporte}`))
// .catch( error => console.log(error))


//nueva función para considerar la comunicación asíncrona
const getInfoDeportista = async (id) => 
{
    try{
        let deportista = await getDeportista (id)
        let deporte = await getDeporte (id)

        return `El deporte asignado a ${deportista} es ${deporte}`;

    }catch(error){
throw error
    }

}

getInfoDeportista(id)  
.then(msg => console.log(msg));
.catch(err => console.log(err))