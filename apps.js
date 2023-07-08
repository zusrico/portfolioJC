

var imagen_primera = document.getElementsByClassName("lazyto");
var tarjeta_texto = document.getElementById("fotito");

var tarjeta_trabajo_diseno = document.getElementsByClassName("tarjeta_trabajo_diseno");
var tarjeta_diseno = document.getElementsByClassName("tarjeta_diseno");

    
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


var boton_menu = document.getElementById("boton_navbarito");
var menu_desplegable = document.getElementById("navbar_mobilito");
var titulo = document.getElementById("titulazo");

var checkin = false;

function despliegaMenu(){
  if(!checkin){
    menu_desplegable.style.display = "flex";
  }
  checkin = !checkin;
}

function escondeMenu(){
  if(!checkin){
    menu_desplegable.style.display = "none";
  }
}


function tituloRojo(){
  titulo.style.backgroundColor = "red";
}


boton_menu.addEventListener("click", tituloRojo);

boton_menu.addEventListener("click", despliegaMenu);
boton_menu.addEventListener("mouseleave", escondeMenu);

  

