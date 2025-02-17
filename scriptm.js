let mode = 'offline'; // default mode

// Get elements
const chatBody = document.getElementById('chat-body');
const messageInput = document.getElementById('message-input');
const sendBtn = document.getElementById('send-btn');
const modeBtn = document.getElementById('mode-btn');

// Add event listeners
sendBtn.addEventListener('click', sendMessage);
modeBtn.addEventListener('click', switchMode);

// Offline mode functions
function sendMessageOffline() {
  const message = messageInput.value;
  chatBody.innerHTML += `<p>You: ${message}</p>`;
  messageInput.value = '';
}

// Online mode functions
function sendMessageOnline() {
  const message = messageInput.value;
  // Send message to server using WebSocket or AJAX
  // For demonstration purposes, just display the message
  chatBody.innerHTML += `<p>You: ${message}</p>`;
  messageInput.value = '';
}
// Switch mode function
function switchMode() {
  if (mode === 'offline') {
    mode = 'online';
    modeBtn.textContent = 'Switch to Offline';
  } else {
    mode = 'offline';
    modeBtn.textContent = 'Switch to Online';
  }
}

// Send message function
function sendMessage() {
  if (mode === 'offline') {
    sendMessageOffline();
  } else {
    sendMessageOnline();
  }
}
