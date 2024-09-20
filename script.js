document.addEventListener('DOMContentLoaded', function() {
    const chatbox = document.getElementById('chatbox');
    const messages = document.getElementById('messages');
    const userInput = document.getElementById('userInput');
    
    const recipes = {
        "chapati": "To make chapati, you will need: 1. Whole wheat flour 2. Water 3. Salt 4. Ghee or oil (optional). Mix flour with water to make dough, roll into flat circles, and cook on a hot pan till golden brown.",
        "biryani": "For biryani, you need: 1. Basmati rice 2. Chicken/Vegetables 3. Spices (garam masala, cumin, coriander, etc.) 4. Yogurt 5. Saffron. Cook rice and layer it with marinated meat/vegetables, and bake it together for rich flavors.",
        "paneer butter masala": "For paneer butter masala, you will need: 1. Paneer (Indian cottage cheese) 2. Tomatoes 3. Cream 4. Spices (cumin, garam masala, turmeric). Cook tomatoes with spices, blend to make gravy, add paneer, and simmer with cream.",
        "dosa": "To make dosa, you need: 1. Rice 2. Urad dal 3. Fenugreek seeds 4. Water for the batter. Soak rice and dal, grind them into a batter, ferment overnight, and cook on a hot pan for crispy dosa."
    };

    function addMessage(content, sender) {
        const message = document.createElement('div');
        message.classList.add('message', sender === 'user' ? 'user-message' : 'bot-message');
        message.innerText = content;
        messages.appendChild(message);
        chatbox.scrollTop = chatbox.scrollHeight;  // Auto-scroll
    }

    function getBotResponse(userInput) {
        const input = userInput.toLowerCase();
        if (input.includes("chapati")) {
            return recipes["chapati"];
        } else if (input.includes("biryani")) {
            return recipes["biryani"];
        } else if (input.includes("paneer butter masala")) {
            return recipes["paneer butter masala"];
        } else if (input.includes("dosa")) {
            return recipes["dosa"];
        } else {
            return "Sorry, I don't know that recipe. Try asking about 'chapati', 'biryani', 'paneer butter masala', or 'dosa'.";
        }
    }

    window.sendMessage = function() {
        const userMessage = userInput.value;
        if (userMessage.trim() === '') return;
        
        // Display user message
        addMessage(userMessage, 'user');

        // Get bot response and display
        const botMessage = getBotResponse(userMessage);
        setTimeout(() => addMessage(botMessage, 'bot'), 500);

        // Clear input field
        userInput.value = '';
    };
});
