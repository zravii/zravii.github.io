// Chatbot Popup Animation
const chatbotIcon = document.getElementById('chatbot-icon');
chatbotIcon.addEventListener('mouseover', () => {
    const popup = chatbotIcon.querySelector('.chatbot-popup');
    popup.style.display = 'block';
});
chatbotIcon.addEventListener('mouseout', () => {
    const popup = chatbotIcon.querySelector('.chatbot-popup');
    popup.style.display = 'none';
});
