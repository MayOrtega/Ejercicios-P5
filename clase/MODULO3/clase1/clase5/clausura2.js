function crearSumador(x){
    return function(y) {
        return x + y;
    }
}

var sumar5 = crearSumador(5);  //Es un closure
var sumar10 = crearSumador(10); //Es un closure
var sumar15 = crearSumador(15)

console.log(sumar5(2)); //--> Devuelve 7
console.log(sumar10(2)); //--> Devuelve 12
console.log(sumar15(-8)) //--> Devuelve 7