const fs = require ('fs')

const mascota = [
    {nombre: 'Rex',
     edad:8
    },
    {nombre: 'Meli',
     edad:2    
    }
]
 //transformar objeto a JSON    
fs.writeFileSync('./mascotas.json', JSON.stringify(mascota))

//leer archivo creado
const getData = () =>{
    let data = fs.readFileSync('./mascotas.json', 'utf8')
   if(!data) return []
    else { 
        const file = JSON.parse(data)
        return file
    }
}

const datosMascota = getData(); 

console.log(datosMascota)