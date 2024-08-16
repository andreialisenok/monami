"use strict";

var swiper = new Swiper('.carousel', {
  autoplay: {
    delay: 2500,
    disableOnInteraction: false
  },
  loop: true,
  effect: 'fade',
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  }
});
//# sourceMappingURL=main.js.map