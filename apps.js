

var imagen_primera = document.getElementsByClassName("lazyto");
var tarjeta_texto = document.getElementById("fotito");

var tarjeta_trabajo_diseno = document.getElementsByClassName("tarjeta_trabajo_diseno");
var tarjeta_diseno = document.getElementsByClassName("tarjeta_diseno");


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

var boton = document.getElementById("boton_navbar");
var menusito = document.getElementById("navbar_mobilito"); 
var seccion = document.getElementById("seccion");
var checkin = document.getElementById("check");



function desplegaMenu(){
    menusito.style.display = "flex";
}

function escondeMenu(){
    if(checkin.checked == true)
    menusito.style.display = "none";
}

boton.addEventListener("click", desplegaMenu);
boton.addEventListener("click", escondeMenu);
  

