function Persona(nombre){
    this.nombre = nombre;
    this.saludar = function(){
        return `${this.nombre} dice hola`
    };
};


var personaUno = new Persona('Rodrigo')