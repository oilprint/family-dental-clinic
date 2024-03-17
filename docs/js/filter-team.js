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