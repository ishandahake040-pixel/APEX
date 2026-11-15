
document.addEventListener("DOMContentLoaded", () => {

    // MOBILE NAVIGATION
    const menuToggle = document.getElementById("menuToggle");
    const navLinks = document.querySelector(".nav-links");

    if (menuToggle && navLinks) {
        menuToggle.addEventListener("click", () => {
            navLinks.classList.toggle("show");
        });
    }

    // LOADING SCREEN
    const loader = document.getElementById("loader");

    if (loader) {
        window.addEventListener("load", () => {
            setTimeout(() => {
                loader.style.display = "none";
            }, 3000);
        });
    }

    // SCROLL REVEAL
    const revealElements = document.querySelectorAll(
        "section:not(.hero), .experience-card, .gallery-item"
    );

    revealElements.forEach(element => {
        element.classList.add("reveal");
    });

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("active");
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15 });

    revealElements.forEach(element => observer.observe(element));

    // APEX CUSTOM RACING CURSOR
    if (window.matchMedia("(pointer: fine)").matches) {

        const cursor = document.createElement("div");
        cursor.id = "apex-cursor";

        cursor.innerHTML = `
            <div class="cursor-dot"></div>
            <div class="cursor-ring"></div>
        `;

        document.body.appendChild(cursor);

        const dot = cursor.querySelector(".cursor-dot");
        const ring = cursor.querySelector(".cursor-ring");

        let mouseX = 0;
        let mouseY = 0;
        let ringX = 0;
        let ringY = 0;

        document.addEventListener("mousemove", (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;

            dot.style.left = mouseX + "px";
            dot.style.top = mouseY + "px";
        });

        function animateCursor() {
            ringX += (mouseX - ringX) * 0.15;
            ringY += (mouseY - ringY) * 0.15;

            ring.style.left = ringX + "px";
            ring.style.top = ringY + "px";

            requestAnimationFrame(animateCursor);
        }

        animateCursor();

        document.addEventListener("mouseover", (e) => {
            if (e.target.closest("a, button, input, textarea, select")) {
                cursor.classList.add("hovering");
            }
        });

        document.addEventListener("mouseout", (e) => {
            if (e.target.closest("a, button, input, textarea, select")) {
                cursor.classList.remove("hovering");
            }
        });
    }
});

/* APEX F1 STARTING LIGHT INTRO */

document.addEventListener("DOMContentLoaded", () => {

    // Show intro only on homepage
    const isHomePage =
        window.location.pathname.endsWith("index.html") ||
        window.location.pathname.endsWith("/");

    if (!isHomePage) return;

    const intro = document.createElement("div");
    intro.id = "apex-intro";

    intro.innerHTML = `
        <div class="intro-content">
            <h1>APEX<span>.</span></h1>
            <p>LIGHTS OUT. AND AWAY WE GO.</p>

            <div class="starting-lights">
                <div class="light"></div>
                <div class="light"></div>
                <div class="light"></div>
                <div class="light"></div>
                <div class="light"></div>
            </div>
        </div>
    `;

    document.body.appendChild(intro);

    // Remove intro after animation
    setTimeout(() => {
        intro.classList.add("intro-finished");

        setTimeout(() => {
            intro.remove();
        }, 900);

    }, 2800);

});

