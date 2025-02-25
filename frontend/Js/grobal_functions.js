// Theme Toggle
const themeToggle = document.getElementById("theme-toggle");
const body = document.body;
const themeIcon = themeToggle.querySelector("i");

themeToggle.addEventListener("click", () => {
    body.classList.toggle("dark-mode");
    themeIcon.classList.toggle("fa-moon");
    themeIcon.classList.toggle("fa-sun");
});

// Mobile Menu
const mobileMenuBtn = document.querySelector(".mobile-menu-btn");
const navLinks = document.querySelector(".nav-links");

mobileMenuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
        });
    });
});

// Form Submission
const contactForm = document.querySelector(".contact-form");
contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Thank you for your message! We will get back to you soon.");
    contactForm.reset();
});


//Buttons
const btnLinkProfile = document.querySelector('.btn')

btnLinkProfile.addEventListener('click', function () {
    const destino = document.getElementById("features");
    if (destino) {
        destino.scrollIntoView({ behavior: "smooth" });

        // Desativa o botão temporariamente
        btn.disabled = true;

        setTimeout(() => {
            btn.disabled = false; // Reativa após 2.5s
        }, 2500);
    }
})

const btnLinkProduct= document.querySelectorAll('.pd');
btnLinkProduct.forEach(btn => {
    btn.addEventListener('click', (event) => {
        window.open('https://www.instagram.com/aprenda_seu_potencial/', '_blank');
        btnLinkProduct.style.backgroundColor = 'blue'
    });
});

// Envia o Usuário para a Página de Compartilhar
const btnLinkProfileInsta = document.querySelectorAll('.testimonial-btn');
btnLinkProfileInsta.forEach(btn => {
    btn.addEventListener('click', (event) => {
        window.open('https://www.instagram.com/aprenda_seu_potencial/', '_blank');
        btnLinkProfileInsta.style.backgroundColor = 'blue'
    });
});