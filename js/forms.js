// business form

document.querySelector(`#open-business`).addEventListener(`click`, function () {
  document.querySelector(`#business`).showModal();
});

document
  .querySelector(`#close-business`)
  .addEventListener(`click`, function () {
    document.querySelector(`#business`).close();
  });

// support form

document.querySelector(`#open-support`).addEventListener(`click`, function () {
  document.querySelector(`#support`).showModal();
});

document.querySelector(`#close-support`).addEventListener(`click`, function () {
  document.querySelector(`#support`).close();
});
