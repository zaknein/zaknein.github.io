document.addEventListener("DOMContentLoaded", function() {
  var titulo = "German Kröger";
  var element = document.getElementById("escritura_titulo");
  var indice = 0;

  function escribirTitulo() {
    if (indice < titulo.length) {
      element.innerHTML += titulo.charAt(indice);
      indice++;
    } else {
      clearInterval(intervalID);
    }
  }

  var intervalID = setInterval(escribirTitulo, 90); 
});

var boton1 = document.getElementById("git");
var boton2 = document.getElementById("hab");

boton1.addEventListener("click", function(){
  window.location.href = "https://github.com/zaknein";
});
boton2.addEventListener("click", function(){
  window.location.href = "#habilidades";
});