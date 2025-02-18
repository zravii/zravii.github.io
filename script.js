// Toggle the chatbot popup visibility
const chatbotIcon = document.querySelector('.chatbot-widget');
const chatbotPopup = document.querySelector('.chatbot-popup');

// Show the chatbot popup when the icon is clicked
chatbotIcon.addEventListener('click', () => {
    if (chatbotPopup.style.display === 'block') {
        chatbotPopup.style.display = 'none';
    } else {
        chatbotPopup.style.display = 'block';
    }
});

// Close the chatbot popup when clicking the close button
const closeButton = document.querySelector('.chatbot-popup .chatbot-footer button');
closeButton.addEventListener('click', () => {
    chatbotPopup.style.display = 'none';
});

// Optional: Add a little quirky text when hovering over the chatbot icon
chatbotIcon.addEventListener('mouseover', () => {
    chatbotIcon.setAttribute('title', "Chat with Ravi Bot! Ask me anything 😄");
});

// You could add more functionality here for actual chatbot interactions if needed
// Example: Displaying a welcome message after clicking on the chatbot icon
const chatbotBody = document.querySelector('.chatbot-popup .chatbot-body');
chatbotIcon.addEventListener('click', () => {
    if (chatbotPopup.style.display === 'block' && chatbotBody.innerHTML === '') {
        chatbotBody.innerHTML = "<p>Hi there! I'm Ravi's Bot. How can I help you today?</p>";
    }
});
