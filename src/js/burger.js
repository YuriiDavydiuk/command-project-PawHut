(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-burger-open]'),
    closeModalBtn: document.querySelector('[data-burger-close]'),
    overlay: document.querySelector('[data-burger-overlay]'),
    modal: document.querySelector('[data-burger]'),
  };

  refs.openModalBtn.addEventListener('click', openMenu);
  refs.closeModalBtn.addEventListener('click', closeMenu);
  refs.overlay.addEventListener('click', closeMenu);

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && refs.modal.classList.contains('is-open')) {
      closeMenu();
    }
  });

  function openMenu() {
    refs.modal.classList.add('is-open');
    document.body.style.overflow = 'hidden'; // блокує скрол сторінки
  }

  function closeMenu() {
    refs.modal.classList.remove('is-open');
    document.body.style.overflow = '';
  }

  // Закриття при кліку на якірне посилання
  const anchors = refs.modal.querySelectorAll('a[href*="#"]');
  anchors.forEach(anchor => {
    anchor.addEventListener('click', closeMenu);
  });
})();
