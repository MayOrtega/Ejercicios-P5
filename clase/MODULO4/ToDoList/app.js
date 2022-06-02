var agregar = document.querySelector('#boton-agregar');
var input = document.querySelector('#input');
var container = document.querySelector('#container')

class Item {
    constructor(nuevaTarea){

    this.crearDiv = nuevaTarea
}

crearDiv(nuevaTarea){
    const inputItem = document.createElement('div');
    inputItem.type = 'text';
    inputItem.disabled = true;
    inputItem.classList.add = 'itemInput';
    inputItem.value = nuevaTarea;
    newDiv.appendChild(inputItem);

    const newDiv = document.createElement('div');
    newDiv.classList.add = 'item';

    const botonEditar = document.createElement('button');
    botonEditar.classList.add = 'botonEditar'
    botonEditar.innerHTML= "<i class='fas fa-lock'></i>";
    newDiv.appendChild(botonEditar);

    const botonRemover = document.createElement('button');
    botonRemover.classList.add = 'botonRemover'
    botonRemover.innerHTML= "<i class='fas fa-trash'></i>";
    newDiv.appendChild(botonRemover);

    container.appendChild(newDiv)

    botonEditar.addEventListener('click', function(){
        botonEditar.
    })


}
}
