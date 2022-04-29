//Saludo al iniciar el día
// console.log('Hola Daniel')
// console.log('Hola María Ignacia')
// console.log('Hola Juan Pablo')
// console.log('Hola Consuelo')

//Saludo a la vuelta del almuerzo
// console.log('Hola Daniel')
// console.log('Hola María Ignacia')
// console.log('Hola Juan Pablo')

//Saludo a la vuelta del cafecito
// console.log('Hola Daniel')
// console.log('Hola María Ignacia')
// console.log('Hola Juan Pablo')

function saludarATodos(name){
    var saludo = 'Hola' + name;
    console.log(saludo)
}

var iterador = 1;
while (iterador <= 3){
    if(iterador == 1){
        console.log('Buenos días')
    }
    else if(iterador == 2){
        console.log('Buenas tardes')
    }else{
        console.log('Buenos cafecitos')
    }
    saludarATodos('Hola Daniel')
    saludarATodos('Hola María Ignacia')
    saludarATodos('Hola Juan Pablo')
    saludarATodos('Hola Consuelo')
    console.log('-------------')
    
    iterador++
}