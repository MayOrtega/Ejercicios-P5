const fs = require ('fs')

//Crear archivo con node
const shopping = [
    {artículo: 'harina',
     precio: '$800',
     cantidad: '2 kgs'                                                                                                      
    },
    {artículo: 'zapallo',
     precio: '$1000',
     cantidad: '0.5 kgs'                                                                                                      
    },
    {articulo: 'aceite',
     precio: '$3500',
     cantidad: '1'
    }

]


//Crear archivo con node
function maipularArchivo (){
fs.writeFile('./shopping.js', JSON.stringify(shopping), (error) =>{
    if(error){
        throw error;
    }
    console.log('Archivo creado')
})

fs.renameSync('shopping.js', 'renombrado.js')
console.log('Archivo renombrado')


// fs.writeFileSync('./shopping.js', JSON.stringify(shopping))
// console.log('Archivo creado');

// fs.rename('./shopping.js', 'renombrado.js', () => {
//     console.log("\nArchivo renombrado\n");

// })
   

    // try {
    //     fs.unlinkSync('renombrado.js')
    //     console.log('Archivo eliminado')
    // } catch(err) {
    //     console.error(err)
    // }
     

}
maipularArchivo()

