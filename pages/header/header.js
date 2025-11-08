//Header
document.addEventListener("DOMContentLoaded", () => {
  fetch("/pages/header/header.html")
    .then((res) => res.text())
    .then((data) => {
      document.body.insertAdjacentHTML("afterbegin", data);

      // Script para el menú hamburguesa
      const menuToggle = document.getElementById("menu-toggle");
      const navLinks = document.getElementById("nav-links");

      menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("active");

        // Animación visual para la hamburguesa
        menuToggle.classList.toggle("open");
      });
    })
    .catch((err) => console.error("Error cargando el header:", err));
});
