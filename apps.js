

var imagen_primera = document.getElementsByClassName("lazyto");
var tarjeta_texto = document.getElementById("fotito");

var tarjeta_trabajo_diseno = document.getElementsByClassName("tarjeta_trabajo_diseno");
var tarjeta_diseno = document.getElementsByClassName("tarjeta_diseno");



  function efectoBlur(){
    tarjeta_texto.style.zIndex = "10";
  }

  function quitarBlur(){
    tarjeta_texto.style.zIndex = "0";
  }

for (let i = 0; i< imagen_primera.length; i++){
  imagen_primera[i].addEventListener("mouseenter", efectoBlur);
  imagen_primera[i].addEventListener("mouseleave", quitarBlur);
}
    

function infoDisenoAparece(){
    tarjeta_diseno[j].style.display = "flex";
}

function infoDisenoDesaparece(){
    tarjeta_diseno[j].style.display = "none";
}

for (let j = 0; j<tarjeta_diseno.length; j++){
  tarjeta_trabajo_diseno[j].addEventListener("mouseenter", infoDisenoAparece);
  tarjeta_trabajo_diseno[j].addEventListener("mouseleave", infoDisenoDesaparece);
}


var tarjeta_diseno_proyecto = document.getElementsByClassName("diseno_articulo");

var titulo = document.getElementsByClassName("nombre_proyecto_diseno");


for (let t = 0; t<tarjeta_diseno_proyecto.length; t++) {
  tarjeta_diseno_proyecto[t].addEventListener("mouseenter", function(numero){
    var titulo = this.getElementsByClassName("nombre_proyecto_diseno")[0];
    titulo.style.textDecoration = "underline";
    titulo.style.textDecorationColor = "red";
    titulo.style.transition = "0.1s";
  })

  tarjeta_diseno_proyecto[t].addEventListener("mouseleave", function(numero){
    var titulo = this.getElementsByClassName("nombre_proyecto_diseno")[0];
    titulo.style.textDecoration = "none";
    titulo.style.transition = "0.1s";
  })
}


  elementosPadre[i].addEventListener("mouseleave", function(event) {
    var titulo = this.getElementsByClassName("titulo")[0]; // Obtener el título del elemento actual
    titulo.style.textDecoration = ""; // Eliminar el estilo del título
  });

  

