import Popup from '../lib/popup';
import slick from 'slick-carousel';

export default function setPopups() {
  const popup = new Popup();
  let index;

  popup.onOpen = ($btn, $popup) => {    
    const $parentSliderWrap = $btn.closest('.slider__wrap');

    if ($parentSliderWrap.length > 0) {      
      const $parentSlider = $parentSliderWrap.find('.js-slider');
      const $autoplayBtn = $parentSliderWrap.find('.js-autoplay');

      $autoplayBtn.removeClass('is-playing');
      $parentSlider.slick('slickSetOption', 'autoplay', false, true);

      const $slider = $popup.find('.js-slider');
      index = +$btn[0].getAttribute('data-to');

      $slider.on('init reInit afterChange', (e, slick, currentSlide, nextSlide) => {
        index = currentSlide;
        console.log(index);
      });

      $slider.addClass('has-no-transition');

      setTimeout(() => {
        $slider.removeClass('has-no-transition');
      }, 100);

      $slider.slick('slickGoTo', index);

    };
  };
  popup.onClose = ($btn, $popup) => {
    if($btn.hasClass('js-fullscreen')) {
      const $slider = $btn.closest('.slider__wrap').find('.js-slider');

      $slider.addClass('has-no-transition');

      setTimeout(() => {
        $slider.removeClass('has-no-transition');
      }, 100);

      $slider.slick('slickGoTo', index);
    };
  };
  popup.init();
};
