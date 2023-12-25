import '../css/reset.scss'
import '../css/style.scss'



// Мобильное меню бургер
  const body = document.querySelector('body'),
    burger = body.querySelector('.burger'),
    menu = body.querySelector('.header_wrapper__nav'),
    items = body.querySelectorAll('.header_nav__item');

  burger.addEventListener("click", () => {
    burger.classList.toggle("active");
    body.classList.toggle("locked");
    menu.classList.toggle("active");
  });

  items.forEach((item) => {
    item.addEventListener("click", () => {
      menu.classList.remove("active");
      burger.classList.remove("active");
      body.classList.remove("locked");
    });
  });

  // брекпоинт навбара
  window.addEventListener("resize", () => {
    if (window.innerWidth > 939.98) {
      menu.classList.remove("active");
      burger.classList.remove("active");
      body.classList.remove("locked");
    }
  });
