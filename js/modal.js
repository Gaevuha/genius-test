// const modal = document.querySelector('.backdrop');
// const modalBtnOpen = document.querySelector('.modal-btn-open');
// const modalBtnClose = document.querySelector('.modal-btn-close');

// const toggleModal = () => modal.classList.toggle('is-hidden');

// modalBtnOpen.addEventListener('click', toggleModal);
// modalBtnClose.addEventListener('click', toggleModal);


document.addEventListener("DOMContentLoaded", () => {
  const modal = document.querySelector('.backdrop');
  const modalBtnOpen = document.querySelector('.modal-btn-open');
  const modalBtnClose = document.querySelector('.modal-btn-close');
  const modalForm = document.querySelector('[name="modal-form"]');

  // Відкриття/закриття модального вікна
  const toggleModal = () => modal.classList.toggle('is-hidden');

  modalBtnOpen?.addEventListener('click', toggleModal);
  modalBtnClose?.addEventListener('click', toggleModal);

  // Обробка форми
  modalForm?.addEventListener('submit', (event) => {
    event.preventDefault(); // Запобігти перезавантаженню сторінки

    modalForm.reset();

    // Збір даних з форми
    // const formData = new FormData(modalForm);
    // console.log("Ім'я:", formData.get("user-name"));
    // console.log("Телефон:", formData.get("user-tel"));
    // console.log("Електронна адреса:", formData.get("user-email"));

    // Повідомлення про успіх
    // alert("Форма успішно відправлена!");

    // Модальне вікно залишається відкритим
  });
});