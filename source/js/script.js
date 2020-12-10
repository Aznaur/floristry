'use strict';
{
  let control = document.querySelector('.slider__control');
  let items = document.querySelectorAll('.catalog__item');

  if (screen.width <= 767) {
    control.addEventListener('click', function (event) {
      let target = event.target;

      for (let itm of control.children) {
        itm.classList.remove('slider__item--active');
      }

      if (target.classList.contains('slider__item')) {
        for (let key of items) {
          key.classList.remove('catalog__item--active');
        }
        target.classList.add('slider__item--active');
        items[+target.dataset.numb].classList.add('catalog__item--active');
      }
    });

    console.log(320);
  } else if (screen.width >= 768 && screen.width <= 1149 ) {
    control.addEventListener('click', function (event) {
      let target = event.target;

      for (let itm of control.children) {
        itm.classList.remove('slider__item--active');
      }

      if (target.classList.contains('slider__item')) {
        for (let key of items) {
          key.classList.remove('catalog__item--active');
        }
        target.classList.add('slider__item--active');
        items[+target.dataset.numb].classList.add('catalog__item--active');
        items[+target.dataset.numb + 1].classList.add('catalog__item--active');
      }
    });
  }

}
