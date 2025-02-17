document.addEventListener("DOMContentLoaded", function () {
    const chatBtn = document.getElementById("chatBtn");
    const chatContainer = document.getElementById("chatContainer");
    
    chatBtn.addEventListener("click", function () {
        if (chatContainer.style.display === "none" || chatContainer.style.display === "") {
            chatContainer.style.display = "block";
            chatContainer.innerHTML = "<p>Hello! How can I assist you today?</p>";
        } else {
            chatContainer.style.display = "none";
        }
    });
});
