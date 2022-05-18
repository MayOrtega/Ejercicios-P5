function mostrarAyuda (help) {
document.getElementById('help').innerHTML = help;
}

function callBackDeMostrarAyuda(help){
    return function (){
        mostrarAyuda(help)
    }
}

function setearAyuda (){
    var arregloDeAyuda = [
        {'id': 'email', 'help': 'La dirección de correo es obligatoria'},
        {'id': 'nombre', 'help': 'Debe completar nombre'},
        {'id': 'edad', 'help': 'Debe ser mayor a 18 años'}
    ];
    for(var i = 0; i<arregloDeAyuda.length; i++){
        var item = arregloDeAyuda[i];
        document.getElementById(item.id).onfocus  = callBackDeMostrarAyuda(item.help);
        }
    };


setearAyuda()