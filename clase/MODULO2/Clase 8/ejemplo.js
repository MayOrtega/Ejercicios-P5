var lista = document.querySelectorAll(".lenguajes > li");

for (let iterador = 0; iterador < lista.length; iterador++) {
  lista[iterador].addEventListener("click", function () {
    this.style.color = "red";
  });
}

var title1 = document.querySelector("#destacado");

title1.addEventListener("mouseover", function () {
  {
    this.classList.add("cambiarcolorfondo");
  }
});

title1.addEventListener("mouseleave", function () {
  {
    this.classList.remove("cambiarcolorfondo");
  }
});

title1.addEventListener("click", function () {
  {
    this.classList.add("cambiarcolorfondo2");
  }
});

title1.addEventListener("mouseleave", function () {
  {
    this.classList.remove("cambiarcolorfondo2");
  }
});


var lista2 = document.querySelectorAll(".lenguajes2 > li");

for (let iterador = 0; iterador < lista2.length; iterador++) {
  lista2[iterador].addEventListener("click", function () {
    this.classList.add('listaOrdenada')
  });
}