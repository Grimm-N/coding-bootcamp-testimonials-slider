const slides = document.querySelectorAll('.slider__item');
const prevButtons = document.querySelectorAll('.slider__button--prev');
const nextButtons = document.querySelectorAll('.slider__button--next');

let currentSlide = 0;

function showSlide(index) {
  if (index < 0) {
    currentSlide = slides.length - 1; 
  } else if (index >= slides.length) {
    currentSlide = 0;
  } else {
    currentSlide = index;
  }

  slides.forEach((slide, i) => {
    slide.classList.toggle('active', i === currentSlide);
  });
}

function prevSlide() {
  showSlide(currentSlide - 1);
}

function nextSlide() {
  showSlide(currentSlide + 1);
}

prevButtons.forEach(button => {
  button.addEventListener('click', prevSlide);
});

nextButtons.forEach(button => {
  button.addEventListener('click', nextSlide);
});

showSlide(currentSlide);
