
var calcEdad = () => {
var edad = prompt('Ingrese su edad')
var calc = edad * 365;
alert('Su edad equivale a ' + calc + ' días');
}

var calcSnacks = () => {
    var myEdad = prompt('¿Cuál es tu edad?');
    var maxEdad = prompt('¿Cuál es tu edad máxima?');
    var papitas = prompt('¿Cuántas papitas comerás al día');
    var proyeccion = (maxEdad - myEdad)*365
    var result = proyeccion * papitas
    alert('Necesitarás ' + result + ' papitas para sobrevivir hasta los ' + maxEdad + ' años')
    alert('Si cada snack vale $500, necesitarás ' + result*500 + 'papitas' )
  

}