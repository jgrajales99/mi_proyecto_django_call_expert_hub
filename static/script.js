document.addEventListener("DOMContentLoaded", function () {
    // Capturamos todos los enlaces del menú
    const menuLinks = document.querySelectorAll("nav ul li a");

    menuLinks.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault(); // Evita el salto automático
            const targetId = this.getAttribute("href").substring(1); // Obtiene el ID de la sección destino
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                // Ajustar el margen entre secciones solo si no se ha aplicado antes
                document.querySelectorAll("section").forEach(section => {
                    if (!section.classList.contains("spaced")) {
                        section.style.marginBottom = "200px"; // Ajusta el espacio entre secciones
                        section.classList.add("spaced"); // Marca como modificado para evitar que se resetee
                    }
                });

                // Pequeño truco para forzar la animación cada vez que se hace clic
                setTimeout(() => {
                    targetSection.scrollIntoView({
                        behavior: "smooth",
                        block: "center"
                    });
                }, 100); // Espera un poco antes de mover la vista para evitar interferencias
            }
        });
    });
});
function cambiarEstilo(estilo) {
    document.getElementById("estilos").setAttribute("href", `/static/${estilo}`);
}

document.addEventListener("DOMContentLoaded", function () {
    let toggleAccesibilidad = document.getElementById("toggleAccesibilidad");
    let menuAccesibilidad = document.getElementById("menuAccesibilidad");

    toggleAccesibilidad.addEventListener("mouseenter", function () {
        menuAccesibilidad.classList.remove("hidden"); // Mostrar menú
    });

    menuAccesibilidad.addEventListener("mouseleave", function () {
        menuAccesibilidad.classList.add("hidden"); // Ocultar cuando el mouse salga del menú
    });
});
