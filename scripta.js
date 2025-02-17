const userMessage = document.getElementById('user-message');
const aiMessage = document.getElementById('ai-message');
const userInput = document.getElementById('user-input');
const sendButton = document.getElementById('send-button');

const knowledgeBase = {};

sendButton.addEventListener('click', () => {
  const userText = userInput.value;
  userMessage.innerText = userText;
  userInput.value = '';

  const words = userText.split(' ');
  const command = words[0].toLowerCase();

  if (command === 'tell' || command === 'remember') {
    const key = words[1];
    const value = words.slice(2).join(' ');
    knowledgeBase[key] = value;
    console.log(`Knowledge base updated: ${key} = ${value}`);

  aiMessage.innerText = `I'll remember that ${key} is ${value}.`;
  } else if (command === 'what' || command === 'what\'s') {
    const key = words[1];
    if (knowledgeBase[key]) {
      console.log(`Knowledge base retrieved: ${key} = ${knowledgeBase[key]}`);
      aiMessage.innerText = `${key} is ${knowledgeBase[key]}.`;
    } else {
      aiMessage.innerText = `I don't know what ${key} is.`;
    }
  } else {
    const response = getAiResponse(userText);
    aiMessage.innerText = response;
  }
});

function getAiResponse(userText) {
  // This is a very basic AI response, you can improve it using machine learning models
  if (userText.includes('hello')) {
    return 'Hi! How are you?';
  } else if (userText.includes('how are you')) {
    return 'I am good, thanks!';
  } else {
    return 'I did not understand that.';
  }
}

