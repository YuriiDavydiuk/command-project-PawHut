const burgerRefs = {
  openModalBtn: document.querySelector('[data-burger-open]'),
  closeModalBtn: document.querySelector('[data-burger-close]'),
  modal: document.querySelector('[data-burger]'),
};

initBurger();

function initBurger() {
  burgerRefs.openModalBtn.addEventListener('click', openMenu);
  burgerRefs.closeModalBtn.addEventListener('click', closeMenu);
  document.addEventListener('keydown', handleKeydown);

  const anchors = burgerRefs.modal.querySelectorAll('a[href*="#"]');
  anchors.forEach(anchor => {
    anchor.addEventListener('click', closeMenu);
  });

  function openMenu() {
    burgerRefs.modal.classList.add('is-open');
    document.body.style.overflow = 'hidden';
  }

  function closeMenu() {
    burgerRefs.modal.classList.remove('is-open');
    document.body.style.overflow = '';
  }

  function handleKeydown(event) {
    if (
      event.key === 'Escape' &&
      burgerRefs.modal.classList.contains('is-open')
    ) {
      closeMenu();
    }
  }
}
