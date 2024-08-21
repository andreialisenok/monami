const swiper = new Swiper('.carousel', {
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  loop: true,
  effect: 'fade',
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-mobile');
const body = document.querySelector('body');
const btnPhones = document.querySelector('.nav-desktop .phones');
const phonesList = document.querySelector('.nav-desktop .phones__list');
const btnSearch = document.querySelector('.nav-desktop .search');
const search = document.querySelector('.search-input');
const searchClose = document.querySelector('.nav-desktop .search-input__close');
const menuItem = document.querySelectorAll('.nav-mobile .menu__item');

burger.addEventListener('click', () => {
  burger.classList.toggle('active');
  nav.classList.toggle('active');
  body.classList.toggle('is-lock');
});
btnPhones.addEventListener('click', () => {
  phonesList.classList.toggle('active');
});
btnSearch.addEventListener('click', () => {
  search.classList.add('active');
});
searchClose.addEventListener('click', () => {
  search.classList.remove('active');
});
menuItem.forEach((item) => {
  item.lastElementChild.classList.contains('submenu')
    ? item.firstElementChild.classList.add('arrow')
    : '';
});
