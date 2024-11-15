
document.addEventListener('DOMContentLoaded', function () {
    // Cargar navbar en la etiqueta con id header
    fetch('navbar.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('header').innerHTML = data;
        });
    // Cargar footer en la etiqueta con el id footer
    fetch('footer.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('footer').innerHTML = data;
        });

});