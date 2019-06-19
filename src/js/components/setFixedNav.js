import { $WIN, FIXED } from '../constants';

export default function function_name(argument) {
  const $nav = $('.js-nav');

  if(!$nav.length) return;

  const $wrap = $nav.parent();

  $WIN.on('scroll', (e) => {
    if (window.pageYOffset > $wrap.offset().top) {
      $nav.addClass(FIXED);
    } else {
      $nav.removeClass(FIXED);
    }
  });


};
