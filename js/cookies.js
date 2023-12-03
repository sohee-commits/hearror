// remove that when done with development
// document.querySelector(`#cookies`).style.display = `none`;

// show cookies alert on load
window.onload = function () {
  let cookiesDialog = document.querySelector(`#cookies`);
  let acceptCookies = document.querySelector(`#accept-cookies`);
  let declineCookies = document.querySelector(`#decline-cookies`);
  let configCookies = document.querySelector(`#configure-cookies`);
  let configCookiesDialog = document.querySelector(`#configuring-cookies`);
  let closeCookiesPrefs = document.querySelector(`#closeCookiesPrefs`);

  acceptCookies.addEventListener(`click`, function () {
    cookiesDialog.close();
  });

  declineCookies.addEventListener(`click`, function () {
    cookiesDialog.close();
  });

  configCookies.addEventListener(`click`, function () {
    configCookiesDialog.showModal();
  });

  closeCookiesPrefs.addEventListener(`click`, function () {
    configCookiesDialog.close();
    cookiesDialog.close();
  });

  cookiesDialog.show();
};
