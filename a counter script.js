// Function to animate the counter
function animateCounter(elementId, targetNumber, duration) {
    const element = document.getElementById(elementId);
    let start = 0;
    const stepTime = Math.ceil(duration / targetNumber);
    
    const counterInterval = setInterval(() => {
        if (start < targetNumber) {
            start++;
            element.innerText = start;
        } else {
            clearInterval(counterInterval);
        }
    }, stepTime);
}

// Start the counters
animateCounter('counter1', 567, 2000); // Counter 1: Count to 567 in 2 seconds
animateCounter('counter2', 35, 3000); // Counter 2: Count to 35 in 3 seconds
animateCounter('counter3', 15, 3000); // Counter 3: Count to 15 in 4 seconds