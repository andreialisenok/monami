import colorGradient from 'javascript-color-gradient';
document.addEventListener('DOMContentLoaded', () => {
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

  const carouselProduct = new Swiper('.carousel-product', {
    loop: true,
    spaceBetween: 5,
    freeMode: true,
    slidesPerView: 3,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      576: {
        slidesPerView: 4,
      },
      768: {
        slidesPerView: 5,
      },
    },
  });
  const carouselProduct2 = new Swiper('.carousel-product2', {
    loop: true,
    spaceBetween: 10,
    thumbs: {
      swiper: carouselProduct,
    },
  });

  const burger = document.querySelector('.burger');
  const menumobile = document.querySelector('#menumobile');
  const body = document.querySelector('body');
  const btnPhones = document.querySelector('#btnPhones');
  const phonesList = document.querySelector('#btnPhones .phones__list');
  const btnSearch = document.querySelector('#btnSearch');
  const search = document.querySelector('#searchInput');
  const searchClose = document.querySelector(
    '#searchInput .search-input__close'
  );
  const menuItem = document.querySelectorAll('#menumobile .menu .menu__item');
  const deskMenuItem = document.querySelectorAll('.menudesktop .menu__item');

  const submenuItem = document.querySelectorAll(
    '#menumobile .submenu .submenu__item'
  );
  const backArrows = document.querySelectorAll('.backArrow');
  const mobileOverlay = document.querySelector('.mobile-overlay');

  burger.addEventListener('click', () => {
    burger.classList.toggle('active');
    menumobile.classList.toggle('active');
    body.classList.toggle('is-lock');
    mobileOverlay.classList.toggle('active');
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
    if (item.children.length === 2) {
      item.children[0].classList.add('arrow');
      item.addEventListener('click', (e) => {
        e.preventDefault();
        item.children[1].classList.add('active');
      });
      backArrows.forEach((link) => {
        link.addEventListener('click', (e) => {
          e.preventDefault();
          item.children[1].classList.remove('active');
        });
      });
    }
  });
  submenuItem.forEach((item) => {
    item.addEventListener('click', (e) => {
      e.stopPropagation();
    });
  });
  mobileOverlay.addEventListener('click', (e) => {
    burger.classList.toggle('active');
    menumobile.classList.toggle('active');
    body.classList.toggle('is-lock');
    mobileOverlay.classList.toggle('active');
  });

  const login = document.querySelectorAll('.login');
  const modal = document.querySelector('.modal');
  const modalForm = document.querySelector('.modal form');
  const btnModalClose = document.querySelector('.modal .close');
  login.forEach((item) => {
    item.addEventListener('click', () => {
      modal.classList.add('isOpen');
    });
  });

  btnModalClose.addEventListener('click', () => {
    modal.classList.remove('isOpen');
  });
  modal.addEventListener('click', (e) => {
    modal.classList.remove('isOpen');
  });
  modalForm.addEventListener('click', (e) => {
    e.stopPropagation();
  });

  const gradientArray = colorGradient
    .setGradient('#3d3ef0', '#d44347', '#f68e5f')
    .setMidpoint(deskMenuItem.length + 1);

  deskMenuItem.forEach((item, i) => {
    item.style.background = `linear-gradient(to right, ${
      gradientArray.getArray()[i]
    }, ${gradientArray.getArray()[i + 1]})`;
  });
});
