var lista = document.querySelectorAll('.lenguajes > li');

for (let iterador = 0; iterador < lista.length; iterador++) {
    lista[iterador].addEventListener('click', function() {
    
         this.style.color = 'red';
})
}
