// 1️⃣ Animación suave de entrada para cada sección
const sections = document.querySelectorAll(".resume-section");

const appearOnScroll = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.2 }
);

sections.forEach(section => {
  appearOnScroll.observe(section);
});

// 2️⃣ Animar barras de progreso al entrar en pantalla
const progressBars = document.querySelectorAll(".progress");

const animateBars = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const bar = entry.target;
        const percent = bar.dataset.progress;
        const fill = document.createElement("div");
        fill.className = "progress-fill";
        fill.style.width = "0%";
        bar.appendChild(fill);
        setTimeout(() => {
          fill.style.width = percent + "%";
        }, 150);
        observer.unobserve(bar);
      }
    });
  },
  { threshold: 0.3 }
);

progressBars.forEach(bar => animateBars.observe(bar));

// 3️⃣ Hover dinámico en Soft Skills (resalta)
const softTags = document.querySelectorAll(".skill-tags span");
softTags.forEach(tag => {
  tag.addEventListener("mouseenter", () => {
    tag.style.transform = "scale(1.15)";
    tag.style.backgroundColor = "#2b3a67";
  });
  tag.addEventListener("mouseleave", () => {
    tag.style.transform = "scale(1)";
    tag.style.backgroundColor = "#0e1320";
  });
});

// 4️⃣ Experiencia laboral interactiva
const experienceItems = document.querySelectorAll(".experience-item");

experienceItems.forEach(item => {
  item.addEventListener("click", () => {
    item.classList.toggle("expanded");
  });
});

// 5️⃣ Efecto en Educación (aparece uno por uno)
const educationItems = document.querySelectorAll("#education li");

educationItems.forEach((edu, index) => {
  setTimeout(() => {
    edu.classList.add("show");
  }, index * 200);
});

// 6️⃣ Popup de descarga de CV
const popup = document.getElementById("cvPopup");
const downloadBtn = document.getElementById("downloadBtn");
const confirmDownload = document.getElementById("confirmDownload");
const cancelDownload = document.getElementById("cancelDownload");

downloadBtn.addEventListener("click", () => {
  popup.style.display = "flex";
});

cancelDownload.addEventListener("click", () => {
  popup.style.display = "none";
});

confirmDownload.addEventListener("click", () => {
  popup.style.display = "none";
  const link = document.createElement("a");
  link.href = "../../assets/cv/CVStevenPiedra.pdf"; 
  link.download = "CVStevenPiedra.pdf";
  link.click();
});

// 7️⃣ Animar título principal al cargar
window.addEventListener("load", () => {
  const header = document.querySelector(".resume-header h1");
  header.style.opacity = "0";
  header.style.transform = "translateY(-20px)";
  setTimeout(() => {
    header.style.transition = "all 1s ease";
    header.style.opacity = "1";
    header.style.transform = "translateY(0)";
  }, 300);
});