//Header
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  // Animación visual para la hamburguesa
  menuToggle.classList.toggle("open");
});

document.addEventListener("DOMContentLoaded", () => {
  // Animate cards and charts when visible
  const appearEls = document.querySelectorAll(
    ".card, .chart-card, .project-card"
  );
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add("in-view");
      });
    },
    { threshold: 0.15 }
  );
  appearEls.forEach((el) => observer.observe(el));

  // Counter animation
  const counters = document.querySelectorAll(".count");
  const counterObs = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const goal = +el.dataset.target;
          let current = 0;
          const step = goal / 40;
          const interval = setInterval(() => {
            current += step;
            el.textContent = Math.floor(current);
            if (current >= goal) {
              el.textContent = goal;
              clearInterval(interval);
            }
          }, 30);
          counterObs.unobserve(el);
        }
      });
    },
    { threshold: 0.6 }
  );
  counters.forEach((c) => counterObs.observe(c));

  // Chart.js visualizations
  new Chart(document.getElementById("chart1"), {
    type: "doughnut",
    data: {
      labels: ["Data", "Full-Stack", "AI"],
      datasets: [
        {
          data: [40, 40, 20],
          backgroundColor: ["#1b2238", "#4563FF", "#9bb4ff"],
        },
      ],
    },
    options: { plugins: { legend: { position: "bottom" } } },
  });

  new Chart(document.getElementById("chart2"), {
    type: "bar",
    data: {
      labels: ["Fintech", "Automation", "Data", "Web Apps", "IA"],
      datasets: [
        { label: "Projects", data: [5, 8, 6, 4, 1], backgroundColor: "#1b2238"},
      ],
    },
    options: { scales: { y: { beginAtZero: true } } },
  });

  new Chart(document.getElementById("chart3"), {
    type: "line",
    data: {
      labels: ["2020","2021", "2022", "2023", "2024", "2025"],
      datasets: [
        {
          label: "Skill Level",
          data: [0, 20, 30, 50, 70, 70],
          borderColor: "lightblue",
          backgroundColor: "rgba(47,102,255,0.2)",
          fill: true,
          tension: 0.3,
        },
      ],
    },
    options: { plugins: { legend: { display: false } } },
  });

  new Chart(document.getElementById("chart4"), {
    type: "radar",
    data: {
      labels: ["SQL", "Python", "Power BI", "React", "Machine Learning"],
      datasets: [
        {
          label: "Skill Score",
          data: [90, 85, 80, 75, 70],
          backgroundColor: "rgba(47,102,255,0.3)",
          borderColor: "lightblue",
        },
      ],
    },
    options: { elements: { line: { borderWidth: 2 } } },
  });

  new Chart(document.getElementById("chart5"), {
    type: "doughnut",
    data: {
      labels: ["Successful Projects", "Iterations"],
      datasets: [{ data: [1, 1], backgroundColor: ["#1b2238", "#dfe8ff"] }],
    },
    options: { plugins: { legend: { position: "bottom" } } },
  });
});
