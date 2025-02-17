// Get the canvas element
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
// Set the canvas dimensions
canvas.width = 1335;
canvas.height = 600;


// Define the game variables
var ballX = canvas.width / 2;
var ballY = canvas.height / 2;
var ballSpeedX = 8;
var ballSpeedY = 8;
var paddle1Y = canvas.height / 2;
var paddle2Y = canvas.height / 2;
var score1 = 0;
var score2 = 0;

// Draw the game elements
function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = '#000';
  ctx.fillRect(0, paddle1Y, 10, 100);
  ctx.fillRect(canvas.width - 10, paddle2Y, 10, 100);
  ctx.beginPath();
  ctx.arc(ballX, ballY, 10, 0, Math.PI * 2);
  ctx.fill();
  ctx.font = '24px Arial';
ctx.textAlign = 'left';
  ctx.textBaseline = 'top';
  ctx.fillText(score1, 4,4 );
  ctx.textAlign = 'right';
  ctx.fillText(score2, canvas.width -4 , 4);
}

// Update the game state
function update() {
  ballX += ballSpeedX;
  ballY += ballSpeedY;
  
  if (ballY < 8 || ballY > canvas.height) {
    ballSpeedY = -ballSpeedY;
  }

if (ballX < 0) {
    score2++;
    ballX = canvas.width / 2;
    ballY = canvas.height / 2;
  } else if (ballX > canvas.width) {
    score1++;
    ballX = canvas.width / 2;
    ballY = canvas.height / 2;
  }
  
  if (ballX < 10 && ballY > paddle1Y && ballY < paddle1Y + 100) {
    ballSpeedX = -ballSpeedX;
  } else if (ballX > canvas.width - 20 && ballY > paddle2Y && ballY < paddle2Y + 100) {
    ballSpeedX = -ballSpeedX;
  }
}
// Handle user input
document.addEventListener('keydown', function(event) {
  if (event.key === 'w') {
    paddle1Y -= 40;
  } else if (event.key === 's') {
    paddle1Y += 40;
  } else if (event.key === 'ArrowUp') {
    paddle2Y -= 40;
  } else if (event.key === 'ArrowDown') {
    paddle2Y += 40;
  }
});

// Main game loop
setInterval(function() {
  update();
  draw();
}, 16);
