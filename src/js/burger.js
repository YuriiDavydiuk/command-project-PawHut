(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-mobile-open]'),
    closeModalBtn: document.querySelector('[data-mobile-close]'),
    modal: document.querySelector('[data-mobile]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-open');
  }

  // Закриття меню при кліку на посилання

  const anchors = refs.modal.querySelectorAll('a[href*="#"]');
  anchors.forEach(anchor => {
    anchor.addEventListener('click', () => {
      refs.modal.classList.remove('is-open');
    });
  });
})();
