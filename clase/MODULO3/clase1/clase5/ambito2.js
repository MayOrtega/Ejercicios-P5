const casaBabaYaga = {
    nombre:'casa babaYaga',
    propositos: 'cosas horribles',

caminar() {
    console.log(`Yo, la${this.nombre}`);
},

atrapar(individuo){
    console.log(`Yo, la ${this.nombre} atrapo a ${individuo}`);
},

darSustito(){
console.log(`Yo, la ${this.nombre} doy mucho sustito`);
}
}

const laCasaDelTrauko = {
    nombre:"La casa del Trauko"

};

casaBabaYaga.caminar.call(laCasaDelTrauko);
casaBabaYaga.atrapar.call(laCasaDelTrauko, 'Doncellas');
