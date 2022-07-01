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

fs.writeFile('./shopping.js', JSON.stringify(shopping), (error) => {
if(error){
    throw error
}
console.log('Archivo creado')
});

function renombrar () {
fs.rename('shopping.js', 'compras.js', (error) => {
    if(error){
        throw error
    } console.log('Archivo renombrado')
})
}

function timer1() {
    timeout = setTimeout(renombrar, 3000);
  }
  timer1()
 
function eliminar(){
    fs.unlink('compras.js', (error) =>{
        if(error){
            throw error
        }
        console.log('Archivo eliminado')
    })
}
   
function timer2() {
    timeout = setTimeout(eliminar, 6000);
  }
  timer2()