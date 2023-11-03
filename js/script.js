// show cookies alert on load
window.onload = function () {
  let cookiesDialog = document.querySelector("#cookies");
  let acceptCookies = document.querySelector("#accept-cookies");
  let declineCookies = document.querySelector("#decline-cookies");
  let configCookies = document.querySelector("#configure-cookies");
  let configCookiesDialog = document.querySelector("#configuring-cookies");
  let closeCookiesPrefs = document.querySelector("#closeCookiesPrefs");

  acceptCookies.addEventListener("click", function () {
    cookiesDialog.close();
  });

  declineCookies.addEventListener("click", function () {
    cookiesDialog.close();
  });

  configCookies.addEventListener("click", function () {
    configCookiesDialog.showModal();
  });

  closeCookiesPrefs.addEventListener("click", function () {
    configCookiesDialog.close();
    cookiesDialog.close();
  });

  cookiesDialog.show();
};

// change theme on button
let page = document.querySelector("#page");
let themeButton = document.querySelector("#theme-button");

themeButton.addEventListener("click", function () {
  page.classList.toggle("dark-theme");
  page.classList.toggle("light-theme");
});

// using menu button to access menu for phone screen sizes
let menuButton = document.querySelector("#menu-button");

window.addEventListener("resize", function () {
  let width = window.innerWidth || document.documentElement.clientWidth;
  let nav = document.querySelector("#nav");

  if (width <= 620) {
    nav.classList.add("hidden");
    menuButton.classList.remove("hidden");
  } else {
    nav.classList.remove("hidden");
    menuButton.classList.add("hidden");
  }
});

// show button to scroll to the top when scrolled height of the window 
let goUpBtn = document.querySelector("#go-up");
let height =
  window.innerHeight ||
  document.documentElement.clientHeight ||
  document.body.clientHeight;

window.addEventListener("scroll", function () {
  if (window.scrollY >= height) {
    goUpBtn.classList.remove("hidden");
  } else {
    goUpBtn.classList.add("hidden");
  }
});

menuButton.addEventListener("click", function () {
  nav.classList.toggle("hidden");
});

// business form 

document.querySelector("#open-business").addEventListener("click", function () {
  document.querySelector("#business").showModal();
});

document
  .querySelector("#close-business")
  .addEventListener("click", function () {
    document.querySelector("#business").close();
  });

// support form 

document.querySelector("#open-support").addEventListener("click", function () {
  document.querySelector("#support").showModal();
});

document.querySelector("#close-support").addEventListener("click", function () {
  document.querySelector("#support").close();
});
