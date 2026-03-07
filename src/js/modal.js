// modal.js
import Swal from 'sweetalert2';
import { submitOrder } from './api';
import { renderDetailsHTML } from './render';
import { refs } from './refs';
import { getLoadedAnimals } from './product';

let currentAnimalId = null;

// ====== REFS для статичної форми ======
const orderBackdrop = document.querySelector('[data-modal="order"]');
const orderForm = orderBackdrop?.querySelector('.js-order-form');
const orderCloseBtn = orderBackdrop?.querySelector('.js-order-close');

// ====== ДЕЛЕГУВАННЯ КЛІКІВ (для динамічного контенту) ======
document.addEventListener('click', event => {
  const target = event.target;

  // 1. Відкрити деталі тварини
  if (target.closest('[data-modal-open="details"]')) {
    openDetailsModal(target.closest('[data-modal-open="details"]'));
    return;
  }

  // 2. Перейти до форми — закрити деталі, відкрити форму
  if (target.closest('[data-modal-next="order"]')) {
    closeDetailsModal(true);
    openOrderModal();
    return;
  }

  // 3. Закрити деталі (кнопка або фон)
  if (
    target.closest('[data-modal-close]') ||
    target.classList.contains('backdrop')
  ) {
    closeDetailsModal();
    return;
  }
});

// Закрити форму по фону
orderBackdrop?.addEventListener('click', e => {
  if (e.target === orderBackdrop) closeOrderModal();
});

// Закрити форму по кнопці
orderCloseBtn?.addEventListener('click', closeOrderModal);

// ESC — закриває будь-що відкрите
document.addEventListener('keydown', e => {
  if (e.key !== 'Escape') return;

  if (refs.mwContainer.innerHTML) closeDetailsModal();
  if (!orderBackdrop?.classList.contains('is-hidden')) closeOrderModal();
});

// Submit (статичний елемент — звичайний addEventListener)
orderForm?.addEventListener('submit', handleOrderSubmit);

// Очищення помилок при введенні
orderForm?.addEventListener('input', e => {
  const field = e.target;
  if (field.matches('input, textarea') && field.classList.contains('error')) {
    if (field.value.trim()) clearFieldError(field);
  }
});

// ====== ДЕТАЛІ (динамічна модалка) ======
function openDetailsModal(btn) {
  const petId = btn.dataset.id;
  const pet = getLoadedAnimals().find(a => a._id === petId);

  if (!pet) return;

  currentAnimalId = petId;
  refs.mwContainer.innerHTML = renderDetailsHTML(pet);
  document.body.style.overflow = 'hidden';
}

function closeDetailsModal(keepOverflow = false) {
  const modal = refs.mwContainer.querySelector('.animal-modal');
  const backdrop = refs.mwContainer.querySelector('.backdrop');

  modal?.classList.add('exit-up');
  if (backdrop) backdrop.style.opacity = '0';

  setTimeout(() => {
    refs.mwContainer.innerHTML = '';
    if (!keepOverflow) document.body.style.overflow = '';
  }, 400);
}

// ====== ФОРМА ЗАМОВЛЕННЯ (статична) ======
function openOrderModal() {
  orderBackdrop?.classList.remove('is-hidden');
  document.body.style.overflow = 'hidden';
}

function closeOrderModal() {
  orderBackdrop?.classList.add('is-hidden');
  document.body.style.overflow = '';
  orderForm?.reset();
  clearAllErrors();
}

// ====== SUBMIT ======
async function handleOrderSubmit(e) {
  e.preventDefault();
  const form = e.target;
  const { name, phone, comment } = form.elements;

  const isNameValid = validateName(name);
  const isPhoneValid = validatePhone(phone);
  if (!isNameValid || !isPhoneValid) return;

  const payload = {
    animalId: currentAnimalId,
    name: name.value.trim(),
    phone: phone.value.replace(/\D/g, ''),
  };
  if (comment?.value.trim()) payload.comment = comment.value.trim();

  const submitBtn = form.querySelector('[type="submit"]');
  submitBtn.disabled = true;
  submitBtn.textContent = 'Відправляємо...';

  try {
    const response = await submitOrder(payload);
    console.log('Order response:', response);

    await Swal.fire({
      icon: 'success',
      title: 'Заявку відправлено!',
      text: "Ми зв'яжемося з вами найближчим часом.",
    });

    closeOrderModal();
    currentAnimalId = null;
  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: 'Помилка',
      text: error.response?.data?.message || 'Не вдалося відправити заявку.',
    });
  } finally {
    submitBtn.disabled = false;
    submitBtn.textContent = 'Надіслати';
  }
}

// ====== ВАЛІДАЦІЯ ======
function validateName(fieldEl) {
  if (!fieldEl.value.trim()) {
    setFieldError(fieldEl, "Будь ласка, введіть ім'я");
    return false;
  }
  if (!/^[A-Za-zА-Яа-яІіЇїЄєҐґ\s'-]{3,}$/.test(fieldEl.value.trim())) {
    setFieldError(fieldEl, "Ім'я має містити мінімум 3 літери");
    return false;
  }
  clearFieldError(fieldEl);
  return true;
}

function validatePhone(fieldEl) {
  const digits = fieldEl.value.replace(/\D/g, '');
  fieldEl.value = digits;

  if (!/^380\d{9}$/.test(digits)) {
    setFieldError(fieldEl, 'Номер має містити 12 цифр і починатися з 380');
    return false;
  }
  clearFieldError(fieldEl);
  return true;
}

function setFieldError(fieldEl, message) {
  const wrap = fieldEl.closest('.form-field');
  const errorEl = wrap?.querySelector('.error-text');
  fieldEl.classList.add('error');
  if (errorEl) errorEl.textContent = message;
}

function clearFieldError(fieldEl) {
  const wrap = fieldEl.closest('.form-field');
  const errorEl = wrap?.querySelector('.error-text');
  fieldEl.classList.remove('error');
  if (errorEl) errorEl.textContent = '';
}

function clearAllErrors() {
  orderForm?.querySelectorAll('.error').forEach(clearFieldError);
}
