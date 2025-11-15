  // === Animación suave de entrada para secciones ===
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
sections.forEach(section => appearOnScroll.observe(section));

// === Animar barras de progreso ===
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

// === Hover dinámico en Soft Skills ===
document.querySelectorAll(".skill-tags span").forEach(tag => {
  tag.addEventListener("mouseenter", () => {
    tag.style.transform = "scale(1.15)";
    tag.style.backgroundColor = "#2b3a67";
  });
  tag.addEventListener("mouseleave", () => {
    tag.style.transform = "scale(1)";
    tag.style.backgroundColor = "#0e1320";
  });
});

// === Experiencia expandible ===
document.querySelectorAll(".experience-item").forEach(item => {
  item.addEventListener("click", () => item.classList.toggle("expanded"));
});

// === Popup de descarga de CV ===
const popup = document.getElementById("cvPopup");
document.getElementById("downloadBtn").addEventListener("click", () => popup.style.display = "flex");
document.getElementById("cancelDownload").addEventListener("click", () => popup.style.display = "none");
document.getElementById("confirmDownload").addEventListener("click", () => {
  popup.style.display = "none";
  const link = document.createElement("a");
  link.href = "../../assets/cv/CVStevenPiedra.pdf";
  link.download = "CVStevenPiedra.pdf";
  link.click();
});