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


const getDeportista = function (id){
    const deportista = deportistas.find(
        function(d) {
        const deportistaEncontrado = d.id === id;
        if(d){
            return
        }



    })
}