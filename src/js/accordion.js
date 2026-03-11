import { faqData } from './faqData';

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
          <svg width="20" height="20" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 1V17M1 9H17" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
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
