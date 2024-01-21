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
    // get screen width
    let width = window.innerWidth || document.documentElement.clientWidth;
    // get menu
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
      // show menu as is when the sreen isnt mobile
      menu.classList.remove(`hidden`);
      menuButton.classList.add(`hidden`);
    }
  });
};

window.onload = mobileMenu();

// show scroll up when scrolled [height of the window]
let scrollUp = document.querySelector(`#go-up`);
let height =
  window.innerHeight ||
  document.documentElement.clientHeight ||
  document.body.clientHeight;

window.addEventListener(`scroll`, function () {
  // if scrolled height of the window
  if (window.scrollY >= height) {
    // show scroll up
    scrollUp.classList.remove(`hidden`);
  } else {
    // if not, stay hidden or hide
    scrollUp.classList.add(`hidden`);
  }
});

// hide and show menu
menuButton.addEventListener(`click`, function () {
  menu.classList.toggle(`hidden`);
});
