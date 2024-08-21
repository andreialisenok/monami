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
var burger = document.querySelector('.burger');
var nav = document.querySelector('.nav-mobile');
var body = document.querySelector('body');
var btnPhones = document.querySelector('.nav-desktop .phones');
var phonesList = document.querySelector('.nav-desktop .phones__list');
var btnSearch = document.querySelector('.nav-desktop .search');
var search = document.querySelector('.search-input');
var searchClose = document.querySelector('.nav-desktop .search-input__close');
var menuItem = document.querySelectorAll('.nav-mobile .menu__item');
burger.addEventListener('click', function () {
  burger.classList.toggle('active');
  nav.classList.toggle('active');
  body.classList.toggle('is-lock');
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
  item.lastElementChild.classList.contains('submenu') ? item.firstElementChild.classList.add('arrow') : '';
});
//# sourceMappingURL=main.js.map