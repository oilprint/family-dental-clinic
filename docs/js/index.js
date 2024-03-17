
document.addEventListener('DOMContentLoaded', () => {
    
  //swiper
  const swiper1 = new Swiper('.swiper-1', {
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,
     autoplay: {
      delay: 3000,
    },
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
      // loop: true,
      // slideToClickedSlide: true,

      navigation: {
        nextEl: '.swiper-button-next-2',
        prevEl: '.swiper-button-prev-2',
      },

    // If we need pagination
    pagination: {
      el: '.pag-2',
      type: 'bullets',
      clickable: true
    },

    breakpoints: {
     
      768: {
        slidesPerView: 2,
        spaceBetween: 16,
        // Navigation arrows
       
      },
     
      1200: {
        slidesPerView: 4,
        spaceBetween: 30
      }
    }
  });

  const slider3 = document.querySelector('.swiper-3');
  let mySwiper;

  function mobileSlider() {
    if (window.innerWidth <= 576 && slider3.dataset.mobile == 'false') {
      const swiper3 = new Swiper(slider3, {
      slidesPerView: 1,
      spaceBetween: 16,
      loop: true,
      slideClass: 'category__item',
      pagination: {
        el: '.pag-3',
        type: 'bullets',
        clickable: true
      }
    });

      slider3.dataset.mobile = 'true'
    };

    if (window.innerWidth > 576) {
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


  //gsap
  

 



});


  







