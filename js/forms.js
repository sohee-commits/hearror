// open business form
document.querySelector(`#open-business`).addEventListener(`click`, function () {
  document.querySelector(`#business`).showModal();
});

// open support form
document.querySelector(`#open-support`).addEventListener(`click`, function () {
  document.querySelector(`#support`).showModal();
});

// prevent reload and close forms
document
  .querySelector(`#support-form`)
  .addEventListener(`submit`, function (e) {
    e.preventDefault();
    document.querySelector(`#support`).close();
  });

document
  .querySelector(`#business-form`)
  .addEventListener(`submit`, function (e) {
    e.preventDefault();
    document.querySelector(`#business`).close();
  });
