// js/footer.js
document.addEventListener("DOMContentLoaded", () => {
    console.log("Loading footer from:", window.location.href);
    fetch('../../pages/footer/footer.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById("footerPages").innerHTML = data;
        })
    .catch(error => console.error("Error loading footer:", error));
});
