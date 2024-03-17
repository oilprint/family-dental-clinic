
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

  //Lenis Smooth scroll
	const lenis = new Lenis({
		duration: 1.2,
	});
	function raf(time) {
		lenis.raf(time)
		requestAnimationFrame(raf)
	}

	requestAnimationFrame(raf)

	//Integration Lenis on GSAP ScrollTrigger
	lenis.on('scroll', ScrollTrigger.update)

	gsap.ticker.add((time) => {
		lenis.raf(time * 1000)
	})

  ///gsap
  gsap.registerPlugin(ScrollTrigger)

   gsap.from('.hero__content', {
    y: 50,
    opacity: 0,   
  });

  //laptop animation 
  const laptopScreen = window.matchMedia('(min-width: 992px)');

  if (laptopScreen.matches) {
    
    const sections = gsap.utils.toArray('.section');
    sections.forEach((section, i) => {
    
    gsap.from(section.querySelector('.title'), {
      scrollTrigger: {
        trigger: section,
        start: 'top bottom', 
        end: '+=500',
        scrub: 1
      },  
      y: -50,
      ease: 'none'
    });   
  });

  gsap.from('.category__item', {
    scrollTrigger: {
      trigger: '.category',
      start: 'top center',
      end: '+=300px',
      srub: true
    },
    scale: 0,
    transformOrigin: 'top center',
    ease: 'Power2.easeOut',
    stagger: 0.4
  });
    
    gsap.from('.about__images', {
    scrollTrigger: {
      trigger: '.about',
      start: '-10% bottom',
      end: '20% top',
      scrub: true,
      },
      css: {
        width: 0,
      }   
    });

    gsap.from('.booking__image', {
      scrollTrigger: {
        trigger: '.booking',
        start: '0 bottom',
        end: '30% center',
        scrub: true
      },
      css: {
        width: 0,
      }   
    });
  }
});



 






