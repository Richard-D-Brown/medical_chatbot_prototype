document.getElementById('sendButton').addEventListener('click', function() {
    const userInput = document.getElementById('userInput').value;
    const chatOutput = document.getElementById('chatOutput');

    // Append user message
    chatOutput.innerHTML += `<div>User: ${userInput}</div>`;
    
    // Append chatbot reply
    chatOutput.innerHTML += `<div>Chatbot: Hello! How can I assist you?</div>`;
    
    // Clear user input
    document.getElementById('userInput').value = '';
});
