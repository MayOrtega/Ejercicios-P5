//Molde

class Libro{
    constructor(nombreC, autorC, editorialC, generoC){
        this.nombre = nombreC;
        this.autor = autorC;
        this.editorial = editorialC;
        this.genero = generoC
    }

//Método en la definicón de clase
mostrarLibro () {
    console.log("Nombre libro: " + this.nombre);
    console.log("Autor: " + this.autor);
    console.log("Editorial: " + this.editorial);
    console.log("Género: " + this.genero);
    console.log('__________________________')
    
}
}
//Instanciar 3 objetos
var dune = new Libro ("Dune", "Franz Herbert", "Acervo", "Ciencia Ficción");

var cronicasMarcianas = new Libro ("Crónicas Marcianas", "Ray Bradbury", "Doubleday & Company", "Ciencia Ficción");

var laHistoriaInterminable= new Libro ("La Historia Interminable", "Michael Ende", "Thienemanns Verlag", "Fantasía");

//Invocar método mostrar libros
dune.mostrarLibro ();
cronicasMarcianas.mostrarLibro ();
laHistoriaInterminable.mostrarLibro ();

//Poblar el arreglo
var libros = [];

libros[0] = dune;
libros[1] = cronicasMarcianas;
libros[2] = laHistoriaInterminable;

console.log(libros)
console.log('***********')

//Función filtrar por autor

function filtroAutor (libros, autor) {
    for (i= 0; i < libros.length; i++) {
        if (autor == (libros[i].autor)) {
            console.log (libros[i].nombre);
                     

        }
    }
}

//testeo.
filtroAutor (libros, "Dune");

filtroAutor (libros, "La Historia Interminable");


