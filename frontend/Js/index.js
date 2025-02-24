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
    alert('Hello, this is a profile button!')
    btnLinkProfile.style.backgroundColor = 'red'
})

const btnLinkProduct = document.getElementById('p1')

btnLinkProduct.addEventListener('click', function () {
    alert('Hello, this is a product button!')
    btnLinkProduct.style.backgroundColor = 'blue'
})

const btnLinkProductTwo = document.getElementById('p2')

btnLinkProductTwo.addEventListener('click', function () {
    alert('Hello, this is a product button!')
    btnLinkProductTwo.style.backgroundColor = 'blue'
})

const btnLinkProductTree = document.getElementById('p3')

btnLinkProductTree.addEventListener('click', function () {
    alert('Hello, this is a product button!')
    btnLinkProductTree.style.backgroundColor = 'blue'
})