// console.log(this);

class EstudianteJS {
    constructor(nombre, edad){
        //setear atributos
        this.nombre = nombre;
        this.edad = edad;
    }
}
//crear instancia
var estudiantePlataforma5 = new EstudianteJS("Doraemon", "70");
// console.log(estudiantePlataforma5)

var miVariable = function miSuperFuncion() {
    console.log(this);
}

miVariable();