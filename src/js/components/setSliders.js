import slick from 'slick-carousel';

export default function setSliders() {
  const $sliders = $('.js-slider');

  if(!$sliders.length) return;

  $sliders.each((i, slider) => {
    const name = slider.getAttribute('data-slider');
    const $wrap = $(slider).closest('.slider__wrap');
    const $prev = $wrap.find('.js-prev');
    const $next = $wrap.find('.js-next');
    const $fullScreenBtn = $wrap.find('.js-fullscreen');

    const options = {
      hero: {
        prevArrow: $prev,
        nextArrow: $next
      }
    };

    $(slider).on('init reInit afterChange', (e, slick, currentSlide, nextSlide) => {
      currentSlide = currentSlide || 0;
      $fullScreenBtn.attr('data-to', currentSlide);
      // let i = (currentSlide ? currentSlide : 0) + 1;
      // $counter.text(i + ' of ' + slick.slideCount);
     
      // const $activeSlides = slick.$slider.find('.slick-active');
      // const activeSlidesLen = $activeSlides.length;
      
      // if(activeSlidesLen%2 !== 0) {
      //   const centerSlideIndex = Math.ceil(activeSlidesLen/2) - 1;

      //   $($activeSlides[centerSlideIndex]).addClass('slick-center'); 
      // };
    });

    $(slider).slick(options[name]);
  });
};
