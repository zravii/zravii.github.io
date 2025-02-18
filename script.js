// Smooth scroll for links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Adding animation on scroll for each section
const sections = document.querySelectorAll('section');
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, {
    threshold: 0.5
});

sections.forEach(section => {
    section.classList.add('hidden');
    observer.observe(section);
});

// Add subtle hover effect on the header links
const headerLinks = document.querySelectorAll('.social-links a');
headerLinks.forEach(link => {
    link.addEventListener('mouseover', () => {
        link.style.transform = 'scale(1.1)';
        link.style.transition = 'transform 0.3s ease';
    });

    link.addEventListener('mouseout', () => {
        link.style.transform = 'scale(1)';
    });
});

// Floating effect for the about me section
const aboutSection = document.getElementById('about');
aboutSection.addEventListener('mousemove', (e) => {
    const x = (window.innerWidth - e.pageX * 3) / 100;
    const y = (window.innerHeight - e.pageY * 3) / 100;
    aboutSection.style.transform = `translateX(${x}px) translateY(${y}px)`;
});

// Fancy scroll to top button
const scrollToTopButton = document.createElement('button');
scrollToTopButton.classList.add('scroll-to-top');
scrollToTopButton.innerHTML = '<i class="fas fa-arrow-up"></i>';
document.body.appendChild(scroll
