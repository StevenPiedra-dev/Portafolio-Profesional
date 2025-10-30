/* Busca en el HTML con el atributo menuToogle y busca el elemnto que cntiene todos los links de la lista */
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.querySelector(".nav-links");

/*Escucho cuando el usuario hace clic en el icono del menù y agrego o quito el "active"*/
menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// 👇 Esto cierra el menú cuando haces clic en un enlace
document.querySelectorAll(".nav-links a").forEach(link => { /** Obtengo todos los enlaces dentro del menu y con el foreach recorro cada uno de llos*/
  link.addEventListener("click", () => {
    navLinks.classList.remove("active"); /*Si hay un click, cierra el menú*/
  });
});
