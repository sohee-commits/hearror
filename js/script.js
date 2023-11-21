// change theme on button
let page = document.querySelector(`#page`);
let themeButton = document.querySelector(`#theme-button`);

themeButton.addEventListener(`click`, function () {
  page.classList.toggle(`dark-theme`);
  page.classList.toggle(`light-theme`);
});

// using menu button to access menu for phone screen sizes
let menuButton = document.querySelector(`#menu-button`);
let menuItems = document.querySelectorAll(`.menu-item`);
let menuItem = document.querySelector(`.menu-item`);

const mobileMenu = () => {
  window.addEventListener(`resize`, function () {
    let width = window.innerWidth || document.documentElement.clientWidth;
    let menu = document.querySelector(`#menu`);

    if (width <= 620) {
      // hide menu
      menu.classList.add(`hidden`);

      // show menu button
      menuButton.classList.remove(`hidden`);

      // hide menu when clicking => autoscrolling to the container
      menuItems.forEach(function (menuItem) {
        menuItem.addEventListener(`click`, function () {
          menu.classList.add(`hidden`);
        });
      });
    } else {
      menu.classList.remove(`hidden`);
      menuButton.classList.add(`hidden`);
    }
  });
};

window.onload = mobileMenu();

// show button to scroll to the top when scrolled height of the window
let goUpBtn = document.querySelector(`#go-up`);
let height =
  window.innerHeight ||
  document.documentElement.clientHeight ||
  document.body.clientHeight;

window.addEventListener(`scroll`, function () {
  if (window.scrollY >= height) {
    goUpBtn.classList.remove(`hidden`);
  } else {
    goUpBtn.classList.add(`hidden`);
  }
});

menuButton.addEventListener(`click`, function () {
  menu.classList.toggle(`hidden`);
});
