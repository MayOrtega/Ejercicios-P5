class Animal {
        constructor(nombre, especie, lugarDeOrigen, tipoDeComida){
            this.nombre = nombre
            this.especie = especie;
            this.lugarDeOrigen = lugarDeOrigen;
            this.tipoDeComida;
        }
}

class Gato extends Animal {
    constructor(nombre, especie, lugarDeOrigen, tipoDeComida, cantidadDeMiauAlDia, horaDeSuenno){
           super(nombre, especie, lugarDeOrigen, tipoDeComida);
           this.cantidadDeMiauAlDia = cantidadDeMiauAlDia;
           this.horaDeSuenno = horaDeSuenno;
    }
}

var unGatoCualquiera = new Gato('Benito','Filinus Domesticum','Romano','Cat Chow',10, 20,)
console.log(unGatoCualquiera)


class Perro extends Animal {
    constructor(nombre,especie, lugarDeOrigen, tipoDeComida, cantidadDeGuaus, movimientosDeCola){
        super(nombre,especie,lugarDeOrigen,tipoDeComida);
        this.cantidadDeGuaus = cantidadDeGuaus;
        this.horaDeSuenno = horaDeSuenno
    }
}

var unPerroCualquiera = new Gato('Raco','Mestizo','Kiltro','Pedigree',70, 10,)
console.log(unPerroCualquiera)