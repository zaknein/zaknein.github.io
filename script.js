document.addEventListener("DOMContentLoaded", function() {
  var textoCompleto = "German Kröger";
  var textoElemento = document.getElementById("texto-escritura");
  var indice = 0;

  function escribirTexto() {
    if (indice < textoCompleto.length) {
      textoElemento.innerHTML += textoCompleto.charAt(indice);
      indice++;
    } else {
      clearInterval(intervalID);
    }
  }

  var intervalID = setInterval(escribirTexto, 90); // Velocidad de escritura (en milisegundos)
});

var boton1 = document.getElementById("git");
var boton2 = document.getElementById("hab");

boton1.addEventListener("click", function(){
  window.location.href = "https://github.com/zaknein";
});