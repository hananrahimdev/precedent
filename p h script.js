const images = [
    'image1.jpg',
    'image2.jpg',
    'image3.jpg',
    'image4.jpg',
    'image5.jpg'
];

let currentIndex = 0;

const galleryImage = document.getElementById('gallery-image');
const prevButton = document.getElementById('prev-button');
const nextButton = document.getElementById('next-button');
const imageCounter = document.getElementById('image-counter');

function updateImage() {
    galleryImage.src = images[currentIndex];
    imageCounter.textContent = `${currentIndex + 1} of ${images.length}`;
}

nextButton.addEventListener('click', () => {
    currentIndex++;
    if (currentIndex >= images.length) {
        currentIndex = 0; // Loop back to the first image
    }
    updateImage();
});

prevButton.addEventListener('click', () => {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = images.length - 1; // Loop to the last image
    }
    updateImage();
});

// Initialize the gallery with the first image
updateImage();