// Get the canvas element
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

// Set the canvas dimensions
canvas.width = 800;
canvas.height = 600;

// Define the car object
const car = {
  x: canvas.width / 2,
  y: canvas.height / 2,
  width: 50,
  height: 50,
  speed: 5,
  velocity: {
    x: 0,
    y: 0
  }
};

// Define the road object
const road = {
  x: canvas.width / 2,
  y: 0,
  width: 200,
  height: canvas.height
};
// Define the obstacles array
const obstacles = [];

// Function to draw the car
function drawCar() {
  ctx.fillStyle = '#f00';
  ctx.fillRect(car.x, car.y, car.width, car.height);
}

// Function to draw the road
function drawRoad() {
  ctx.fillStyle = '#ccc';
  ctx.fillRect(road.x, road.y, road.width, road.height);
}

// Function to draw obstacles
function drawObstacles() {
  obstacles.forEach((obstacle) => {
    ctx.fillStyle = '#0f0';
    ctx.fillRect(obstacle.x, obstacle.y, obstacle.width, obstacle.height);
  });
}

// Function to update the game state
function update() {
  // Update car position
  car.x += car.velocity.x;
  car.y += car.velocity.y;

  // Check for collisions with road
  if (car.x + car.width > road.x + road.width || car.x < road.x) {
    car.velocity.x = -car.velocity.x;
  }
 // Check for collisions with obstacles
  obstacles.forEach((obstacle) => {
    if (checkCollision(car, obstacle)) {
      car.velocity.x = -car.velocity.x;
    }
  });
}

// Function to check for collisions between two objects
function checkCollision(obj1, obj2) {
  if (obj1.x + obj1.width > obj2.x && obj1.x < obj2.x + obj2.width && obj1.y + obj1.height > obj2.y && obj1.y < obj2.y + obj2.height) {
    return true;
  }
  return false;
}

// Function to handle keyboard input
function handleInput(event) {
  switch (event.key) {
    case 'ArrowUp':
      car.velocity.y = -car.speed;
      break;
    case 'ArrowDown':
      car.velocity.y = car.speed;
      break;
    case 'ArrowLeft':
      car.velocity.x = -car.speed;
      break;
    case 'ArrowRight':
      car.velocity.x = car.speed;
      break;
  }
}

// Function to handle game loop
function gameLoop() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawRoad();
  drawCar();
  drawObstacles();
  update();
  requestAnimationFrame(gameLoop);
}

// Add event listeners
document.addEventListener('keydown', handleInput);

// Start the game loop
gameLoop();

// Add obstacles at random positions
setInterval(() => {
  const obstacle = {
    x: Math.random() * (canvas.width - 50),
    y: Math.random() * (canvas.height - 50),
    width: 50,
    height: 50
  };
  obstacles.push(obstacle);
}, 2000);
