
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

  // dropdown

  const menuBtn = document.querySelector('.menu__btn');
  console.log(menuBtn);

  menuBtn.addEventListener('click', (e) => {
    console.log('click');
    let dropdown = e.target.closest('.menu__item').querySelector('.dropdown');
    console.log(dropdown);
    dropdown.classList.toggle('dropdown--active');

    document.addEventListener('click', (e) => {
      if (!e.target.closest('.menu__item')) {
        dropdown.classList.remove('dropdown--active');
      }
    });
  });
});


  







