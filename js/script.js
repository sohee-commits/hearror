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

// function closeDialog {
//   let dialog = document.querySelector('dialog');
//   dialog.close();
// } 

let page = document.querySelector("#page");
let themeButton = document.querySelector("#theme-button");

themeButton.addEventListener("click", function () {
  page.classList.toggle("dark-theme");
  page.classList.toggle("light-theme");
});

let width = window.innerWidth;
let nav = document.querySelector("#nav");
let menuButton = document.querySelector("#menu-button");

if (width < 600) {
  nav.classList.add("hidden");
  menuButton.classList.remove("hidden");
} else {
  nav.classList.remove("hidden");
  menuButton.classList.add("hidden");
}

menuButton.addEventListener("click", function () {
  nav.classList.toggle("hidden");
});

document.querySelector("#open-business").addEventListener("click", function () {
  document.querySelector("#business").showModal();
});

document
  .querySelector("#close-business")
  .addEventListener("click", function () {
    document.querySelector("#business").close();
  });

document.querySelector("#open-support").addEventListener("click", function () {
  document.querySelector("#support").showModal();
});

document.querySelector("#close-support").addEventListener("click", function () {
  document.querySelector("#support").close();
});
