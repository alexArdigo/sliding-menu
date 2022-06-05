const sliderTrigger = document.getElementsByClassName('slider-trigger')[0];
const slider = document.getElementsByClassName('slider-parent')[0];

sliderTrigger.addEventListener('click', (element) => {
    slider.classList.contains('active')
    ? slider.classList.remove('active')
    : slider.classList.add('active');
});
