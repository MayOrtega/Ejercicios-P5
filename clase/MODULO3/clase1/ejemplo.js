class GatoAnimado {
    constructor(nombreC, autorC, annioCreacionC, formatoC){
        this.nombre = nombreC;
        this.autor = autorC;
        this.annioCreacion = annioCreacionC;
        this.formato = formatoC;
    }
}

var doraemon = new GatoAnimado ("Doraemon", "Fujiko", 1988, "animación")

console.log(doraemon["formato"] + " " + doraemon["autor"])

//Borrar
delete doraemon.formato
console.log(doraemon)