// Dark Mode Toggle with smooth transition and cool animation
document.getElementById("dark-mode-toggle").addEventListener("click", function() {
    // Toggle dark mode with a smooth transition
    document.body.classList.toggle("dark-mode");
    if (document.body.classList.contains("dark-mode")) {
        // Animation when dark mode is enabled
        document.getElementById("dark-mode-toggle").classList.add("animate__flipInX");
    } else {
        // Animation when dark mode is disabled
        document.getElementById("dark-mode-toggle").classList.add("animate__flipOutX");
    }
    // Remove the animation class after it finishes to reset for next click
    setTimeout(() => {
        document.getElementById("dark-mode-toggle").classList.remove("animate__flipInX", "animate__flipOutX");
    }, 1000);
});

// Chatbot Modal with pop-up animation
function toggleChatbot() {
    const modal = document.getElementById("chatbot-modal");
    const icon = document.getElementById("chatbot-icon");
    
    if (modal.style.display === "block") {
        // Close modal with fade-out animation
        modal.classList.remove("animate__fadeInUp");
        modal.classList.add("animate__fadeOutDown");
        setTimeout(() => {
            modal.style.display = "none";
            modal.classList.remove("animate__fadeOutDown");
        }, 1000);
    } else {
        // Open modal with fade-in animation
        modal.style.display = "block";
        modal.classList.add("animate__fadeInUp");
        icon.classList.add("animate__shakeX");
        setTimeout(() => {
            icon.classList.remove("animate__shakeX");
        }, 1000);
    }
}
