// Dark Mode Toggle
const themeSwitch = document.querySelector('.theme-switch');
themeSwitch.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

// Chatbot Widget Toggle
const chatbotWidget = document.querySelector('.chatbot-widget');
const chatbotPopup = document.querySelector('.chatbot-popup');
const closeBtn = document.querySelector('.close-btn');

chatbotWidget.addEventListener('click', () => {
    chatbotPopup.classList.toggle('hidden');
});

closeBtn.addEventListener('click', () => {
    chatbotPopup.classList.add('hidden');
});

// Rotating text functionality for header
let rotatingText = document.querySelector('#rotating-text');
let texts = ["Data Scientist", "Machine Learning Engineer", "AI Enthusiast", "Teacher & Mentor", "Data Science Guru"];
let index = 0;

setInterval(() => {
    rotatingText.textContent = texts[index];
    index = (index + 1) % texts.length;
}, 2000);

// Smooth Scroll to Sections
const scrollLinks = document.querySelectorAll('a[href^="#"]');
scrollLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        
        window.scrollTo({
            top: targetElement.offsetTop - 50, // Adjust offset for header
            behavior: 'smooth'
        });
    });
});
