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
var carouselProduct = new Swiper('.carousel-product', {
  loop: true,
  spaceBetween: 5,
  slidesPerView: 5,
  freeMode: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  }
});
var carouselProduct2 = new Swiper('.carousel-product2', {
  loop: true,
  spaceBetween: 10,
  thumbs: {
    swiper: carouselProduct
  }
});
var burger = document.querySelector('.burger');
var menumobile = document.querySelector('#menumobile');
var body = document.querySelector('body');
var btnPhones = document.querySelector('#btnPhones');
var phonesList = document.querySelector('#btnPhones .phones__list');
var btnSearch = document.querySelector('#btnSearch');
var search = document.querySelector('#searchInput');
var searchClose = document.querySelector('#searchInput .search-input__close');
var menuItem = document.querySelectorAll('#menumobile .menu .menu__item');
var submenuItem = document.querySelectorAll('#menumobile .submenu .submenu__item');
var backArrows = document.querySelectorAll('.backArrow');
var mobileOverlay = document.querySelector('.mobile-overlay');
// const submenuItem = document.querySelectorAll(
//   '#menumobile .submenu .menu__item'
// );

burger.addEventListener('click', function () {
  burger.classList.toggle('active');
  menumobile.classList.toggle('active');
  body.classList.toggle('is-lock');
  mobileOverlay.classList.toggle('active');
});
btnPhones.addEventListener('click', function () {
  phonesList.classList.toggle('active');
});
btnSearch.addEventListener('click', function () {
  search.classList.add('active');
});
searchClose.addEventListener('click', function () {
  search.classList.remove('active');
});
menuItem.forEach(function (item) {
  if (item.children.length === 2) {
    item.children[0].classList.add('arrow');
    item.addEventListener('click', function (e) {
      e.preventDefault();
      item.children[1].classList.add('active');
    });
    backArrows.forEach(function (link) {
      link.addEventListener('click', function (e) {
        e.preventDefault();
        item.children[1].classList.remove('active');
      });
    });
  }
});
submenuItem.forEach(function (item) {
  item.addEventListener('click', function (e) {
    e.stopPropagation();
  });
});
mobileOverlay.addEventListener('click', function (e) {
  burger.classList.toggle('active');
  menumobile.classList.toggle('active');
  body.classList.toggle('is-lock');
  mobileOverlay.classList.toggle('active');
});
//# sourceMappingURL=main.js.map