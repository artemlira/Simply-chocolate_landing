import '../css/reset.scss';
import '../css/style.scss';
// import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.esm.browser.min.js';

// Мобильное меню бургер
const body = document.querySelector('body'),
  burger = body.querySelector('.burger'),
  menu = body.querySelector('.header_wrapper__nav'),
  items = body.querySelectorAll('.header_nav__item');

burger.addEventListener('click', () => {
  burger.classList.toggle('active');
  body.classList.toggle('locked');
  menu.classList.toggle('active');
});

items.forEach((item) => {
  item.addEventListener('click', () => {
    menu.classList.remove('active');
    burger.classList.remove('active');
    body.classList.remove('locked');
  });
});

// брекпоинт навбара
window.addEventListener('resize', () => {
  if (window.innerWidth > 939.98) {
    menu.classList.remove('active');
    burger.classList.remove('active');
    body.classList.remove('locked');
  }
});

// ==================== Swiper slider ====================

new Swiper('.products_slider', {
  // Optional parameters
  direction: 'horizontal', //ориентация прокрутки
  loop: true, //бесконечность
  spaceBetween: 18, //расстояние между слайдами
  speed: 1000, //скорость прокрутки
  slidesPerView: 1,
  breakpoints: {
    768: {
      slidesPerView: 2.5,
    },
    998: {
      slidesPerView: 3,
    },
    1100: {
      slidesPerView: 4,
    },
  },

  // Если нужна пагинация
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  // Автозапуск
  autoplay: {
    delay: 1800,
  },
});

new Swiper('.reviews_slider', {
  // Optional parameters
  direction: 'horizontal', //ориентация прокрутки
  loop: true, //бесконечность
  spaceBetween: 16, //расстояние между слайдами
  speed: 1000, //скорость прокрутки
  slidesPerView: 1,
  autoHeight: true,
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 28,
    },
    1100: {
      slidesPerView: 3,
    },
  },

  // Если нужна пагинация
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  // Автозапуск
  autoplay: {
    delay: 1800,
  },
});
