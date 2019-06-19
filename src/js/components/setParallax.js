import { $WIN } from '../constants'; 

export default function setParallax() {

  const $bg = $('.js-bg');
  if(!$bg) return;

  $WIN.on('scroll', (e) => {
    var scrolledY = window.pageYOffset;
    $bg.css('background-position','center -'+((scrolledY*0.05))+'px');

  });
}
