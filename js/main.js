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

// ==================== Swiper sliders ====================

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

// ==================== Gsap animations ====================
gsap.registerPlugin(ScrollTrigger);
const tl = gsap.timeline();

tl.fromTo(
  '.hero_title',
  {
    x: 200,
    opacity: 0,
  },
  {
    x: 0,
    opacity: 1,
    duration: 0.5,
  },
  0.5,
)
  .fromTo(
    '.hero_buy',
    {
      y: 30,
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      duration: 0.3,
    },
    0.8,
  )
  .fromTo(
    '.hero_buttons__how-made',
    {
      y: 30,
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      duration: 0.3,
    },
    0.8,
  )
  .fromTo(
    '.hero_scroll',
    {
      y: 30,
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      duration: 0.3,
    },
    0.8,
  )
  .fromTo(
    '.benefits_body',
    {
      y: 50,
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      duration: 0.3,
      stagger: 0.2,
    },
    1.2,
  )
  .fromTo(
    '.header_nav__item',
    {
      y: -50,
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      duration: 0.3,
      stagger: 0.15,
    },
    1,
  );

// gsap.to('.hero_title', {
//   scrollTrigger: {
//     trigger: '.hero_section',
//     start: 'center 20%',
//     scrub: true,
//   },
//   yPercent: -80,
//   scale: 0.1,
//   xPercent: -80,
//   // opacity: 0.5,
// });

// gsap.to('.hero_buttons', {
//   scrollTrigger: {
//     trigger: '.hero_section',
//     start: 'center 20%',
//     scrub: true,
//   },
//   yPercent: 80,
//   scale: 0.5,
//   xPercent: 80,
//   opacity: 0,
// });

gsap.from('.benefits_body', {
  scrollTrigger: {
    trigger: '.benefits_section',
    start: '-50% center',
    end: '+=300px',
    scrub: true,
  },
  scale: 0,
  transformOrigin: 'left center',
  stagger: 0.3,
});

gsap.from('.taste_card', {
  scrollTrigger: {
    trigger: '.taste_section',
    start: '-10% center',
    end: '+=500px',
    scrub: true,
  },
  scale: 0,
  transformOrigin: 'bottom center',
  stagger: 0.8,
  duration: 1,
});

gsap.from('.made_body__video', {
  scrollTrigger: {
    trigger: '.made_section',
    // start: 'center 20%',
    end: '+=500px',
    scrub: true,
  },
  xPercent: -50,
});

gsap.from('.made_body__text', {
  scrollTrigger: {
    trigger: '.made_section',
    // start: 'center 20%',
    end: '+=500px',
    scrub: true,
  },
  xPercent: 50,
});

const sellersProducts = gsap.utils.toArray('.sellers_product');

gsap.from(sellersProducts, {
  scrollTrigger: {
    trigger: '.sellers_section',
    start: '-40% center',
    end: '+=500px',
    scrub: true,
  },
  xPercent: 200 * (sellersProducts.length - 1),
});
