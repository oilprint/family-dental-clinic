
document.addEventListener('DOMContentLoaded', () => {

      //Mobile Menu
    const burger = document.querySelector('.header__burger');

    console.log('test');
    const mobileMenu = document.querySelector('.mobile-menu'); 
    const closeButton = document.querySelector('.mobile-menu__button');
    const bodyLock = document.querySelector('body'); 

    burger.addEventListener('click', () => {
      mobileMenu.classList.add('mobile-menu--active'); 
      bodyLock.classList.add('lock');
    });

    closeButton.addEventListener('click', () => {
      mobileMenu.classList.remove('mobile-menu--active'); 
      bodyLock.classList.remove('lock');
    });



    //swiper

    // const swiper = new Swiper('.swiper', {
    // slidesPerView: 1,
    // autoplay: {
    //   delay: 6000,
    // },
    //   loop: true,
    // });
    


  

  const resizableSwiper = (breakpoint, swiperClass, swiperSettings, callback) => {
    let swiper;

    breakpoint = window.matchMedia(breakpoint);

    const enableSwiper = function(className, settings) {
      swiper = new Swiper(className, settings);

      if (callback) {
        callback(swiper);
      }
    }

    const checker = function() {
      if (breakpoint.matches) {
        return enableSwiper(swiperClass, swiperSettings);
      } else {
        if (swiper !== undefined) swiper.destroy(true, true);
        return;
      }
    };

    breakpoint.addEventListener('change', checker);
    checker();
  }

  const someFunc = (instance) => {
    if (instance) {
      instance.on('slideChange', function (e) {
        console.log('*** mySwiper.activeIndex', instance.activeIndex);
      });
    }
  };

  resizableSwiper(
    '(max-width: 1024px)',
    '.slider-1',
    {
      loop: true,
      spaceBetween: 32,
      slidesPerView: 1,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    },
    someFunc
  );

  resizableSwiper(
    '(max-width: 1024px)',
    '.slider-2',
    {
      loop: true,
      slidesPerView: "auto",
      spaceBetween: 30,
      freeMode: true,
      breakpoints: {
        480: {
          
        },
        1024: {
          
          spaceBetween: 20,
        },
        pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
        
      }
    }
  );



});


  







