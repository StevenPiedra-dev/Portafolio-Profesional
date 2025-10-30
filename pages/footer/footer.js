// js/footer.js
document.addEventListener("DOMContentLoaded", () => {
    console.log("Cargando footer desde:", window.location.href);
    fetch('../../../pages/footer/footer.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById("footer").innerHTML = data;
        })
    .catch(error => console.error("Error loading footer:", error));
});
