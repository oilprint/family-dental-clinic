 //tabs
  const tabsNav = document.querySelectorAll('.tabs__nav-item');
  const tabsContent = document.querySelectorAll('.tabs__content-item');

  tabsNav.forEach(item => {
    item.addEventListener('click', (e) => {
        console.log('click');
        tabsNav.forEach(el => el.classList.remove('active'));
        tabsContent.forEach(el => el.classList.remove('active'));
        e.target.classList.add('active');
        const contentItem = document.querySelector(`[data-content="${e.target.dataset.id}"]`);
        console.log(contentItem);
        contentItem.classList.add('active');
      });
  });