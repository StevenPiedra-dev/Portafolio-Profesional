//Animation when you scroll the page
document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll("section, .skills-category");

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  }, { threshold: 0.15 });

  sections.forEach(section => observer.observe(section));
});

//Subtitulo se va escribiendo 
const roles = [
  "Full-Stack Developer",
  "Data Analyst",
  "AI Developer"
];
let i = 0;
let j = 0;
const speed = 100;

function type() {
  if (j < roles[i].length) {
    document.getElementById("typing").textContent += roles[i].charAt(j);
    j++;
    setTimeout(type, speed);
  } else {
    setTimeout(erase, 1500);
  }
}

function erase() {
  if (j > 0) {
    const text = roles[i].substring(0, j - 1);
    document.getElementById("typing").textContent = text;
    j--;
    setTimeout(erase, 50);
  } else {
    i = (i + 1) % roles.length;
    setTimeout(type, 500);
  }
}

document.addEventListener("DOMContentLoaded", type);

//ANIMAR BARRAS DE HABILIDADES
document.addEventListener("DOMContentLoaded", () => {
  const bars = document.querySelectorAll(".bar");

  // Solo animar cuando entran en pantalla
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.animationPlayState = "running";
      }
    });
  }, { threshold: 0.2 });

  bars.forEach(bar => {
    bar.style.animationPlayState = "paused";
    observer.observe(bar);
  });
});

//ANIMACIÓN AL CLICK EN FOTO
const profilePic = document.querySelector(".profile-pic");

if (profilePic) {
  profilePic.addEventListener("click", () => {
    profilePic.classList.add("spin");
    setTimeout(() => profilePic.classList.remove("spin"), 800);
  });
}

//EFECTOS DE SCROLL
const reveals = document.querySelectorAll(".reveal");
const funFacts = document.querySelectorAll(".fun-facts li");

window.addEventListener("scroll", () => {
  const windowHeight = window.innerHeight;
  
  reveals.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < windowHeight - 100) {
      el.classList.add("visible");
    }
  });

  funFacts.forEach((fact, index) => {
    const top = fact.getBoundingClientRect().top;
    if (top < windowHeight - 80) {
      setTimeout(() => fact.classList.add("visible"), index * 100);
    }
  });
});
