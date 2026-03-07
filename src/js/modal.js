import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { renderDetailsHTML, renderOrderHTML } from './render.js';
import { allAnimals } from './product.js';

const mwContainer = document.getElementById('mw');

// Универсальный обработчик кликов
document.addEventListener('click', async event => {
  const target = event.target;
  const openBtn = target.closest('[data-modal-open]');
  const closeBtn = target.closest('[data-modal-close]');
  const isBackdrop = target.classList.contains('backdrop');
  console.log(allAnimals);
  // Кнопка открытия на фому "Pet Modal"
  if (openBtn) {
    const petId = openBtn.dataset.id;
    const originalText = openBtn.textContent;

    openBtn.disabled = true;
    openBtn.textContent = 'Завантаження...';

    try {
      // Запрос
      const pet = allAnimals.find(item => item._id === petId);

      if (!pet) {
        throw new Error('Тваринку не знайдено');
      }

      // Отрисовка контенка
      mwContainer.innerHTML = renderDetailsHTML(pet);
      document.body.style.overflow = 'hidden';
    } catch (error) {
      iziToast.error({
        title: 'Помилка',
        message: 'Щось пішло не так',
        position: 'topRight',
      });
    } finally {
      if (openBtn) {
        openBtn.disabled = false;
        openBtn.textContent = originalText;
      }
    }
    return;
  }

  // Закрытие на фон и кнопку
  if (closeBtn || isBackdrop) {
    const modal = document.querySelector('.animal-modal');
    const backdrop = document.querySelector('.backdrop');

    modal?.classList.add('exit-up');
    backdrop?.style.setProperty('opacity', '0');

    setTimeout(() => {
      mwContainer.innerHTML = '';
      document.body.style.overflow = '';
    }, 400);
  }

  // Кнопка переключения на фому "Adopt Modal"
  if (target.closest('[data-modal-next]')) {
    const currentModal = document.querySelector('.animal-modal');
    currentModal.classList.add('exit-up');

    setTimeout(() => {
      mwContainer.innerHTML = renderOrderHTML();
    }, 400);
  }
});
