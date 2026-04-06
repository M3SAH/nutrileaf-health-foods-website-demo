document.addEventListener("DOMContentLoaded", () => {
    // 1. Mobile Menu Toggle
    const mobileToggle = document.getElementById("mobileToggle");
    const navMenu = document.getElementById("navMenu");
    const navLinks = document.querySelectorAll(".nav-link");

    // Toggle menu open/close
    mobileToggle.addEventListener("click", () => {
        navMenu.classList.toggle("active");
        
        // Toggle icon between menu and close
        const icon = mobileToggle.querySelector('.material-symbols-rounded');
        if (navMenu.classList.contains("active")) {
            icon.textContent = "close";
        } else {
            icon.textContent = "menu";
        }
    });

    // Close mobile menu when a link is clicked
    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            navMenu.classList.remove("active");
            mobileToggle.querySelector('.material-symbols-rounded').textContent = "menu";
        });
    });

    // 2. Dynamic Year in Footer
    const yearSpan = document.getElementById("year");
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
});