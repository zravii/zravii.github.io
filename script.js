/* script.js */
// Rotating text animation
const roles = [
    "Data Scientist 📊",
    "Problem Solver 🔍",
    "Coffee Enthusiast ☕",
    "Code Wizard 🧙‍♂️"
];

let currentRoleIndex = 0;
const rotatingText = document.getElementById('rotating-text');

function updateRole() {
    rotatingText.style.opacity = 0;
    setTimeout(() => {
        rotatingText.textContent = roles[currentRoleIndex];
        rotatingText.style.opacity = 1;
        currentRoleIndex = (currentRoleIndex + 1) % roles.length;
    }, 500);
}

updateRole();
setInterval(updateRole, 3000);

// Dark mode toggle
const themeSwitch = document.querySelector('.theme-switch');
const body = document.body;

themeSwitch.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    const icon = themeSwitch.querySelector('i');
    icon.classList.toggle('fa-moon');
    icon.classList.toggle('fa-sun');
});

// Chatbot toggle
const chatbotIcon = document.querySelector('.chatbot-icon');
const chatbotPopup = document.querySelector('.chatbot-popup');
const closeBtn = document.querySelector('.close-btn');

chatbotIcon.addEventListener('click', () => {
    chatbotPopup.classList.toggle('hidden');
});

closeBtn.addEventListener('click', () => {
    chatbotPopup.classList.add('hidden');
});

// Initialize Vanilla Tilt for skill cards
VanillaTilt.init(document.querySelectorAll(".skill-card"), {
    max: 25,
    speed: 400,
    glare: true,
    "max-glare": 0.5,
});

// Intersection Observer for scroll animations
const sections = document.querySelectorAll('section');
const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px"
};

const sectionObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate__animated', 'animate__fadeInUp');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

sections.forEach(section => {
    sectionObserver.observe(section);
});

// Smooth scroll for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});