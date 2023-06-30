

  var imagen_primera = document.getElementsByClassName("lazyto");
var tarjeta_texto = document.getElementById("fotito");



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
    

