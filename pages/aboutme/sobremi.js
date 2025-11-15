// =============================
// ANIMACIONES AL HACER SCROLL
// =============================
document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll("section, .skills-category");

  // Observa cuando una sección entra en pantalla
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add("visible");
      });
    },
    { threshold: 0.15 }
  );

  sections.forEach((section) => observer.observe(section));
});

// =============================
// EFECTO DE ESCRITURA AUTOMÁTICA (Typing Effect)
// =============================

// Frases que se mostrarán dinámicamente
const roles = ["Full-Stack Developer", "Data Analyst", "AI Developer"];
let i = 0; // índice del rol actual
let j = 0; // índice de la letra actual
const speed = 100; // velocidad de escritura (ms)

function type() {
  const typingEl = document.getElementById("typing");
  if (!typingEl) return; // seguridad por si no existe el elemento

  if (j < roles[i].length) {
    typingEl.textContent += roles[i].charAt(j);
    j++;
    setTimeout(type, speed);
  } else {
    setTimeout(erase, 1500); // espera antes de borrar
  }
}

function erase() {
  const typingEl = document.getElementById("typing");
  if (!typingEl) return;

  if (j > 0) {
    typingEl.textContent = roles[i].substring(0, j - 1);
    j--;
    setTimeout(erase, 50);
  } else {
    i = (i + 1) % roles.length; // pasa al siguiente rol
    setTimeout(type, 500);
  }
}

document.addEventListener("DOMContentLoaded", type);

// =============================
// ANIMACIÓN DE BARRAS DE HABILIDAD
// =============================
document.addEventListener("DOMContentLoaded", () => {
  const bars = document.querySelectorAll(".bar");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting)
          entry.target.style.animationPlayState = "running";
      });
    },
    { threshold: 0.2 }
  );

  bars.forEach((bar) => {
    bar.style.animationPlayState = "paused"; // pausadas por defecto
    observer.observe(bar);
  });
});

// =============================
// ANIMACIÓN AL CLICK EN FOTO DE PERFIL
// =============================
const profilePic = document.querySelector(".profile-pic");

if (profilePic) {
  profilePic.addEventListener("click", () => {
    profilePic.classList.add("spin"); // agrega clase que hace girar
    setTimeout(() => profilePic.classList.remove("spin"), 800); // remueve para poder repetir
  });
}

// =============================
// EFECTOS EXTRA DE SCROLL (Reveals y Fun Facts)
// =============================
const reveals = document.querySelectorAll(".reveal");
const funFacts = document.querySelectorAll(".fun-facts li");

window.addEventListener("scroll", () => {
  const windowHeight = window.innerHeight;

  // Muestra elementos con clase "reveal" al entrar en pantalla
  reveals.forEach((el) => {
    const top = el.getBoundingClientRect().top;
    if (top < windowHeight - 100) el.classList.add("visible");
  });

  // Muestra los fun facts con un pequeño retraso escalonado
  funFacts.forEach((fact, index) => {
    const top = fact.getBoundingClientRect().top;
    if (top < windowHeight - 80) {
      setTimeout(() => fact.classList.add("visible"), index * 100);
    }
  });
});
