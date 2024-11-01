// Select the container that holds the slides
const slides = document.querySelector('.slides');
// Select all the images within the slides container
const images = document.querySelectorAll('.slides img');

// Initialize the index to keep track of the current slide
let index = 0;

// Function to show the slide at the specified index
function showSlide(n) {
    // Calculate the new index, ensuring it wraps around the number of images
    index = (n + images.length) % images.length;
    // Calculate the offset for the slide transition based on the current index
    const offset = -index * 100;
    // Apply the CSS transform to translate the slides container
    slides.style.transform = `translateX(${offset}%)`;
}

// Function to change the slide by a specified amount (n)
function changeSlide(n) {
    // Call showSlide with the updated index
    showSlide(index + n);
}

// Set an interval to automatically change the slide every 3 seconds
setInterval(() => showSlide(index + 1), 3000); // Change slide every 3 seconds