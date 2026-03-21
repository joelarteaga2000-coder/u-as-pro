document.addEventListener("DOMContentLoaded", function () {
    const reveals = document.querySelectorAll(".reveal");
    const hero = document.getElementById("hero");
    const header = document.querySelector("header");
    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");
    const navItems = document.querySelectorAll(".nav-links a");
    const preconsultaForm = document.getElementById("preconsulta-form");

    function revealOnScroll() {
        const windowHeight = window.innerHeight;

        reveals.forEach(function (element) {
            const elementTop = element.getBoundingClientRect().top;
            const revealPoint = 120;

            if (elementTop < windowHeight - revealPoint) {
                element.classList.add("active");
            }
        });
    }

    function heroParallax() {
        if (!hero) return;

        const offset = window.pageYOffset;
        hero.style.backgroundPositionY = offset * 0.25 + "px";
    }

    function handleHeaderScroll() {
        if (!header) return;

        if (window.pageYOffset > 50) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
    }

    if (menuToggle && navLinks) {
        menuToggle.addEventListener("click", function () {
            navLinks.classList.toggle("active");
        });
    }

    if (navItems.length > 0 && navLinks) {
        navItems.forEach(function (link) {
            link.addEventListener("click", function () {
                navLinks.classList.remove("active");
            });
        });
    }

    if (preconsultaForm) {
        preconsultaForm.addEventListener("submit", function (e) {
            e.preventDefault();

            const nombre = document.getElementById("nombre").value.trim();
            const telefono = document.getElementById("telefono").value.trim();
            const servicio = document.getElementById("servicio").value.trim();
            const dia = document.getElementById("dia").value.trim();
            const turno = document.getElementById("turno").value.trim();
            const detalle = document.getElementById("detalle").value.trim();

            const disenoSeleccionado = document.querySelector('input[name="diseno"]:checked');
            const diseno = disenoSeleccionado ? disenoSeleccionado.value : "";

            const mensaje = `Hola.%0A%0A` +
                `Quiero una página web como este demo de uñas para mi negocio.%0A%0A` +
                `Nombre: ${nombre || "No especificado"}%0A` +
                `Teléfono: ${telefono || "No especificado"}%0A` +
                `Servicio principal: ${servicio || "No especificado"}%0A` +
                `Nivel de diseño: ${diseno || "No especificado"}%0A` +
                `Día preferido: ${dia || "No especificado"}%0A` +
                `Turno preferido: ${turno || "No especificado"}%0A` +
                `Detalles o inspiración: ${detalle || "No especificado"}`;

            const whatsappURL = `https://wa.me/5215525051050?text=${mensaje}`;
            window.open(whatsappURL, "_blank");
        });
    }

    window.addEventListener("scroll", function () {
        revealOnScroll();
        heroParallax();
        handleHeaderScroll();
    });

    revealOnScroll();
    handleHeaderScroll();
});