const argumentos = process.argv.slice(2);

let num1 = Number(argumentos[0]);
let num2 = Number(argumentos[1]);
let num3 = Number(argumentos[2])

let resultado = (num1*num2)/num3;

console.log(resultado)