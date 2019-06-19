import slick from 'slick-carousel';

export default function setSliders() {
  const $sliders = $('.js-slider');

  if(!$sliders.length) return;

  $sliders.each((i, slider) => {
    const name = slider.getAttribute('data-slider');
    const $wrap = $(slider).closest('.slider__wrap');
    const $prev = $wrap.find('.js-prev');
    const $next = $wrap.find('.js-next');
    const $dots = $wrap.find('.js-dots');
    const $fullScreenBtn = $wrap.find('.js-fullscreen');

    const options = {
      hero: {
        prevArrow: $prev,
        nextArrow: $next,
        autoplay: true,
        fade: true
      },
      partners: {
        prevArrow: $prev,
        nextArrow: $next,
        slidesToShow: 4,
        slidesToScroll: 4,
        autoplay: true,
        dots: true,
        appendDots: $dots
      },
      gallery: {
        prevArrow: $prev,
        nextArrow: $next,
        fade: true,
        dots: true,
        appendDots: $dots,
        customPaging : (slick, i) => {
          const slide = slick.$slides[i].querySelector('.slide');
          if (!slide) return;
          const src = slide.getAttribute('data-thumb');
          
          return `<button><img src="${src}" /></button>`;
        },
      }
    };

    $(slider).on('init reInit afterChange', (e, slick, currentSlide, nextSlide) => {
      currentSlide = currentSlide || 0;
      $fullScreenBtn.attr('data-to', currentSlide);
    });

    $(slider).slick(options[name]);
  });
};
