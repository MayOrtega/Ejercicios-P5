let agregar = document.querySelector('#boton-agregar');
let input = document.querySelector('#primerInput');
let container = document.querySelector('#cont')

class Item {
    constructor(nuevaTarea){

    this.crearDiv = nuevaTarea
}

crearDiv(nuevaTarea){

    const newDiv = document.createElement('div');
    newDiv.classList.add = 'item';
    container.appendChild(newDiv)
    newDiv.appendChild(inputItem);

    const inputItem = document.createElement('div');
    inputItem.type = 'text';
    inputItem.disabled = true;
    inputItem.classList.add = 'itemInput';
    inputItem.value = nuevaTarea;
       

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
        if (inputItem.disabled == false) {
            inputItem.disabled = true;
            botonEditar.innerHTML = "<i class='fas fa-lock'></i>";
        } else {
            inputItem.removeAttribute("disabled");
            botonEditar.innerHTML = "<i class='fas fa-lock-open'></i>";
        }
    })

    botonRemover.addEventListener('click', function(){
        container.removeChild(newDiv)

    })
}
}


