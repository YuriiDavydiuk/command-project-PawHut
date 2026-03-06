export function activeFirstBtn() {
  const firstBtn = document.querySelector('.category-btn');
  if (firstBtn) {
    firstBtn.classList.add('category-btn-accent');
  }
}

export function accentBtn(btn) {
  const btns = document.querySelectorAll('.category-btn-accent');
  btns.forEach(btn => btn.classList.remove('category-btn-accent'));
  btn.classList.add('category-btn-accent');
}
