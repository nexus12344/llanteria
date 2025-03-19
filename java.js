document.getElementById("menu-toggle").addEventListener("click", function () {
    document.getElementById("slidebar").style.width = "250px"; // Abre el slidebar
    document.body.classList.add("slidebar-open");
});

document.getElementById("close-btn").addEventListener("click", function () {
    document.getElementById("slidebar").style.width = "0"; // Cierra el slidebar
    document.body.classList.remove("slidebar-open");
});
