let currentIndex = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        if (i === index) {
            slide.classList.add('active');
        }
    });
    const offset = -index * 100; // Move the slides
    document.querySelector('.slides').style.transform = `translateX(${offset}%)`;
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides; // Loop back to the first slide
    showSlide(currentIndex);
}

// Automatically change slides every 3 seconds
setInterval(nextSlide, 3000);

// Initial display
showSlide(currentIndex);