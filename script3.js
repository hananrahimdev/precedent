// Get the canvas element
var canvas = document.getElementById('gameCanvas');
var ctx = canvas.getContext('2d');

// Set the canvas dimensions
canvas.width = 800;
canvas.height = 600;

// Define the car object
var car = {
  x: 100,
  y: 100,
  width: 50,
  height: 50,
  speed: 5
};
// Define the road object
var road = {
  x: 0,
  y: 0,
  width: 800,
  height: 600
};
// Define the obstacles array
var obstacles = [];

// Function to draw the car
function drawCar() {
  ctx.fillStyle = '#000';
  ctx.fillRect(car.x, car.y, car.width, car.height);
}
// Function to draw the road
function drawRoad() {
  ctx.fillStyle = '#ccc';
  ctx.fillRect(road.x, road.y, road.width, road.height);
}
// Function to draw the game
function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawRoad();
  drawCar();
  drawObstacles();
}

// Main game loop
setInterval(function() {
  update();
  draw();
}, 16);

// Add event listener for keyboard input
document.addEventListener('keydown', function(event) {
  if (event.key === 'ArrowUp') {
    car.speed += 1;
  } else if (event.key === 'ArrowDown') {
    car.speed -= 1;
  }
});

// Add obstacles to the game
for (var i = 0; i < 10; i++) {
  obstacles.push({
    x: Math.random() * (road.width - 50),
    y: Math.random() * (road.height - 50),
    width: 50,
    height: 50
  });
}
