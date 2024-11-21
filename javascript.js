// Here the navbar and footer works when we use all section same nav and footer section..
fetch('./navbar.html')
.then((response) => response.text())
.then((data) => {
    document.getElementById('navbar').innerHTML = data;
    initializeNavbarEvents();
})
.catch((error) => console.error('Error loading navbar:', error));

fetch('./footer.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('footer').innerHTML = data;
    })

//Responsive design button click section
function initializeNavbarEvents() {
  const navLinks = document.getElementById('nav-links');
  const dropdownButton = document.getElementById('dropdownButton');
  const dropdownMenu = document.getElementById('dropdownMenu');

  // Menu toggle functionality
  const menuIcon = document.querySelector('[onclick="onToggleMenu(this)"]');
  if (menuIcon) {
    menuIcon.addEventListener('click', (e) => {
      e.target.name = e.target.name === 'menu' ? 'close' : 'menu';
      navLinks.classList.toggle('top-[78%]');
    });
  }

  // Dropdown toggle functionality
  if (dropdownButton) {
    dropdownButton.addEventListener('click', () => {
      dropdownMenu.classList.toggle('hidden');
    });

    // Close dropdown if clicked outside
    window.addEventListener('click', (e) => {
      if (!dropdownButton.contains(e.target) && !dropdownMenu.contains(e.target)) {
        dropdownMenu.classList.add('hidden');
      }
    });
  }
}


//image slider section start
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

// Here work Move to Previous Slide
prevBtn.addEventListener('click', () => {
currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
updateSlider();
});

// Here work Move to Next Slide
nextBtn.addEventListener('click', () => {
currentIndex = (currentIndex + 1) % totalSlides;
updateSlider();
});

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

window.addEventListener('resize', updateSlider);

updateSlider();
startAutoSlide();

//Here the main work is when we click the order button then show the full show details page.


