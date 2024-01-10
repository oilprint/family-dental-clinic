
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
        slidesPerView: 3,
        spaceBetween: 30
      }
    }
  });

  const slider3 = document.querySelector('.swiper-3');
  console.log(slider3);
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


  // filters
  const filterBtns = document.querySelectorAll(".filter-btn");
  const teamList = document.querySelector(".team__list");

  filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      filterBtns.forEach((filterBtn) => {
        filterBtn.classList.remove("is-active");
      });
      btn.classList.add("is-active");

      const filterValue = btn.getAttribute("data-filter");

      for (const item of teamList.children) {
        if (filterValue === "all") {
          item.classList.remove('hide');
          item.classList.add('show');
        } else if (item.classList.contains(filterValue)) {
          item.classList.remove('hide')
          item.classList.add('show')
        } else {
          item.classList.remove('show')
          item.classList.add('hide')
        }
      }
    });
  });


});


  







