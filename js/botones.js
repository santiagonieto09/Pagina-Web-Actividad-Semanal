function redireccionarAPagina(url) {
    window.location.href = url;
  }
  
  // Seleccionar todos los botones por su clase
  var btns = document.querySelectorAll(".nav__link .btn-estilo");
  
  // Recorrer todos los botones y agregar el evento de clic a cada uno
  for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function() {
      // Obtener el valor del atributo "data-url" del botón actual
      var url = this.getAttribute("data-url");
  
      // Llamar a la función "redireccionarAPagina" y pasar la URL correspondiente
      if (url) {
        redireccionarAPagina(url);
      }
    });
  }