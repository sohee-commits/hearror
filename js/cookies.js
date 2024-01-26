window.onload = function () {
  // show cookies alert on load
  let cookies = document.querySelector(`#cookies`);
  cookies.show();

  // open/close dialog buttons
  let closeNodeList = document.querySelectorAll(`.close`);
  let openNodeList = document.querySelectorAll(`.open`);

  // close dialog
  closeNodeList.forEach((close) => {
    close.addEventListener(`click`, (e) => {
      // prevent from bubbling up to parent elements
      e.stopPropagation();
      let dialogId = close.getAttribute(`data-dialog`);
      let dialog = document.querySelector(`#${dialogId}`);
      dialog.remove();

      // if dialog related to cookies
      if (dialogId === `cookies-config`) {
        cookies.close();
      }
    });
  });

  // open dialog
  openNodeList.forEach((open) => {
    open.addEventListener(`click`, (e) => {
      // prevent from bubbling up to parent elements [2] lol
      e.stopPropagation();
      let dialogId = open.getAttribute(`data-dialog`);
      let dialog = document.querySelector(`#${dialogId}`);
      dialog.showModal();
    });
  });
};
