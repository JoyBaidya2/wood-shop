const navLinks = document.querySelector(".nav-links");
function onToggleMenu(e){
    e.name = e.name === 'menu' ? 'close' : 'menu'
    navLinks.classList.toggle("top-[92%]");
}


const slider = document.getElementById('slider');
const slides = slider.children;
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const indicators = document.querySelectorAll('.indicator');

let currentIndex = 0;
const totalSlides = slides.length;

// Calculate Slide Width Dynamically
function getSlideWidth() {
return slider.offsetWidth;
}

// Update Slider Position
function updateSlider() {
slider.style.transform = `translateX(-${currentIndex * getSlideWidth()}px)`;
updateIndicators();
}

// Update Indicators
function updateIndicators() {
indicators.forEach((indicator, index) => {
if (index === currentIndex) {
  indicator.classList.remove('opacity-50');
  indicator.classList.add('bg-white');
} else {
  indicator.classList.add('opacity-50');
  indicator.classList.remove('bg-white');
}
});
}

// Move to Previous Slide
prevBtn.addEventListener('click', () => {
currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
updateSlider();
});

// Move to Next Slide
nextBtn.addEventListener('click', () => {
currentIndex = (currentIndex + 1) % totalSlides;
updateSlider();
});

// Indicator Click Events
indicators.forEach((indicator, index) => {
indicator.addEventListener('click', () => {
currentIndex = index;
updateSlider();
});
});

// Auto Slide
let autoSlideInterval;
function startAutoSlide() {
autoSlideInterval = setInterval(() => {
currentIndex = (currentIndex + 1) % totalSlides;
updateSlider();
}, 3000);
}

function stopAutoSlide() {
clearInterval(autoSlideInterval);
}

slider.addEventListener('mouseover', stopAutoSlide);
slider.addEventListener('mouseout', startAutoSlide);

// Resize Listener for Responsive Updates
window.addEventListener('resize', updateSlider);

// Initialize
updateSlider();
startAutoSlide();