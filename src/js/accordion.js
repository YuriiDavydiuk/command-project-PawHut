import { faqData } from './faqData';
import icons from '../img/icons.svg';

initAccordion();

function initAccordion() {
  const accordionContainer = document.getElementById('faqAccordion');
  if (!accordionContainer) return;

  accordionContainer.innerHTML = faqData
    .map(
      item => `
    <div class="accordion-item">
      <button class="accordion-header">
        <span class="faq-question-text">${item.question}</span>
        <div class="faq-icon-wrapper">
          <svg width="15" height="15">
             <use href="${icons}#icon-add"></use>
          </svg>
        </div>
      </button>
      <div class="accordion-content">
        <div class="faq-answer-inner">${item.answer}</div>
      </div>
    </div>
  `
    )
    .join('');

  accordionContainer.addEventListener('click', event => {
    const btn = event.target.closest('.accordion-header');
    if (!btn) return;

    const currentItem = btn.parentElement;
    const isActive = currentItem.classList.contains('active');

    document.querySelectorAll('.accordion-item').forEach(item => {
      item.classList.remove('active');
    });

    if (!isActive) {
      currentItem.classList.add('active');
    }
  });
}
