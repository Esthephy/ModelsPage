document.addEventListener("DOMContentLoaded", function () {
    const menuItems = document.querySelectorAll(".menu ul li a");

    menuItems.forEach(item => {
        item.addEventListener("click", function (event) {
            event.preventDefault(); // Evita el salto brusco

            // Elimina la clase 'selected' de todos los elementos
            document.querySelectorAll(".menu ul li").forEach(el => el.classList.remove("selected"));

            // Agrega la clase 'selected' al padre del enlace clicado
            this.parentElement.classList.add("selected");

            // Obtiene el ID de la sección destino
            const sectionId = this.getAttribute("href"); 
            const section = document.querySelector(sectionId);

            if (section) {
                // Desplazamiento suave hacia la sección
                window.scrollTo({
                    top: section.offsetTop - 50, // Ajusta para que no quede pegado al borde
                    behavior: "smooth"
                });
            }
        });
    });
});

