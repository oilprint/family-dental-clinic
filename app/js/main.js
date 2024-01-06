
document.addEventListener('DOMContentLoaded', () => {
  // burger
  const burger = document.querySelector('.burger');
  const menu = document.querySelector('.nav');
  const wrapper = document.querySelector('.wrapper');

  burger.addEventListener('click', () => {
    burger.classList.toggle('is-active');
    menu.classList.toggle('open');
    wrapper.classList.toggle('lock');
  });

  //swiper
  const swiper1 = new Swiper('.swiper-1', {
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,
    // slideToClickedSlide: true,

    // If we need pagination
    pagination: {
      el: '.pag-1',
      type: 'bullets',
      clickable: true
    },
  });

  const swiper = new Swiper('.swiper-2', {
      slidesPerView: 1,
      spaceBetween: 10,
      loop: true,
      // slideToClickedSlide: true,

    // If we need pagination
    pagination: {
      el: '.pag-2',
      type: 'bullets',
      clickable: true
    },

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next-2',
      prevEl: '.swiper-button-prev-2',
    },

    breakpoints: {
      
      // when window width is >= 480px
      786: {
        slidesPerView: 2,
        spaceBetween: 16
      },
      // when window width is >= 640px
      1200: {
        slidesPerView: 3,
        spaceBetween: 30
      }
    }
  });

  const slider3 = document.querySelector('.swiper-3');
  console.log(slider3);
  let mySwiper;

  function mobileSlider() {
    if (window.innerWidth <= 600 && slider3.dataset.mobile == 'false') {
      const swiper3 = new Swiper(slider3, {
      slidesPerView: 1,
      spaceBetween: 10,
      loop: true,
      slideClass: 'category__item'
      });

      slider3.dataset.mobile = 'true'
    };

    if (window.innerWidth > 600) {
      slider3.dataset.mobile = 'false';

      if (slider3.classList.contains('swiper-initialized')) {
        mySwiper.destroy();
      }
    }
  };
  mobileSlider();

  window.addEventListener('resize', () => {
    mobileSlider();
  });


});


  







