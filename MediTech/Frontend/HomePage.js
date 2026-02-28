/*SPECIALITIES SLIDER LOGIC*/
let currentSlide = 0;
const track = document.getElementById('sliderTrack');
const totalSlides = document.querySelectorAll('.spec-grid-page').length;

function updateSlidePosition() { 
   
    const slideWidth = 100 / 6; 
    track.style.transform = `translateX(-${currentSlide * 16.66}%)`;
}

function slideNext() {
    if (currentSlide < totalSlides - 1) {
        currentSlide++;
        updateSlidePosition();
    } else {
       
        currentSlide = 0;
        updateSlidePosition();
    }
}

function slidePrev() {
    if (currentSlide > 0) {
        currentSlide--;
        updateSlidePosition();
    } else {
      
        currentSlide = totalSlides - 1;
        updateSlidePosition();
    }
}

/* MAIN BANNER SLIDER (Optional) */
const bannerImage = document.querySelector('.hero-bg img');
const images = [
    'images/home.webp',      
    'images/banner2.jpg',    
    'images/banner3.jpg'    
];
let bannerIndex = 0;

document.querySelector('.right-arrow').addEventListener('click', () => {
    bannerIndex = (bannerIndex + 1) % images.length;
    
    console.log("Next Banner Clicked");
});

document.querySelector('.left-arrow').addEventListener('click', () => {
    bannerIndex = (bannerIndex - 1 + images.length) % images.length;
    console.log("Prev Banner Clicked");
});