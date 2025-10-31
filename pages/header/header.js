// js/header.js
//Espera a que el DOM esté completamente cargado
document.addEventListener("DOMContentLoaded", () => {
    console.log("Header JS cargado correctamente.", window.location.href);

    // Carga dinámica del header (trae el archivo header.html)
  fetch('../../pages/header/header.html')
    .then(response => response.text())
    .then(data => {
      // Inserta el contenido del header en el contenedor de la página
      document.getElementById("headerPages").innerHTML = data;

      // Una vez insertado el HTML, se agrega la funcionalidad del menú
      const menuTogglePages = document.getElementById("menuTogglePages");
      const navLinksPages = document.querySelector(".nav-linksPages");

      // Evento para mostrar/ocultar el menú (responsive)
      menuTogglePages.addEventListener("click", () => {
        navLinksPages.classList.toggle("active");
      });

      // Cierra el menú automáticamente cuando se hace clic en un enlace
      document.querySelectorAll(".nav-linksPages a").forEach(link => {
        link.addEventListener("click", () => {
          navLinksPages.classList.remove("active");
        });
      });
    })
    // Si ocurre un error, lo muestra en consola
    .catch(error => console.error("Error loading header:", error));
});
