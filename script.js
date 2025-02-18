// Function to add fade-in effect when the user scrolls
window.addEventListener('scroll', function() {
  const sections = document.querySelectorAll('section');
  const windowHeight = window.innerHeight;
  sections.forEach(function(section) {
    const sectionTop = section.getBoundingClientRect().top;
    if (sectionTop <= windowHeight * 0.8) {
      section.style.opacity = 1;
      section.style.transform = 'translateY(0)';
    }
  });
});

// Initially hiding the sections and adding fade-in animation on scroll
const allSections = document.querySelectorAll('section');
allSections.forEach(function(section) {
  section.style.opacity = 0;
  section.style.transform = 'translateY(30px)';
  section.style.transition = 'all 0.8s ease-out';
});
